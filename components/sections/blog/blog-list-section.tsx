"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Search } from "lucide-react";
import { BlogPost } from "@/lib/blogs";

interface BlogListSectionProps {
  posts: BlogPost[];
}

const categories = [
  "All",
  "OMMA Guidelines",
  "Qualifying Conditions",
  "Card Renewal",
  "Patient Rights",
  "Dosage & Usage",
];

export function BlogListSection({ posts }: BlogListSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.titleSecondary &&
        post.titleSecondary.toLowerCase().includes(searchQuery.toLowerCase())) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-[#FAF8F5] pb-20 pt-4 sm:pb-28 sm:pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header & Search */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#2F7A18] uppercase">
              Educational Articles
            </span>
            <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-[#0E3B2E] sm:text-3xl">
              Latest Cannabis Guides & Medical Insights
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-[#5F6B6F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="h-10 w-full rounded-full border border-[#0E3B2E]/15 bg-white pl-10 pr-4 text-sm text-[#0E3B2E] placeholder-[#5F6B6F]/70 shadow-xs focus:border-[#0E3B2E] focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                activeCategory === category
                  ? "bg-[#0E3B2E] text-white shadow-xs"
                  : "border border-[#0E3B2E]/15 bg-white text-[#0E3B2E]/80 hover:bg-[#0E3B2E]/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex min-h-[520px] flex-col justify-between overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  {/* Card Image */}
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="relative block h-[220px] w-full overflow-hidden bg-[#EAF1EA] sm:h-[240px]"
                  >
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-[#0E3B2E]/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                      {post.category}
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-[#5F6B6F]">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="size-3.5 text-[#2F7A18]" />
                        {post.readTime}
                      </span>
                      <span className="text-[11px] font-medium text-[#5F6B6F]/80">
                        by {post.author.name}
                      </span>
                    </div>

                    <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-[#0E3B2E] transition-colors group-hover:text-[#1A5944] sm:text-xl">
                      <Link href={`/blog/${post.slug}/`}>
                        {post.title} {post.titleSecondary && <span className="text-base text-[#0E3B2E]/90 block mt-0.5">{post.titleSecondary}</span>}
                      </Link>
                    </h3>

                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-[#5F6B6F]">
                      {post.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group/btn inline-flex h-[42px] items-center justify-between gap-3 rounded-full bg-gradient-to-r from-[#0E3B2E] to-[#1A5944] pl-5 pr-1 text-xs font-semibold text-white shadow-xs transition-all hover:opacity-95"
                  >
                    <span>Read Article</span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-white text-[#0E3B2E] shadow-xs transition-transform group-hover/btn:scale-105">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-[#0E3B2E]/20 bg-white p-12 text-center">
            <p className="text-base font-medium text-[#5F6B6F]">
              No articles found matching &quot;{searchQuery}&quot; in category &quot;{activeCategory}&quot;.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex h-9 items-center rounded-full bg-[#0E3B2E] px-4 text-xs font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
