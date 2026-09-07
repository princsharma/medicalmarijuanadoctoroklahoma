import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BlogPostHero } from "@/components/sections/blog/post/blog-post-hero";
import { BlogPostTrustBar } from "@/components/sections/blog/post/blog-post-trust-bar";
import { BlogPostToc } from "@/components/sections/blog/post/blog-post-toc";
import { BlogPostContent } from "@/components/sections/blog/post/blog-post-content";
import { BlogPostAuthor } from "@/components/sections/blog/post/blog-post-author";
import { BlogPostRelated } from "@/components/sections/blog/post/blog-post-related";
import { BlogPostGoogleBadge } from "@/components/sections/blog/post/blog-post-google-badge";
import { BlogPostCtaBanner } from "@/components/sections/blog/post/blog-post-cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/lib/blogs";
import { blogArticleSchema } from "@/lib/blog-schema";
import { SITE_NAME, SITE_URL, absoluteUrl, clampMetaDescription, clampMetaTitle } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const post of blogPosts) {
    slugs.push({ slug: post.slug });
    if (post.aliases) {
      for (const alias of post.aliases) {
        slugs.push({ slug: alias });
      }
    }
  }
  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Medical Marijuana Doctor Oklahoma" };
  }

  const title = post.metaTitle || clampMetaTitle(`${post.title} ${post.titleSecondary ?? ""} | MMJ Doctor OK`);
  const description = post.metaDescription || clampMetaDescription(post.subtitle);
  const canonicalPath = `/blog/${post.slug}/`;
  const url = absoluteUrl(canonicalPath);
  const ogImage = post.coverImage.startsWith("http") ? post.coverImage : `${SITE_URL}${post.coverImage}`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post);
  const schemas = blogArticleSchema(post);

  return (
    <div className="flex flex-col bg-[#FAF7F2]">
      {schemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <SiteHeader />
      <main id="main-content">
        {/* Hero Section */}
        <BlogPostHero post={post} />

        {/* Floating Trust Bar */}
        <BlogPostTrustBar post={post} />

        {/* Main 2-Column Section (Sticky TOC on Left + Article Content on Right) */}
        <div className="w-full relative flex flex-col lg:flex-row items-start justify-start mt-8 sm:mt-10 lg:mt-12 z-10">
          <BlogPostToc sections={post.sections} />
          <BlogPostContent post={post} />
        </div>

        {/* About the Author */}
        <BlogPostAuthor author={post.author} />

        {/* More Resources / Related Guides */}
        <BlogPostRelated relatedPosts={relatedPosts} />

        {/* Google Highlight Badge */}
        <BlogPostGoogleBadge />

        {/* Pre-Footer CTA Banner */}
        <BlogPostCtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}
