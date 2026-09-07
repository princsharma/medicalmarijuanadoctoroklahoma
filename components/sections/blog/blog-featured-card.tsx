import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, UserCheck } from "lucide-react";
import { BlogPost } from "@/lib/blogs";

interface BlogFeaturedCardProps {
  post: BlogPost;
}

export function BlogFeaturedCard({ post }: BlogFeaturedCardProps) {
  return (
    <section id="featured" className="bg-[#FAF8F5] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6">
          <span className="text-xs font-bold tracking-[0.2em] text-[#2F7A18] uppercase">
            Featured Guide
          </span>
        </div>

        <div className="relative flex flex-col items-center justify-center lg:flex-row">
          {/* Featured Image */}
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#EAF1EA] shadow-md sm:h-[380px] lg:h-[440px] lg:w-[58%] shrink-0">
            <Image
              src={post.coverImage}
              alt={`${post.title} ${post.titleSecondary ?? ""}`}
              fill
              priority
              sizes="(min-width: 1024px) 650px, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 rounded-full bg-[#0E3B2E]/90 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-xs">
              {post.category}
            </div>
          </div>

          {/* Overlapping Content Card */}
          <div className="relative z-10 -mt-10 flex w-full flex-col justify-center rounded-2xl border border-black/5 bg-white p-6 shadow-xl sm:p-8 lg:-mt-0 lg:-ml-16 lg:w-[48%] lg:p-10">
            <div className="flex items-center gap-3 text-xs text-[#5F6B6F]">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="size-3.5 text-[#2F7A18]" />
                {post.readTime}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <UserCheck className="size-3.5 text-[#2F7A18]" />
                by {post.author.name}
              </span>
            </div>

            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#0E3B2E] transition-colors hover:text-[#1A5944] sm:text-3xl lg:text-3xl lg:leading-tight">
              <Link href={`/blog/${post.slug}/`}>
                {post.title} <span className="block text-xl sm:text-2xl lg:text-2xl font-semibold text-[#0E3B2E]/90">{post.titleSecondary}</span>
              </Link>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#5F6B6F] sm:text-base">
              {post.subtitle}
            </p>

            <div className="mt-6 pt-2">
              <Link
                href={`/blog/${post.slug}/`}
                className="group inline-flex h-[46px] items-center justify-between gap-3 rounded-full bg-gradient-to-r from-[#0E3B2E] to-[#1A5944] pl-6 pr-1.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-95"
              >
                <span>Read Full Guide</span>
                <span className="flex size-[34px] items-center justify-center rounded-full bg-white text-[#0E3B2E] shadow-xs transition-transform group-hover:scale-105">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
