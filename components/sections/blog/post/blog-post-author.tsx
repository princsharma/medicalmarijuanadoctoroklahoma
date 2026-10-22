import Image from "next/image";
import Link from "next/link";
import { BlogAuthor } from "@/lib/blogs";

interface BlogPostAuthorProps {
  author: BlogAuthor;
}

export function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <section
      id="about-the-author"
      className="w-full bg-white py-10 sm:py-12 lg:py-[48px] px-4 sm:px-8 lg:px-12 xl:px-[165px] scroll-mt-24 border-t border-[#DECDBB]/40"
    >
      <div className="max-w-[1117px] mx-auto space-y-4 sm:space-y-6">
        <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0E3B2E] leading-[36px] tracking-[-0.00015em] text-center sm:text-left">
          About the Author
        </h2>

        <div
          className="rounded-[30px] p-6 sm:p-8 lg:py-[32px] lg:px-[70px] text-[#FAF7F2] shadow-sm"
          style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-[64px]">
            {/* Avatar + Bio Link */}
            <div className="flex flex-col items-center shrink-0 gap-2 w-[129px]">
              <div className="w-[110px] h-[110px] sm:w-[129px] sm:h-[129px] rounded-full overflow-hidden border-[3px] border-[#B8E89A] relative shadow-sm shrink-0">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  sizes="129px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/contributors/${author.slug}/`}
                  className="font-sans font-medium text-[12px] leading-[22px] text-[#B8E89A] underline hover:opacity-80 transition-opacity whitespace-nowrap"
                >
                  See Full Bio
                </Link>
                <Link
                  href={`/contributors/${author.slug}/`}
                  aria-label="LinkedIn Profile"
                  className="w-6 h-6 rounded-full bg-[#007AB9] text-white flex items-center justify-center shrink-0 hover:opacity-90"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 0 0 1.63-1.63 1.63 1.63 0 0 0-1.63-1.63A1.63 1.63 0 0 0 4.83 7.13a1.63 1.63 0 0 0 1.63 1.63m1.4 9.74v-8.37H5.06v8.37z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Author Description */}
            <div className="flex-1 max-w-[741px] text-center sm:text-left space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-[17px]">
                <h3 className="font-heading font-bold text-[20px] leading-[28px] text-[#FAF7F2]">
                  {author.name}
                </h3>
                <span className="font-sans font-semibold text-sm sm:text-[16px] leading-[26px] text-[#FAF7F2]/90">
                  {author.role} • {author.credentials}
                </span>
              </div>
              <p className="font-sans font-normal text-[14px] leading-[22px] text-[#FAF7F2]">
                With over three decades of professional experience in health and medical writing, education, and clinical research communication, Robert translates complex Oklahoma cannabis regulations and medical sciences into clear, patient-centered guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
