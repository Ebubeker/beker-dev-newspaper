"use server";

import { Resend } from "resend";
import { site } from "@/content/site";

/**
 * Server-side state for the contact form. The action returns machine-readable
 * status codes rather than user-facing strings; the client form maps them to
 * localized dictionary messages so the language stays consistent with the
 * current URL locale.
 */
export type ContactStatusCode =
  | "idle"
  | "success"
  | "missingFields"
  | "invalidEmail"
  | "notWiredUp"
  | "sendFailed";

export type ContactState = {
  code: ContactStatusCode;
};

const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL ?? "BekerDev <noreply@beker.dev>";
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL ?? site.contact.email;

function sanitize(value: FormDataEntryValue | null, maxLength = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: if a bot fills this hidden field, silently "succeed".
  const honeypot = sanitize(formData.get("company_website"));
  if (honeypot) {
    return { code: "success" };
  }

  const name = sanitize(formData.get("name"), 120);
  const email = sanitize(formData.get("email"), 180);
  const budget = sanitize(formData.get("budget"), 60);
  const service = sanitize(formData.get("service"), 60);
  const message = sanitize(formData.get("message"), 4000);

  if (!name || !email || !message) {
    return { code: "missingFields" };
  }

  if (!isValidEmail(email)) {
    return { code: "invalidEmail" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured.");
    return { code: "notWiredUp" };
  }

  const resend = new Resend(apiKey);

  const subject = `New enquiry from ${name}${service ? `: ${service}` : ""}`;
  const plainText = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service || "(not specified)"}`,
    `Budget: ${budget || "(not specified)"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:system-ui,sans-serif;max-width:600px">
      <h2 style="margin:0 0 16px">New enquiry for ${site.name}</h2>
      <table style="width:100%;border-collapse:collapse">
        <tbody>
          <tr><td style="padding:6px 0;color:#666">Name</td><td style="padding:6px 0"><strong>${name}</strong></td></tr>
          <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#666">Service</td><td style="padding:6px 0">${service || "(not specified)"}</td></tr>
          <tr><td style="padding:6px 0;color:#666">Budget</td><td style="padding:6px 0">${budget || "(not specified)"}</td></tr>
        </tbody>
      </table>
      <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
      <p style="white-space:pre-wrap;line-height:1.5">${message.replace(/</g, "&lt;")}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject,
      text: plainText,
      html: htmlBody,
    });

    if (error) {
      console.error("[contact] Resend send error:", error);
      return { code: "sendFailed" };
    }

    return { code: "success" };
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return { code: "sendFailed" };
  }
}
