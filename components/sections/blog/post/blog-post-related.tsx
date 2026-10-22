import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

interface BlogPostRelatedProps {
  relatedPosts: BlogPost[];
}

export function BlogPostRelated({ relatedPosts }: BlogPostRelatedProps) {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-20 lg:py-24 border-t border-[#DECDBB]/40">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2 max-w-[640px] mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0E3B2E] leading-tight lg:leading-[54px] tracking-[-0.00015em]">
            More Medical Marijuana Guides
          </h2>
          <p className="font-sans text-sm sm:text-base lg:text-[18px] font-semibold text-[#5F6B6F] leading-[30px]">
            Explore expert physician recommendations, OMMA guidelines, and patient rights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {relatedPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-[20px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group min-h-[580px] border border-[#DECDBB]/40"
            >
              <Link
                href={`/blog/${post.slug}/`}
                className="relative w-full h-[260px] sm:h-[280px] lg:h-[317px] overflow-hidden bg-[#FAF7F2] shrink-0 block cursor-pointer"
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 rounded-full bg-[#0E3B2E]/90 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-xs">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <h3 className="font-heading text-xl sm:text-[24px] font-bold text-[#0E3B2E] leading-[1.3] lg:leading-[32px] group-hover:text-[#1A5944] transition-colors">
                    <Link href={`/blog/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="font-sans font-semibold text-sm sm:text-[16px] leading-[24px] sm:leading-[26px] text-[#475467]">
                    {post.subtitle}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-flex items-center justify-between pl-6 pr-1.5 w-[171px] h-[48px] rounded-[30px] text-white font-sans font-semibold text-base shadow-[0px_2px_4px_rgba(0,0,0,0.15)] hover:opacity-95 transition-all group/btn"
                    style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
                  >
                    <span>Read Guide</span>
                    <span className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#FAF7F2] shadow-[0px_3px_6px_rgba(0,0,0,0.15)] flex items-center justify-center shrink-0 group-hover/btn:scale-105 transition-transform">
                      <svg className="w-4 h-4 text-[#0E3B2E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
