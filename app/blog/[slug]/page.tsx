import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { BlogGoogleTrustToast } from "@/components/sections/blog/blog-google-trust";
import { BlogPostPage } from "@/components/sections/blog/blog-post";
import { JsonLd } from "@/components/seo/json-ld";
import {
  blogJsonLdSchema,
  blogPostUsesGraphSchema,
  blogPosts,
  blogPostSeo,
  getBlogPost,
} from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

type BlogRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  const base = buildMetadata(blogPostSeo(post), {
    keywords: [post.focusKeyword, "Oklahoma medical marijuana laws", "OMMA rules"],
    other: { "focus-keyword": post.focusKeyword },
  });

  const description = post.metaDescription;

  return {
    ...base,
    description,
    openGraph: base.openGraph
      ? { ...base.openGraph, description }
      : undefined,
    twitter: base.twitter ? { ...base.twitter, description } : undefined,
  };
}

export default async function BlogArticleRoute({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F5F0]">
      <JsonLd data={blogJsonLdSchema(post)} />
      <SiteHeader />
      <PageBreadcrumb
        page={post.title}
        currentPath={post.path}
        items={[{ label: "Blog & Guides", href: "/blog/" }]}
        includeJsonLd={!blogPostUsesGraphSchema(post.slug)}
      />
      <BlogGoogleTrustToast />
      <main id="main-content" className="flex-1">
        <BlogPostPage post={post} />
      </main>
      <SiteFooter />
    </div>
  );
}
