import { site } from "@/content/site";
import { services } from "@/content/services";
import { faqs } from "@/content/faqs";
import JsonLd from "./JsonLd";

/**
 * Global JSON-LD emitted once in the root layout. Covers the site-wide
 * Person, Organization, ProfessionalService, and FAQPage schemas so every
 * page inherits them for rich-result eligibility.
 */
export default function SiteJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.role,
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
    url: site.url,
    logo: `${site.url}${site.ogImage}`,
    description: site.description,
    founder: {
      "@type": "Person",
      name: site.founder.name,
    },
    foundingDate: `${site.since}`,
    sameAs: [site.social.linkedin, site.social.github],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${site.url}${site.contact.inquiries}`,
      availableLanguage: ["English"],
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: site.description,
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
          url: `${site.url}/#services`,
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
