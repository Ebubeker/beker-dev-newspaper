import Header from "../_components/Header";
import MegaFooter from "../_components/sections/MegaFooter";
import SiteJsonLd from "../_components/SiteJsonLd";
import { getDictionary } from "@/i18n/dictionary";

/**
 * Blog layout. The journal is English-only by product decision, so this
 * layout hardcodes "en" and sits as a sibling of `[locale]/` inside `app/`.
 * It still reuses the localized Header/Footer/SiteJsonLd so the masthead
 * remains consistent with the rest of the site.
 */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = "en" as const;
  const dict = getDictionary(locale);

  return (
    <>
      <SiteJsonLd locale={locale} />
      <div className="antialiased px-4">
        <Header locale={locale} dict={dict} />
        {children}
      </div>
      <MegaFooter locale={locale} dict={dict} />
    </>
  );
}
