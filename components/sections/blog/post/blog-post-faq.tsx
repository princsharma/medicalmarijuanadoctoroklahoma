"use client";

import { useState } from "react";
import Image from "next/image";
import { BlogFaqItem } from "@/lib/blogs";

interface BlogPostFaqProps {
  faqs?: BlogFaqItem[];
}

export function BlogPostFaq({ faqs }: BlogPostFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section
      id="faq"
      className="pt-12 sm:pt-16 lg:pt-16 xl:pt-24 pb-10 sm:pb-12 lg:pb-10 xl:pb-24 bg-[#FAF7F2] relative overflow-hidden border-t border-[#DECDBB]/40"
    >
      <div className="max-w-[1442px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-[1254px] mx-auto mb-14 space-y-2">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-[44px] font-bold text-[#0E3B2E] leading-tight sm:leading-[46px] lg:leading-[54px] tracking-[-0.0066em]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5F6B6F] text-base sm:text-[18px] font-semibold leading-[30px] font-sans">
            Get answers to common questions about Oklahoma cannabis laws and OMMA rules.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-8 xl:gap-[60px] max-w-[1184px] mx-auto">
          {/* Left Large Photo */}
          <div className="w-full max-w-[551px] lg:w-[380px] xl:w-[551px] h-[360px] sm:h-[440px] lg:h-[540px] xl:h-[673px] relative rounded-[20px] overflow-hidden shrink-0 shadow-md">
            <Image
              src="/benefits-of-cannabies-section.webp"
              alt="Medical Cannabis Patient Consultation in Oklahoma"
              fill
              sizes="(min-width: 1280px) 551px, (min-width: 1024px) 380px, 90vw"
              className="object-cover"
            />
          </div>

          {/* Right Accordion List */}
          <div className="w-full max-w-[566px] lg:max-w-none lg:flex-1 space-y-3.5 sm:space-y-5 xl:space-y-[20px] flex flex-col justify-center">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const formattedNum = String(index + 1).padStart(2, "0") + ".";
              // Strip leading number if question already has it
              const cleanQuestion = faq.question.replace(/^\d+\.\s*/, "");

              return (
                <div
                  key={index}
                  className="w-full rounded-[20px] overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full min-h-[58px] sm:min-h-[68px] xl:min-h-[74px] flex items-stretch text-left rounded-[20px] overflow-hidden transition-all duration-200 relative"
                    style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
                  >
                    <div className="w-[56px] sm:w-[68px] xl:w-[78px] shrink-0 bg-[#B8E89A] flex items-center justify-center font-sans font-extrabold text-lg sm:text-xl xl:text-[28px] text-[#0E3B2E] leading-none rounded-l-[20px] self-stretch">
                      {formattedNum}
                    </div>
                    <div className="flex-1 py-2.5 sm:py-3 px-3.5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">
                      <span className="font-sans font-semibold text-sm sm:text-base xl:text-[18px] text-white leading-snug sm:leading-[26px] xl:leading-[30px]">
                        {cleanQuestion}
                      </span>
                      <span
                        className={`w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 3V15M3 9H15"
                            stroke="#FAF7F2"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="bg-[#FAF7F2] px-5 sm:px-7 py-4 sm:py-5 text-sm sm:text-[16px] text-[#5F6B6F] font-sans font-medium leading-[24px] sm:leading-[26px] border border-[#0E3B2E]/10 border-t-0 rounded-b-[20px]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
