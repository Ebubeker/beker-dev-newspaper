import { getSiteMeta, site, withLocale } from "@/content/site";
import { getServices } from "@/content/services";
import { getFaqs } from "@/content/faqs";
import { localeLabels, type Locale } from "@/i18n/config";
import JsonLd from "./JsonLd";

/**
 * Global JSON-LD emitted once per locale in the [locale] layout. Covers
 * the site-wide Person, Organization, ProfessionalService, and FAQPage
 * schemas so every page inherits them for rich-result eligibility.
 */
export default function SiteJsonLd({ locale }: { locale: Locale }) {
  const meta = getSiteMeta(locale);
  const services = getServices(locale);
  const faqs = getFaqs(locale);
  const localizedUrl = `${site.url}${withLocale("/", locale)}`;
  const servicesUrl = `${site.url}${withLocale("/#services", locale)}`;
  const contactUrl = `${site.url}${withLocale(site.contact.inquiries, locale)}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.name,
    jobTitle: meta.founderRole,
    url: site.url,
    sameAs: [site.social.linkedin, site.social.github],
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressCountry: site.location.countryCode,
    },
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: localizedUrl,
    logo: `${site.url}${site.ogImage}`,
    description: meta.description,
    founder: {
      "@type": "Person",
      name: site.founder.name,
    },
    foundingDate: `${site.since}`,
    sameAs: [site.social.linkedin, site.social.github],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: contactUrl,
      availableLanguage: Object.values(localeLabels),
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: localizedUrl,
    description: meta.description,
    areaServed: "Worldwide",
    priceRange: "$$",
    provider: {
      "@type": "Person",
      name: site.founder.name,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BekerDev Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.pitch,
          url: servicesUrl,
        },
      })),
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={[person, organization, professionalService, faqPage]} />;
}
