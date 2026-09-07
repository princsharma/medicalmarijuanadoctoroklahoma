"use client";

import { useEffect, useState } from "react";
import { BlogSection } from "@/lib/blogs";

interface BlogPostTocProps {
  sections: BlogSection[];
}

export function BlogPostToc({ sections }: BlogPostTocProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveId(section.id);
            return;
          }
        }
      }
      const finalEl = document.getElementById("final-thoughts");
      if (finalEl && scrollPosition >= finalEl.offsetTop) {
        setActiveId("final-thoughts");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <aside id="toc" className="hidden lg:block w-[320px] xl:w-[382px] shrink-0 sticky top-[80px] lg:top-[90px] xl:top-[95px] z-20 self-start">
      {/* Sharp rectangular edges (rounded-none) */}
      <div
        className="rounded-none px-6 sm:px-8 xl:px-[41px] pt-8 sm:pt-10 lg:pt-10 xl:pt-12 pb-12 sm:pb-16 lg:pb-[60px] xl:pb-[80px] min-h-[520px] lg:min-h-[600px] xl:min-h-[660px] text-[#FAF7F2] flex flex-col justify-start shadow-md"
        style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
      >
        <h2 className="font-heading text-2xl sm:text-3xl xl:text-[28px] font-bold text-[#FAF7F2] leading-tight mb-5 tracking-[-0.00015em]">
          Table of Contents
        </h2>
        <div className="w-full h-[1px] bg-white/30 mb-7 lg:mb-8" />
        <nav>
          <ul className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-[28px]">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id} className="flex items-start gap-2.5">
                  <span
                    className={`text-lg leading-none mt-0.5 transition-colors ${
                      isActive ? "text-[#B8E89A]" : "text-white/60"
                    }`}
                  >
                    •
                  </span>
                  <a
                    href={`#${section.id}`}
                    className={`font-sans text-xs sm:text-[14px] leading-[22px] transition-all ${
                      isActive
                        ? "text-[#B8E89A] font-bold"
                        : "text-[#FAF7F2] font-semibold hover:text-[#B8E89A]"
                    }`}
                  >
                    {section.title}
                  </a>
                </li>
              );
            })}
            <li className="flex items-start gap-2.5">
              <span
                className={`text-lg leading-none mt-0.5 transition-colors ${
                  activeId === "final-thoughts" ? "text-[#B8E89A]" : "text-white/60"
                }`}
              >
                •
              </span>
              <a
                href="#final-thoughts"
                className={`font-sans text-xs sm:text-[14px] leading-[22px] transition-all ${
                  activeId === "final-thoughts"
                    ? "text-[#B8E89A] font-bold"
                    : "text-[#FAF7F2] font-semibold hover:text-[#B8E89A]"
                }`}
              >
                Final Thoughts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
