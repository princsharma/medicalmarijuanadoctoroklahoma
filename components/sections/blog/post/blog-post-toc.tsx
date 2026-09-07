"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronRight, X } from "lucide-react";
import { BlogSection } from "@/lib/blogs";

interface BlogPostTocProps {
  sections: BlogSection[];
}

export function BlogPostToc({ sections }: BlogPostTocProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Lock body scroll when mobile TOC drawer is open & handle Escape key
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  return (
    <>
      {/* Desktop Sticky Table of Contents */}
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
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile & Tablet Portal (rendered directly into document.body to stay above all headers and sections) */}
      {mounted &&
        createPortal(
          <>
            {/* Mobile & Tablet Floating Semi-Circle Tab on Left */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open Table of Contents"
              className="fixed left-0 top-1/2 -translate-y-1/2 z-[90] flex h-14 w-8 sm:h-16 sm:w-9 items-center justify-center rounded-r-full bg-[#0E3B2E] text-white shadow-[2px_4px_16px_rgba(14,59,46,0.35)] hover:bg-[#164E3D] active:scale-95 transition-all lg:hidden group focus:outline-none focus:ring-2 focus:ring-[#B8E89A]"
            >
              <ChevronRight className="size-5 sm:size-6 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile & Tablet Slide-Over Drawer */}
            {isMobileOpen && (
              <div className="fixed inset-0 z-[9999] lg:hidden">
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
                  onClick={() => setIsMobileOpen(false)}
                  aria-hidden="true"
                />

                {/* Drawer panel */}
                <div
                  className="fixed inset-y-0 left-0 w-[85vw] max-w-[340px] sm:max-w-[380px] bg-gradient-to-b from-[#0E3B2E] via-[#124536] to-[#164E3D] text-[#FAF7F2] shadow-2xl p-6 sm:p-7 flex flex-col justify-start overflow-y-auto z-[10000] animate-in slide-in-from-left duration-300"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Table of Contents"
                >
                  {/* Top row: Brand Badge & Close Button */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="bg-white rounded-xl px-3 py-1.5 shadow-sm border border-amber-400/40 inline-flex items-center">
                      <Image
                        src="/oklahoma-logo.webp"
                        alt="Medical Marijuana Doctor Oklahoma"
                        width={150}
                        height={38}
                        className="h-7 sm:h-8 w-auto object-contain"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsMobileOpen(false)}
                      aria-label="Close Table of Contents"
                      className="size-9 sm:size-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8E89A]"
                    >
                      <X className="size-5 sm:size-6 text-white" />
                    </button>
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#FAF7F2] leading-tight mt-6 pb-3 border-b border-white/20">
                    Table of Contents
                  </h2>

                  {/* Sections list */}
                  <nav className="mt-6 flex-1">
                    <ul className="space-y-4 sm:space-y-5">
                      {sections.map((section) => {
                        const isActive = activeId === section.id;
                        return (
                          <li key={section.id} className="flex items-start gap-3">
                            <span
                              className={`text-lg leading-none mt-0.5 transition-colors ${
                                isActive ? "text-[#B8E89A]" : "text-white/60"
                              }`}
                            >
                              •
                            </span>
                            <a
                              href={`#${section.id}`}
                              onClick={() => setIsMobileOpen(false)}
                              className={`font-sans text-sm sm:text-[15px] leading-snug transition-all ${
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
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </>,
          document.body
        )}
    </>
  );
}

