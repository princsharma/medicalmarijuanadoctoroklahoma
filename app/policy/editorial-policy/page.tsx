import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { PageDates } from "@/components/seo/page-dates";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.editorial);

type Section = {
  heading: string;
  body?: string[];
  subitems?: { label: string; text: string }[];
  email?: string;
  note?: string;
};

const sections: Section[] = [
  {
    heading: "Our Core Principles",
    subitems: [
      {
        label: "Vision",
        text: "To make safe, legal, and effective medical marijuana information accessible to every Oklahoma patient and caregiver.",
      },
      {
        label: "Mission",
        text: "To provide clear guidance on medical marijuana use, Oklahoma regulations, and wellness applications in an accurate, ethical, and approachable manner.",
      },
      {
        label: "Promise",
        text: "We adhere to Oklahoma state and federal medical marijuana protocols, offering information supported by licensed medical professionals and credible research.",
      },
    ],
  },
  {
    heading: "Editorial Standards",
    body: [
      "All content is created and reviewed by writers with direct experience in cannabis and healthcare topics, and every piece is fact-checked against peer-reviewed studies, Oklahoma state regulations, and official medical sources before publication.",
      "We work to dispel misinformation about medical marijuana, clarifying misconceptions around cannabis use, effects, and Oklahoma's legal guidelines. Any medical or legal guidance referenced in our content comes from licensed professionals in their respective fields, and only current, trustworthy sources are used to support what we publish.",
    ],
  },
  {
    heading: "Ethical Approach",
    body: [
      "We avoid publishing content that criticizes individuals, dispensaries, or practitioners. Our focus is on educating readers with respect, not taking sides.",
      "On medical, legal, and wellness topics, we approach the subject matter objectively, prioritizing patient safety, legal compliance, and factual accuracy above all else.",
    ],
  },
  {
    heading: "Review Process",
    body: [
      "Every piece of content is reviewed before publication for clarity, accuracy, and adherence to these standards. We recognize that no process is perfect. If you notice an error or have a suggestion, contact us at:",
    ],
    email: "contact@medicalmarijuanadoctoroklahoma.com",
    note: "Every report is reviewed, and content is updated when it improves accuracy or usefulness.",
  },
  {
    heading: "Our Promise to You",
    body: [
      "Our goal is to give Oklahoma patients, caregivers, and cannabis-curious readers clear, actionable, and trustworthy information. Through our commitment to accuracy, ethics, and patient advocacy, we aim to be a resource Oklahomans can rely on for medical marijuana information.",
    ],
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function EditorialPolicyPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.editorial)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Editorial Policy"
        currentPath={pages.editorial.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                CONTENT STANDARDS
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Editorial Policy
              </h1>
              <PageDates page={pages.editorial} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                At Medical Marijuana Doctor Oklahoma, we are committed to delivering accurate,
                reliable, and practical information about medical marijuana in Oklahoma, cannabis
                wellness, and related legal and health topics. Our editorial team ensures that all
                content meets high standards of credibility, clarity, and usefulness for our
                readers. Meet the people behind that work on our{" "}
                <Link
                  href={pages.contributors.path}
                  className="font-medium text-[#0E3B2E] underline underline-offset-2"
                >
                  Contributors
                </Link>{" "}
                page.
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
                href="/contact-us/"
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:bg-black/[0.02]"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/75">
                    SPOT AN ERROR?
                  </p>
                  <p className="mt-1 font-heading text-lg font-medium text-[#0E3B2E]">Contact Us</p>
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
