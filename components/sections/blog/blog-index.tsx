"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Clock3, Search } from "lucide-react";
import { BlogCta } from "@/components/sections/blog/blog-cta";
import { blogPosts } from "@/lib/blog";
import { formatDisplayDate } from "@/lib/seo";

const categories = [
  "All",
  "OMMA Guidelines",
  "Qualifying Conditions",
  "Card Renewal",
  "Patient Rights",
  "Dosage & Usage",
];

export function BlogIndex() {
  const featuredPost = blogPosts[0];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const searchTerm = searchQuery.trim().toLowerCase();
  const filteredPosts = useMemo(
    () =>
      blogPosts.filter((post) => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const searchableText = [
          post.title,
          post.subtitle,
          post.excerpt,
          post.category,
          post.focusKeyword,
          post.author.name,
        ]
          .join(" ")
          .toLowerCase();

        return matchesCategory && (!searchTerm || searchableText.includes(searchTerm));
      }),
    [searchTerm, selectedCategory]
  );

  return (
    <>
      <section className="px-6 pt-16 pb-12 text-center sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18] uppercase">
            Knowledge for Oklahoma patients
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-tight font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            Your Guide to Oklahoma
            <br className="hidden sm:block" /> Medical Marijuana
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#0E3B2E]/70">
            Expert physician guides, OMMA compliance rules, qualifying health conditions, and
            cannabis medical insights for Oklahoma patients.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#latest-guides"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0E3B2E] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0E3B2E]/90"
            >
              Explore guides <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <span className="inline-flex h-11 items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white/80 px-5 text-sm font-medium text-[#0E3B2E]">
              <BookOpen className="size-4 text-[#2F7A18]" aria-hidden="true" />
              Clear, patient-friendly resources
            </span>
          </div>
        </div>
      </section>

      {featuredPost ? (
        <section className="border-y border-[#0E3B2E]/10 bg-white/55 px-6 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-[#2F7A18] uppercase">
              Featured guide
            </p>
            <article className="grid overflow-hidden rounded-3xl border border-[#0E3B2E]/10 bg-white shadow-[0_16px_45px_-32px_rgba(14,59,46,0.45)] md:grid-cols-[1.05fr_0.95fr]">
              <Link
                href={featuredPost.path}
                aria-label={`Read ${featuredPost.title}`}
                className="group relative block min-h-64 overflow-hidden sm:min-h-80"
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#0E3B2E] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  {featuredPost.category}
                </span>
              </Link>
              <div className="flex flex-col justify-center p-6 sm:p-9">
                <div className="flex items-center gap-2 text-xs text-[#0E3B2E]/65">
                  <Clock3 className="size-3.5 text-[#2F7A18]" aria-hidden="true" />
                  <span>6 min read</span>
                  <span aria-hidden="true">·</span>
                  <span>Updated {formatDisplayDate(featuredPost.updatedAt)}</span>
                </div>
                <h2 className="mt-4 font-heading text-2xl leading-tight font-medium tracking-tight text-[#0E3B2E] sm:text-3xl">
                  <Link href={featuredPost.path} className="transition hover:text-[#2F7A18]">
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="mt-1 font-heading text-lg text-[#0E3B2E]/85">
                  {featuredPost.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/70">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={featuredPost.path}
                  className="mt-6 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-[#0E3B2E] px-4 text-sm font-semibold text-white transition hover:bg-[#0E3B2E]/90"
                >
                  Read full guide <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section id="latest-guides" className="scroll-mt-24 px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-[#2F7A18] uppercase">
                Educational articles
              </p>
              <h2 className="mt-1 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Latest Cannabis Guides &amp; Medical Insights
              </h2>
            </div>
            <label className="relative block w-full shrink-0 lg:max-w-[255px]">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#0E3B2E]/55"
                aria-hidden="true"
              />
              <span className="sr-only">Search guides</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search guides..."
                className="h-11 w-full rounded-full border border-[#0E3B2E]/15 bg-white py-2 pr-4 pl-10 text-sm text-[#0E3B2E] shadow-sm outline-none transition placeholder:text-[#0E3B2E]/45 focus:border-[#2F7A18]/60 focus:ring-2 focus:ring-[#2F7A18]/15"
              />
            </label>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Filter guides by category">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isSelected
                      ? "border-[#0E3B2E] bg-[#0E3B2E] text-white shadow-sm"
                      : "border-[#0E3B2E]/15 bg-white text-[#0E3B2E]/85 hover:border-[#2F7A18]/45 hover:bg-[#EEF5E8]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          {filteredPosts.length > 0 ? (
            <div className="mt-8 grid auto-rows-fr gap-6">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl border border-[#0E3B2E]/10 bg-white px-5 py-8 text-center text-sm text-[#0E3B2E]/70">
              No guides found. Try another search or choose a different category.
            </p>
          )}
        </div>
      </section>
      <BlogCta />
    </>
  );
}

function BlogCard({ post }: { post: (typeof blogPosts)[number] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#0E3B2E]/12 bg-white shadow-[0_12px_35px_-28px_rgba(14,59,46,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(14,59,46,0.35)] md:flex-row">
      <Link
        href={post.path}
        aria-label={`Read ${post.title}`}
        className="group relative block aspect-[16/9] shrink-0 overflow-hidden md:aspect-auto md:w-[38%]"
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-4 left-4 rounded-full bg-[#0E3B2E] px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#0E3B2E]/60 sm:text-sm">
          <span>by {post.author.name}</span>
          <span aria-hidden="true">|</span>
          <time dateTime={post.updatedAt}>{formatDisplayDate(post.updatedAt)}</time>
          <span aria-hidden="true">|</span>
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <Clock3 className="size-4 text-[#2F7A18]" aria-hidden="true" />
            6 min read
          </span>
        </div>
        <h3 className="mt-3 font-heading text-xl leading-tight font-semibold text-[#14532D] sm:text-2xl">
          <Link href={post.path} className="transition hover:text-[#2F7A18]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-1 font-heading text-base font-medium text-[#0E3B2E]/85 sm:text-lg">
          {post.subtitle}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#0E3B2E]/70 sm:text-base">
          {post.excerpt}
        </p>
        <div className="mt-auto flex justify-center pt-5">
          <Link
            href={post.path}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0E3B2E] px-5 text-sm font-semibold text-white transition hover:bg-[#0E3B2E]/90"
          >
            Read Article <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
