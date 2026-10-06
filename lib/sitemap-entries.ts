import { contributors } from "@/lib/contributors";
import { blogPosts } from "@/lib/blog";
import { doctors } from "@/lib/doctors";
import { absoluteUrl, pages, withTrailingSlash } from "@/lib/seo";

export type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

function toIsoDate(date: string) {
  if (date.includes("T")) return date;
  return `${date}T00:00:00.000Z`;
}

export function getSitemapEntries(): SitemapEntry[] {
  const staticEntries: SitemapEntry[] = Object.values(pages).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: toIsoDate(page.dateModified),
    changeFrequency: page.changeFrequency ?? "monthly",
    priority: page.priority ?? 0.5,
  }));

  const doctorEntries: SitemapEntry[] = doctors.map((doctor) => ({
    url: absoluteUrl(withTrailingSlash(`/doctors/${doctor.slug}`)),
    lastModified: toIsoDate("2026-08-05"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const contributorEntries: SitemapEntry[] = contributors.map((contributor) => ({
    url: absoluteUrl(withTrailingSlash(`/contributors/${contributor.slug}`)),
    lastModified: toIsoDate("2026-08-05"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogEntries: SitemapEntry[] = blogPosts.map((post) => ({
    url: absoluteUrl(post.path),
    lastModified: toIsoDate(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...doctorEntries, ...contributorEntries, ...blogEntries];
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildSitemapXml(entries: SitemapEntry[]) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${escapeXml(entry.lastModified)}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
