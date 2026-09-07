import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";
import { formatDisplayDate } from "@/lib/seo";

interface BlogPostTrustBarProps {
  post: BlogPost;
}

export function BlogPostTrustBar({ post }: BlogPostTrustBarProps) {
  return (
    <div className="-mt-12 sm:-mt-16 lg:-mt-[60px] relative z-30 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[360px] sm:max-w-[460px] md:max-w-[1069px] mx-auto bg-white rounded-[20px] sm:rounded-[24px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)] border border-[#EAE5DC] p-4 sm:p-5 md:py-3.5 md:px-5 lg:py-5 lg:px-6 xl:py-[20px] xl:px-[28px] relative z-20">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between divide-y divide-[#EAE5DC]/70 md:divide-y-0 gap-0 md:gap-2">
          {/* Written by */}
          <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start py-3 first:pt-0 md:py-0">
            <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] md:w-[46px] md:h-[46px] lg:w-[60px] lg:h-[60px] xl:w-[68px] xl:h-[68px] rounded-full overflow-hidden shrink-0 relative shadow-xs border border-[#EAE5DC]/60">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                sizes="68px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start min-w-0">
              <span className="font-sans font-semibold text-xs sm:text-sm md:text-[13px] lg:text-[15px] xl:text-[16px] text-[#0E3B2E] leading-tight">
                Written by
              </span>
              <Link
                href={`/contributors/${post.author.slug}/`}
                className="font-sans font-bold text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#0E3B2E] hover:text-[#2F7A18] transition-colors whitespace-nowrap mt-0.5"
              >
                {post.author.name}
              </Link>
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
                {post.author.role}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-[40px] lg:h-[48px] xl:h-[54px] bg-[#5F6B6F]/20 shrink-0 mx-1 md:mx-1.5 lg:mx-3" />

          {/* Published */}
          <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start py-3 md:py-0">
            <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] md:w-[46px] md:h-[46px] lg:w-[60px] lg:h-[60px] xl:w-[68px] xl:h-[68px] shrink-0 relative flex items-center justify-center rounded-full bg-[#FAF7F2] border border-[#EAE5DC]">
              <svg className="w-6 h-6 text-[#2F7A18]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
            </div>
            <div className="flex flex-col items-start min-w-0">
              <span className="font-sans font-semibold text-xs sm:text-sm md:text-[13px] lg:text-[15px] xl:text-[16px] text-[#0E3B2E] leading-tight">
                Published
              </span>
              <span className="font-sans font-bold text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#0E3B2E] whitespace-nowrap mt-0.5">
                {formatDisplayDate(post.datePublished)}
              </span>
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
                Last updated: {formatDisplayDate(post.dateModified)}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-[40px] lg:h-[48px] xl:h-[54px] bg-[#5F6B6F]/20 shrink-0 mx-1 md:mx-1.5 lg:mx-3" />

          {/* Medically Reviewed by */}
          <div className="flex items-center gap-3.5 sm:gap-4 md:gap-2.5 lg:gap-3.5 flex-1 min-w-0 justify-start py-3 last:pb-0 md:py-0">
            <div className="w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] md:w-[46px] md:h-[46px] lg:w-[60px] lg:h-[60px] xl:w-[68px] xl:h-[68px] rounded-full overflow-hidden shrink-0 relative shadow-xs border border-[#EAE5DC]/60">
              <Image
                src={post.reviewer.image}
                alt={post.reviewer.name}
                fill
                sizes="68px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start min-w-0">
              <span className="font-sans font-semibold text-xs sm:text-sm md:text-[13px] lg:text-[15px] xl:text-[16px] text-[#0E3B2E] leading-tight">
                Medically Reviewed by
              </span>
              <Link
                href={`/doctors/${post.reviewer.slug}/`}
                className="font-sans font-bold text-xs sm:text-sm md:text-[13px] lg:text-[14px] xl:text-[15px] text-[#0E3B2E] hover:text-[#2F7A18] transition-colors whitespace-nowrap mt-0.5"
              >
                {post.reviewer.name}
              </Link>
              <span className="font-sans font-medium text-[11px] sm:text-xs md:text-[10px] lg:text-[11px] xl:text-[12px] text-[#5F6B6F] leading-tight whitespace-nowrap mt-0.5">
                {post.reviewer.credentials}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
