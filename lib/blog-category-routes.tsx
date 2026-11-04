import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { BlogGoogleTrustToast } from "@/components/sections/blog/blog-google-trust";
import { BlogDummyArticle } from "@/components/sections/blog/blog-dummy-article";
import { BlogIndex } from "@/components/sections/blog/blog-index";
import { BlogPostPage } from "@/components/sections/blog/blog-post";
import { JsonLd } from "@/components/seo/json-ld";
import {
  blogJsonLdSchema,
  blogPosts,
  blogPostSeo,
  blogPostUsesGraphSchema,
  getBlogPost,
} from "@/lib/blog";
import { getBlogCategory, getBlogCategoryArticle } from "@/lib/blog-categories";
import { buildMetadata } from "@/lib/seo";

export function createCategoryPage(categorySlug: string) {
  async function generateMetadata(): Promise<Metadata> {
    const category = getBlogCategory(categorySlug);
    if (!category) return {};

    return buildMetadata({
      path: category.path,
      title: `${category.label} | Oklahoma Medical Marijuana Blog`,
      description: category.description,
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  function Page() {
    const category = getBlogCategory(categorySlug);
    if (!category) notFound();

    return (
      <div className="flex min-h-screen flex-col bg-[#F6F5F0]">
        <SiteHeader />
        <PageBreadcrumb
          page={category.label}
          currentPath={category.path}
          items={[{ label: "Blog & Guides", href: category.parentPath }]}
        />
        <main id="main-content" className="flex-1">
          <BlogIndex categorySlug={category.slug} />
        </main>
        <SiteFooter />
      </div>
    );
  }

  return { generateMetadata, default: Page };
}

export function createCategoryArticlePage(categorySlug: string) {
  function publishedPosts() {
    return blogPosts.filter((post) => post.path.startsWith(`/blog/${categorySlug}/`));
  }

  function generateStaticParams() {
    const category = getBlogCategory(categorySlug);
    const slugs = new Set([
      ...(category?.articles ?? []).map((article) => article.slug),
      ...publishedPosts().map((post) => post.slug),
    ]);
    return [...slugs].map((article) => ({ article }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ article: string }>;
  }): Promise<Metadata> {
    const { article } = await params;
    const category = getBlogCategory(categorySlug);
    const post = getBlogPost(article);
    if (category && post && post.path === `/blog/${categorySlug}/${article}/`) {
      const base = buildMetadata(blogPostSeo(post), {
        keywords: [post.focusKeyword, "Oklahoma medical marijuana laws", "OMMA rules"],
        other: { "focus-keyword": post.focusKeyword },
      });
      const description = post.metaDescription;
      return {
        ...base,
        description,
        openGraph: base.openGraph ? { ...base.openGraph, description } : undefined,
        twitter: base.twitter ? { ...base.twitter, description } : undefined,
      };
    }

    const item = getBlogCategoryArticle(categorySlug, article);
    if (!category || !item) return {};

    const base = buildMetadata({
      path: item.path,
      title: `${item.title} | ${category.label}`,
      description: item.excerpt,
      datePublished: "2026-11-03",
      dateModified: "2026-11-03",
      changeFrequency: "monthly",
      priority: 0.3,
    });

    return {
      ...base,
      robots: { index: false, follow: true },
    };
  }

  async function Page({ params }: { params: Promise<{ article: string }> }) {
    const { article } = await params;
    const category = getBlogCategory(categorySlug);
    const post = getBlogPost(article);
    if (category && post && post.path === `/blog/${categorySlug}/${article}/`) {
      return (
        <div className="flex min-h-screen flex-col bg-[#F6F5F0]">
          <JsonLd data={blogJsonLdSchema(post)} />
          <SiteHeader />
          <PageBreadcrumb
            page={post.title}
            currentPath={post.path}
            items={[
              { label: "Blog & Guides", href: "/blog/" },
              { label: category.label, href: category.path },
            ]}
            includeSchema={!blogPostUsesGraphSchema(post.slug)}
          />
          <BlogGoogleTrustToast />
          <main id="main-content" className="flex-1">
            <BlogPostPage post={post} />
          </main>
          <SiteFooter />
        </div>
      );
    }

    const item = getBlogCategoryArticle(categorySlug, article);
    if (!category || !item) notFound();

    return (
      <div className="flex min-h-screen flex-col bg-[#F6F5F0]">
        <SiteHeader />
        <PageBreadcrumb
          page={item.title}
          currentPath={item.path}
          items={[
            { label: "Blog & Guides", href: "/blog/" },
            { label: category.label, href: category.path },
          ]}
        />
        <main id="main-content" className="flex-1">
          <BlogDummyArticle category={category} article={item} />
        </main>
        <SiteFooter />
      </div>
    );
  }

  return { generateStaticParams, generateMetadata, default: Page };
}
