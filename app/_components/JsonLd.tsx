/**
 * Generic JSON-LD emitter. Pass any schema.org structured data object and it
 * gets injected as a <script type="application/ld+json"> tag.
 *
 * Use the pre-built helpers in SiteJsonLd.tsx and the case study page for the
 * common Person / Organization / Service / FAQ / BreadcrumbList schemas.
 */
type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe here: the data shape is typed and authored by us.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
