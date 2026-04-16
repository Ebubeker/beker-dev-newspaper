import Link from "next/link";
import { getSiteMeta, site, withLocale } from "@/content/site";
import { getServices } from "@/content/services";
import { interpolate, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";

type NavKey = keyof Dictionary["nav"];

/**
 * The oversized typographic footer. Ample-inspired full-width wordmark that
 * says "this is the paper you're reading," with a compact sitemap strip
 * above it.
 */
const MegaFooter = ({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) => {
  const year = new Date().getFullYear();
  const meta = getSiteMeta(locale);
  const services = getServices(locale);
  const servicesHref = withLocale("/#services", locale);

  return (
    <footer className="mt-10 bg-black text-white">
      <div className="px-6 md:px-10 pt-14 pb-8 border-b border-white/20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-14">
            <div>
              <p className="pirateOne uppercase tracking-[0.2em] text-xs text-white/50 mb-4">
                {dict.footer.sectionsLabel}
              </p>
              <ul className="space-y-2">
                {site.nav.map((item) => {
                  const href = item.localized
                    ? withLocale(item.href, locale)
                    : item.href;
                  const label = dict.nav[item.key as NavKey];
                  const showEnHint =
                    item.key === "journal" && locale !== "en";
                  return (
                    <li key={item.key}>
                      <Link
                        href={href}
                        className="hover:text-red-400 transition-colors"
                      >
                        {label}
                        {showEnHint && (
                          <span className="ml-1 text-white/40 text-xs">
                            {dict.nav.blogEnHint}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-[0.2em] text-xs text-white/50 mb-4">
                {dict.footer.servicesLabel}
              </p>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={servicesHref}
                      className="hover:text-red-400 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-[0.2em] text-xs text-white/50 mb-4">
                {dict.footer.elsewhereLabel}
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-red-400 transition-colors"
                  >
                    GitHub ↗
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="hover:text-red-400 transition-colors"
                  >
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dateline */}
          <div className="md:text-right text-sm text-white/70 max-w-xs">
            <p className="pirateOne uppercase tracking-[0.2em] text-xs text-white/50 mb-3">
              {dict.footer.thePaperLabel}
            </p>
            <p>{meta.description}</p>
            <p className="mt-3 pirateOne text-xs uppercase tracking-widest">
              {interpolate(dict.footer.basedIn, {
                city: site.location.city,
                country: site.location.country,
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="overflow-hidden px-2">
        <p
          className="unifrakturmaguntia text-center text-[24vw] leading-[0.85] select-none"
          aria-hidden
        >
          {site.brand}
        </p>
      </div>

      <div className="px-6 md:px-10 py-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
        <p>
          © {year} {site.name}. {dict.footer.rightsReserved}
        </p>
        <p className="pirateOne uppercase tracking-[0.2em]">
          {dict.footer.shippedByOne}
        </p>
      </div>
    </footer>
  );
};

export default MegaFooter;
