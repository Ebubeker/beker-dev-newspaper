import Link from "next/link";
import Github from "@/assets/svg/Github";
import Linkedin from "@/assets/svg/Linkedin";
import { site, withLocale } from "@/content/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionary";
import FormattedDate from "./bodyGrid/FormattedDate";
import LanguageSwitcher from "./LanguageSwitcher";

type NavKey = keyof Dictionary["nav"];

const Header = ({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) => {
  const homeHref = `/${locale}`;

  return (
    <>
      <div className="flex justify-center sm:justify-between items-stretch py-8 border-b-[3px] border-black/80">
        <div className="max-sm:hidden w-[150px] lg:w-[210px] xl:w-[300px] px-6 text-center border-r-[2px] border-black/20 flex items-center justify-center">
          <div>
            <p className="text-xs xl:text-sm">
              -{dict.header.since} {site.since}-
            </p>
            <p className="text-xl xl:text-3xl font-extrabold pirateOne">
              {dict.header.studioTop}
              <span className="text-red-400">{dict.header.studioTopRed}</span>
            </p>
            <p className="text-xs xl:text-sm">{dict.header.studioBottom}</p>
          </div>
        </div>
        <Link
          href={homeHref}
          className="unifrakturmaguntia text-[73px] sm:text-[55px] md:text-[73px] lg:text-[100px] xl:text-[120px] 2xl:text-[145px] leading-[100px] lg:leading-[145px] relative"
          aria-label={`${site.name} ${dict.header.homeAriaLabel}`}
        >
          {site.brand}
          <span
            className="absolute top-0.5 -right-5 w-[20px] h-[20px] border border-black text-black rounded-full flex justify-center items-center !text-sm font-bolder"
            style={{ fontFamily: "Sans-serif" }}
          >
            <span>./</span>
          </span>
        </Link>
        <div className="max-sm:hidden w-[150px] lg:w-[210px] xl:w-[300px] px-6 text-center border-l-[2px] border-black/20 flex items-center justify-center">
          <div className="flex gap-3">
            <a
              href={site.social.linkedin}
              className="rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin
                width="38px"
                height="38px"
                className="cursor-pointer max-xl:w-8"
              />
            </a>
            <a
              href={site.social.github}
              className="rounded-full"
              aria-label="GitHub"
            >
              <Github
                width="38px"
                height="38px"
                className="cursor-pointer max-xl:w-8"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black/20 mt-1 pb-1 flex justify-between max-lg:text-xs items-center gap-4 flex-wrap">
        <FormattedDate />
        <nav aria-label={dict.nav.primaryAriaLabel}>
          <ul className="flex gap-4 md:gap-6 items-center">
            {site.nav.map((item) => {
              const href = item.localized
                ? withLocale(item.href, locale)
                : item.href;
              const label = dict.nav[item.key as NavKey];
              const showEnHint = item.key === "journal" && locale !== "en";
              return (
                <li key={item.key}>
                  <Link
                    href={href}
                    className="hover:text-red-500 transition-colors"
                  >
                    {label}
                    {showEnHint && (
                      <span className="ml-1 text-black/50 text-xs align-top">
                        {dict.nav.blogEnHint}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <LanguageSwitcher
          ariaLabel={dict.languageSwitcher.ariaLabel}
          currentLocale={locale}
        />
      </div>
    </>
  );
};

export default Header;
