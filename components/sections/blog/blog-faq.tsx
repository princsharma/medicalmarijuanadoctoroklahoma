"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const blogFaqs = [
  {
    question: "Do I need a diagnosed condition to get an Oklahoma MMJ card?",
    answer:
      "No. Oklahoma SQ 788 allows physicians to recommend medical marijuana according to their professional clinical discretion without a mandatory list of specific qualifying diagnoses.",
  },
  {
    question: "Can I complete my doctor evaluation 100% online in Oklahoma?",
    answer:
      "Yes. Oklahoma telehealth laws fully permit licensed physicians to conduct medical cannabis consultations via secure, HIPAA-compliant video calls.",
  },
  {
    question: "How long is an Oklahoma medical marijuana card valid for?",
    answer:
      "An adult patient medical marijuana license issued by the OMMA is valid for two years from the date of issuance.",
  },
  {
    question: "What are the state fees for an Oklahoma OMMA license?",
    answer:
      "OMMA charges a standard state application fee of $100. Oklahoma residents enrolled in Medicaid (SoonerCare) or Medicare pay a reduced state fee of $20.",
  },
  {
    question: "What happens if my doctor evaluation is not approved?",
    answer:
      "At Medical Marijuana Doctor Oklahoma, evaluations come with a 100% money-back guarantee. If our licensed physician determines you do not qualify, you receive a full refund.",
  },
];

export function BlogFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAF8F5] px-4 pb-20 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#2F7A18] uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#0E3B2E] sm:text-4xl">
            Common Questions About Oklahoma MMJ
          </h2>
          <p className="mt-3 text-base text-[#5F6B6F]">
            Quick answers to help you navigate your medical marijuana card application and state rules.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {blogFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left font-heading text-base font-semibold text-[#0E3B2E] transition-colors hover:text-[#1A5944] sm:text-lg"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`ml-4 size-5 shrink-0 text-[#2F7A18] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[#5F6B6F] sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
