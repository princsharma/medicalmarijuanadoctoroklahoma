import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { BlogIndex } from "@/components/sections/blog/blog-index";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.blog);

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <PageBreadcrumb page="Blog & Guides" currentPath={pages.blog.path} />
      <main id="main-content" className="flex-1">
        <BlogIndex />
      </main>
      <SiteFooter />
    </div>
  );
}
