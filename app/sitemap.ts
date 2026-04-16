import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { getAllProjectSlugs } from "@/content/projects";
import { site, withLocale } from "@/content/site";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

/**
 * Sitemap covers every locale for the agency routes and the English-only
 * blog routes. Each entry carries a `languages` alternate map so Google
 * picks up hreflang relationships. Localized landing pages get the highest
 * priority for the default locale.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const slugs = getAllProjectSlugs();

  function alternatesFor(basePath: string): Record<string, string> {
    const languages: Record<string, string> = {};
    for (const l of locales) {
      languages[l] = `${site.url}${withLocale(basePath, l)}`;
    }
    languages["x-default"] = `${site.url}${withLocale(basePath, defaultLocale)}`;
    return languages;
  }

  const localizedEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales as readonly Locale[]) {
    const isDefault = locale === defaultLocale;

    localizedEntries.push({
      url: `${site.url}${withLocale("/", locale)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: isDefault ? 1 : 0.9,
      alternates: { languages: alternatesFor("/") },
    });

    localizedEntries.push({
      url: `${site.url}${withLocale("/work", locale)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: isDefault ? 0.9 : 0.8,
      alternates: { languages: alternatesFor("/work") },
    });

    localizedEntries.push({
      url: `${site.url}${withLocale("/contact", locale)}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: isDefault ? 0.8 : 0.7,
      alternates: { languages: alternatesFor("/contact") },
    });

    for (const slug of slugs) {
      localizedEntries.push({
        url: `${site.url}${withLocale(`/work/${slug}`, locale)}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: isDefault ? 0.7 : 0.6,
        alternates: { languages: alternatesFor(`/work/${slug}`) },
      });
    }
  }

  // Blog is English-only and lives outside the locale tree.
  const blogEntries: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];

  return [...localizedEntries, ...blogEntries];
}
