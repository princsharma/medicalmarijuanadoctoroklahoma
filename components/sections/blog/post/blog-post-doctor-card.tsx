import Image from "next/image";
import Link from "next/link";
import { BlogReviewer } from "@/lib/blogs";

interface BlogPostDoctorCardProps {
  reviewer: BlogReviewer;
}

export function BlogPostDoctorCard({ reviewer }: BlogPostDoctorCardProps) {
  return (
    <section className="w-full bg-[#FAF7F2] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[850px] mx-auto">
        <div
          className="w-full rounded-[20px] py-5 sm:py-[24px] px-6 sm:px-[40px] md:px-[60px] lg:px-[80px] shadow-[0px_4px_25px_rgba(14,59,46,0.15)] flex items-center justify-center sm:justify-start"
          style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-[40px] text-center sm:text-left">
            <div className="relative w-[76px] h-[76px] sm:w-[89px] sm:h-[89px] rounded-full border-[3.5px] border-[#B8E89A] overflow-hidden shrink-0 shadow-md">
              <Image
                src={reviewer.image}
                alt={reviewer.name}
                fill
                sizes="89px"
                className="object-cover"
              />
            </div>
            <div className="space-y-1 sm:space-y-1.5 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B8E89A]">
                  Medical Reviewer
                </span>
                <span className="hidden sm:inline text-white/40">•</span>
                <span className="text-xs text-white/80 font-medium">
                  {reviewer.role}
                </span>
              </div>
              <h3 className="font-heading text-lg sm:text-[22px] font-bold text-white">
                <Link
                  href={`/doctors/${reviewer.slug}/`}
                  className="hover:underline hover:text-[#B8E89A] transition-colors"
                >
                  {reviewer.name}
                </Link>
                <span className="text-sm sm:text-base font-normal text-white/80 ml-2">
                  ({reviewer.credentials})
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed">
                State-licensed physician specialized in medical cannabis clinical assessments, patient wellness care, and OMMA compliance verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
