import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { PageDates } from "@/components/seo/page-dates";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.refund);

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  subitems?: { label: string; text: string }[];
  note?: string;
  email?: string;
};

const sections: Section[] = [
  {
    heading: "Eligibility for a Full Refund",
    body: [
      "You are eligible for a 100% refund of your evaluation fee under the following circumstances:",
    ],
    subitems: [
      {
        label: "Physician Denial",
        text: "If the Oklahoma-licensed physician determines, in their professional judgment, that you do not qualify for a medical marijuana recommendation.",
      },
      {
        label: "Failure to Deliver Recommendation Within Stated Timeframe",
        text: "If we fail to provide your approved medical marijuana recommendation within the stated timeframe (typically 24-48 hours following completion of your physician evaluation and approval).",
      },
      {
        label: "Verification Failure",
        text: "If your issued medical marijuana recommendation cannot be verified due to an error attributable to the issuing physician or our platform.",
      },
    ],
    note: "Refund eligibility applies only to the evaluation fee paid to Medical Marijuana Doctor Oklahoma and does not include any OMMA application fees, state fees, or third-party charges, if applicable.",
  },
  {
    heading: "Non-Refundable Situations",
    body: ["Refunds will not be issued under the following circumstances:"],
    list: [
      "If you request cancellation after completing your evaluation but before receiving a decision from the physician",
      "If you receive a valid medical marijuana recommendation and later change your mind",
      "If you provide false, incomplete, or misleading information during the evaluation process",
      "If services are denied due to your failure to meet Oklahoma's eligibility requirements",
    ],
  },
  {
    heading: "Missed Appointment Policy",
    body: [
      "If you are unable to attend your scheduled appointment, you must contact our support team in advance to reschedule.",
      "Failure to attend a scheduled evaluation without prior notice may result in a $30 missed appointment fee. This fee may be deducted from any eligible refund, where applicable.",
    ],
  },
  {
    heading: "Refund Request Process",
    body: ["To request a refund, please contact our support team at:"],
    email: "contact@medicalmarijuanadoctoroklahoma.com",
    note: "Refund requests must include your full name, email address used at registration, and a brief explanation of your request.",
  },
  {
    heading: "Refund Processing",
    body: [
      "Approved refunds are typically processed within 7-10 business days, depending on your payment method.",
    ],
  },
  {
    heading: "Final Determination",
    body: [
      "Medical Marijuana Doctor Oklahoma reserves the right to review and determine refund eligibility in accordance with this Refund Policy and applicable law.",
    ],
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.refund)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Refund Policy"
        currentPath={pages.refund.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                MONEY-BACK GUARANTEE
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Refund Policy
              </h1>
              <PageDates page={pages.refund} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Medical Marijuana Doctor Oklahoma offers a 100% money-back guarantee, subject to the
                eligibility conditions outlined below. This policy applies to medical marijuana
                evaluation services provided through our platform.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Please review this policy carefully before scheduling your evaluation.
              </p>
            </div>

            <div className="mt-10">
              {sections.map((section, index) => (
                <div
                  key={section.heading}
                  className={`flex gap-5 py-8 ${index !== sections.length - 1 ? "border-b border-black/5" : ""}`}
                >
                  <span className="shrink-0 font-heading text-lg font-medium text-[#2F7A18]">
                    {pad(index)}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-base font-semibold text-[#0E3B2E]">{section.heading}</h2>
                    <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-[#0E3B2E]/85">
                      {section.body?.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                      {section.subitems ? (
                        <div className="space-y-3">
                          {section.subitems.map((item) => (
                            <p key={item.label}>
                              <span className="font-semibold text-[#0E3B2E]">{item.label}:</span>{" "}
                              {item.text}
                            </p>
                          ))}
                        </div>
                      ) : null}
                      {section.list ? (
                        <ul className="space-y-1.5">
                          {section.list.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4C9A2A]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.email ? (
                        <p>
                          <a
                            href={`mailto:${section.email}`}
                            className="font-medium text-[#0E3B2E] underline underline-offset-2"
                          >
                            {section.email}
                          </a>
                        </p>
                      ) : null}
                      {section.note ? <p>{section.note}</p> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href={pages.terms.path}
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:bg-black/[0.02]"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/75">
                    NEXT DOCUMENT
                  </p>
                  <p className="mt-1 font-heading text-lg font-medium text-[#0E3B2E]">
                    Terms of Use
                  </p>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full bg-[#EAF1EA] text-[#0E3B2E]">
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
