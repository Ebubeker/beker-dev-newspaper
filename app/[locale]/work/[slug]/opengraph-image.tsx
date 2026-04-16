import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/content/projects";
import { site } from "@/content/site";
import { defaultLocale, isLocale } from "@/i18n/config";

export const runtime = "edge";
export const alt = "BekerDev case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const project = getProjectBySlug(params.slug, locale);
  const title = project?.title ?? site.name;
  const kicker = project?.kicker ?? "BekerDev";
  const year = project?.year ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#ffffff",
          fontFamily: "serif",
          color: "#0a0a0a",
          borderTop: "12px solid #0a0a0a",
          borderBottom: "12px solid #0a0a0a",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #0a0a0a",
            paddingBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 6,
            }}
          >
            BEKERDEV
          </div>
          <div
            style={{
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "#666",
            }}
          >
            Case Study · {year}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 5,
              color: "#c00",
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #0a0a0a",
            paddingTop: 20,
            fontSize: 22,
          }}
        >
          <div>{site.founder.name}</div>
          <div style={{ color: "#666" }}>beker.dev</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
