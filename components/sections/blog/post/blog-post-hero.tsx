import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";
import { BlogPost } from "@/lib/blogs";

interface BlogPostHeroProps {
  post: BlogPost;
}

export function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-16 lg:px-8 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-5xl text-center">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#5F6B6F]">
          <Link href="/" className="hover:text-[#0E3B2E] transition-colors">
            Home
          </Link>
          <span className="opacity-40">•</span>
          <Link href="/blog/" className="hover:text-[#0E3B2E] transition-colors">
            Blog
          </Link>
          <span className="opacity-40">•</span>
          <span className="text-[#0E3B2E] font-bold">{post.category}</span>
        </nav>

        {/* Title */}
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#0E3B2E] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.15]">
          <span>{post.title} </span>
          {post.titleSecondary && (
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#0E3B2E]/90 mt-1">
              {post.titleSecondary}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5F6B6F] sm:text-lg">
          {post.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <BookingButton className="inline-flex h-[50px] items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0E3B2E] to-[#1A5944] pl-6 pr-2 text-base font-semibold text-white shadow-sm transition-all hover:opacity-95 hover:shadow-md">
            <span>Get Your OK MMJ Card</span>
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-[#0E3B2E] shadow-xs">
              <ArrowRight className="size-4" />
            </span>
          </BookingButton>

          <a
            href="#toc"
            className="inline-flex h-[50px] items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white px-6 text-base font-semibold text-[#0E3B2E] shadow-xs transition-colors hover:bg-[#F6F5F0]"
          >
            Table of Contents
          </a>
        </div>
      </div>
    </section>
  );
}

