import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BlogCta } from "@/components/sections/blog/blog-cta";
import type { BlogCategory, BlogCategoryArticle } from "@/lib/blog-categories";

type BlogDummyArticleProps = {
  category: BlogCategory;
  article: BlogCategoryArticle;
};

export function BlogDummyArticle({ category, article }: BlogDummyArticleProps) {
  return (
    <>
      <section className="px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18] uppercase">
            {category.label}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            {article.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0E3B2E]/70">
            This Oklahoma medical marijuana guide is being prepared. Browse the {category.label}{" "}
            category or return to the full blog for published patient resources.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={category.path}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0E3B2E] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0E3B2E]/90"
            >
              {category.label} guides <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/blog/"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white/80 px-5 text-sm font-medium text-[#0E3B2E]"
            >
              <BookOpen className="size-4 text-[#2F7A18]" aria-hidden="true" />
              All blog guides
            </Link>
          </div>
        </div>
      </section>
      <BlogCta />
    </>
  );
}
