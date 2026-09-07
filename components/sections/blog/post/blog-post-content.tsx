"use client";

import { BlogPost } from "@/lib/blogs";
import { BookingButton } from "@/components/booking-dialog";
import { ArrowRight, Check, CheckCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

function renderFormattedText(text: string): React.ReactNode {
  if (!text) return text;
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const anchor = match[1];
    const rawUrl = match[2];
    const key = `link-${match.index}-${rawUrl}`;

    if (rawUrl.startsWith("/") || rawUrl.includes("medicalmarijuanadoctoroklahoma.com")) {
      const internalHref = rawUrl.replace(/^https?:\/\/(www\.)?medicalmarijuanadoctoroklahoma\.com/, "") || "/";
      parts.push(
        <Link
          key={key}
          href={internalHref}
          className="font-medium text-[#2F7A18] underline underline-offset-4 decoration-[#2F7A18]/40 hover:decoration-[#2F7A18] hover:text-[#0E3B2E] transition-colors"
        >
          {anchor}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={key}
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#2F7A18] underline underline-offset-4 decoration-[#2F7A18]/40 hover:decoration-[#2F7A18] hover:text-[#0E3B2E] transition-colors"
        >
          {anchor}
        </a>
      );
    }

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? <>{parts}</> : text;
}

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div className="flex-1 min-w-0 max-w-[960px] xl:max-w-[1020px] px-4 sm:px-8 lg:pl-10 xl:pl-16 lg:pr-8 xl:pr-16 pt-2 sm:pt-4 lg:pt-6 pb-16 sm:pb-20">
      <div className="w-full flex-1 max-w-[870px] space-y-10 lg:space-y-12 text-[#5F6B6F] font-sans">
        {/* Lead Intro Paragraphs with Drop Cap */}
        <div className="space-y-4 text-base leading-relaxed sm:text-lg sm:leading-8 font-normal text-[#475467]">
          {post.intro.map((para, i) => {
            if (i === 0) {
              return (
                <p
                  key={i}
                  className="leading-relaxed sm:leading-8 first-letter:float-left first-letter:font-heading first-letter:text-[46px] sm:first-letter:text-[54px] first-letter:font-bold first-letter:text-[#0E3B2E] first-letter:leading-[0.8] first-letter:mr-2.5 first-letter:mt-1.5 first-letter:select-none"
                >
                  {renderFormattedText(para)}
                </p>
              );
            }
            return <p key={i}>{renderFormattedText(para)}</p>;
          })}
        </div>

        {/* Key Points Box */}
        {post.keyPoints && post.keyPoints.length > 0 && (
          <div className="rounded-2xl border border-[#0E3B2E]/15 bg-[#EAF1EA]/40 p-6 sm:p-7 shadow-xs">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0E3B2E] mb-3">
              Key Points:
            </h3>
            <ul className="space-y-2.5">
              {post.keyPoints.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#0E3B2E]/90 font-medium">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#0E3B2E] text-white mt-0.5 text-xs">
                    <Check className="size-3 stroke-[3]" />
                  </span>
                  <span>{renderFormattedText(point)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content Sections */}
        {post.sections.map((section) => (
          <React.Fragment key={section.id}>
            <section
              id={section.id}
              className="space-y-4 scroll-mt-28"
            >
              <h2 className="font-heading text-2xl sm:text-[28px] font-bold text-[#0E3B2E] leading-[36px] tracking-tight">
                {section.title}
              </h2>

              {section.content.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base leading-[26px] sm:leading-[28px] font-medium"
                >
                  {renderFormattedText(para)}
                </p>
              ))}

              {/* Pullquote with Project Theme Color */}
              {section.quote && (
                <div className="w-full bg-[#EAF1EA] rounded-[15px] flex flex-row items-center overflow-hidden gap-3.5 sm:gap-[16px] pr-4 sm:pr-8 lg:pr-[67px] min-h-[69px] mt-4 border border-[#0E3B2E]/10">
                  <div className="w-[14px] sm:w-[17px] self-stretch bg-[#2F7A18] rounded-l-[10px] shrink-0 min-h-[69px]" />
                  <p className="font-sans font-semibold text-[13px] sm:text-[14px] leading-[22px] sm:leading-[26px] text-[#0E3B2E] py-3 sm:py-3.5">
                    &ldquo;{section.quote.text}&rdquo; — {section.quote.author}
                  </p>
                </div>
              )}

              {/* Checklists / Features */}
              {section.checklists && (
                <div className="space-y-4 pt-2">
                  {section.checklists.map((list, cIdx) => (
                    <div key={cIdx} className="space-y-3">
                      <div className="grid gap-3 sm:grid-cols-1">
                        {list.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className="flex items-start gap-3.5 rounded-xl border border-black/5 bg-white p-4 shadow-xs"
                          >
                            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#0E3B2E] text-white mt-0.5">
                              <Check className="size-3.5 stroke-[3]" />
                            </div>
                            <div>
                              <h4 className="font-heading text-base font-bold text-[#0E3B2E]">
                                {renderFormattedText(item.heading)}
                              </h4>
                              <p className="mt-1 text-sm leading-relaxed text-[#5F6B6F]">
                                {renderFormattedText(item.text)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && (
                <div className="space-y-5 pt-2">
                  {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      {sub.title ? (
                        <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#0E3B2E] leading-[28px]">
                          {renderFormattedText(sub.title)}
                        </h3>
                      ) : null}
                      {sub.content.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base leading-[26px] font-medium text-[#5F6B6F]"
                        >
                          {renderFormattedText(p)}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Table (e.g. Oklahoma Marijuana Laws at a Glance) */}
              {section.table && (
                <div className="mt-6 overflow-hidden rounded-2xl border border-[#DECDBB] bg-white shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#0E3B2E] text-white">
                          {section.table.headers.map((header, hIdx) => (
                            <th
                              key={hIdx}
                              className="px-5 py-3.5 font-heading text-sm sm:text-base font-semibold"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DECDBB]/60 text-sm sm:text-base font-sans">
                        {section.table.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={rIdx % 2 === 0 ? "bg-white" : "bg-[#FAF8F5]"}
                          >
                            <td className="px-5 py-3.5 font-medium text-[#0E3B2E]">
                              {row.activity}
                            </td>
                            <td className="px-5 py-3.5 font-semibold text-[#2F7A18]">
                              {row.status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>

            {/* In-Article CTA directly after "Can Anyone Buy Medical Marijuana in Oklahoma?" */}
            {section.id === "can-anyone-buy-medical-marijuana-in-oklahoma" && (
              <div
                id="in-article-cta"
                className="w-full rounded-[20px] sm:rounded-[24px] xl:rounded-[28px] p-6 sm:p-8 lg:p-7 xl:p-9 text-[#FAF7F2] relative overflow-hidden shadow-lg my-2 sm:my-3"
                style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
              >
                <div className="relative z-10 max-w-[620px] mx-auto sm:mx-0 text-center sm:text-left flex flex-col items-center sm:items-start space-y-3 sm:space-y-4">
                  <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#B8E89A] uppercase">
                    Online Evaluations
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] xl:text-[30px] font-bold text-[#FAF7F2] leading-[1.25] tracking-[-0.00015em] max-w-[480px]">
                    Find Out If You Qualify for Medical Marijuana
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-[14px] xl:text-base text-[#FAF7F2]/90 font-sans font-medium leading-[22px] sm:leading-[24px] xl:leading-[26px] max-w-[420px] xl:max-w-[540px]">
                    Medical Marijuana Doctor Oklahoma connects Oklahoma patients with state-licensed doctors for 100% online medical marijuana evaluations.
                  </p>
                  <div className="pt-2 w-full sm:w-auto flex justify-center sm:justify-start">
                    <BookingButton className="h-auto gap-2 whitespace-nowrap rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0E3B2E] shadow-md transition-all hover:-translate-y-0.5 hover:bg-white/95 inline-flex items-center">
                      Apply Today <ArrowRight className="size-4" />
                    </BookingButton>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
