import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { BlogGoogleTrustToast } from "@/components/sections/blog/blog-google-trust";
import { BlogPostPage } from "@/components/sections/blog/blog-post";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, blogPostSeo, getBlogPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

type BlogRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [{ slug: "oklahoma-cannabis-laws" }];
}

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return buildMetadata(blogPostSeo(post), {
    keywords: [post.focusKeyword, "Oklahoma medical marijuana laws", "OMMA rules"],
    other: { "focus-keyword": post.focusKeyword },
  });
}

export default async function BlogArticleRoute({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F5F0]">
      <JsonLd data={articleSchema(post)} />
      <SiteHeader />
      <PageBreadcrumb
        page={post.title}
        currentPath={post.path}
        items={[{ label: "Blog & Guides", href: "/blog/" }]}
      />
      <BlogGoogleTrustToast />
      <main id="main-content" className="flex-1">
        <BlogPostPage post={post} />
      </main>
      <SiteFooter />
    </div>
  );
}
