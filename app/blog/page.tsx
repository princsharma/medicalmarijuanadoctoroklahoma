import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { BlogHero } from "@/components/sections/blog/blog-hero";
import { BlogTrustBadges } from "@/components/sections/blog/blog-trust-badges";
import { BlogFeaturedCard } from "@/components/sections/blog/blog-featured-card";
import { BlogListSection } from "@/components/sections/blog/blog-list-section";
import { BlogCtaBanner } from "@/components/sections/blog/blog-cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllBlogPosts } from "@/lib/blogs";
import { blogListSchema } from "@/lib/blog-schema";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.blog);

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];

  return (
    <div className="flex flex-col bg-[#FAF8F5]">
      <JsonLd data={blogListSchema(posts)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Blog & Guides"
        currentPath={pages.blog.path}
        includeSchema={false}
      />
      <main id="main-content">
        <BlogHero />
        <BlogTrustBadges />
        {featuredPost && <BlogFeaturedCard post={featuredPost} />}
        <BlogListSection posts={posts} />
        <BlogCtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
