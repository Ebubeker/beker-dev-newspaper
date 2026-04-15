import Link from "next/link";
import { site } from "@/content/site";

/**
 * The oversized typographic footer. Ample-inspired full-width wordmark that
 * says "this is the paper you're reading," with a compact sitemap strip
 * above it.
 */
const MegaFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-black text-white">
      <div className="px-6 md:px-10 pt-14 pb-8 border-b border-white/20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-14">
            <div>
              <p className="pirateOne uppercase tracking-[0.2em] text-xs text-white/50 mb-4">
                Sections
              </p>
              <ul className="space-y-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-red-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-[0.2em] text-xs text-white/50 mb-4">
                Services
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-red-400 transition-colors"
                  >
                    Landing Page in a Day
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-red-400 transition-colors"
                  >
                    MVP Sprint
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-red-400 transition-colors"
                  >
                    Web App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-red-400 transition-colors"
                  >
                    Dev Partnership
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="pirateOne uppercase tracking-[0.2em] text-xs text-white/50 mb-4">
                Elsewhere
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
              The paper
            </p>
            <p>{site.description}</p>
            <p className="mt-3 pirateOne text-xs uppercase tracking-widest">
              Based in {site.location.city}, {site.location.country}
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
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="pirateOne uppercase tracking-[0.2em]">
          Shipped by one developer.
        </p>
      </div>
    </footer>
  );
};

export default MegaFooter;
