import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { PageDates } from "@/components/seo/page-dates";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.accessibility);

type LinkRef = { text: string; href: string };

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  note?: string;
  policyLinks?: LinkRef[];
};

const sections: Section[] = [
  {
    heading: "Commitment to Accessibility",
    body: [
      "We are dedicated to making our website usable and accessible for individuals with diverse abilities and assistive technology needs. Our goal is to ensure that all users can navigate our site efficiently and access important information about our online medical marijuana evaluation services.",
      "As a telehealth provider, we recognize the importance of providing accessible digital healthcare services so patients can conveniently connect with Oklahoma-licensed physicians online. We continuously review and update our website to improve usability and accessibility for all visitors.",
      "Accessibility is an ongoing effort, and we remain committed to enhancing the digital experience for our patients.",
    ],
  },
  {
    heading: "Accessibility Standards",
    body: [
      "Our website is designed with accessibility best practices in mind and aligns with the Web Content Accessibility Guidelines (WCAG) 2.1, developed by the World Wide Web Consortium.",
      "These guidelines are internationally recognized standards intended to improve accessibility for individuals with visual, auditory, motor, and cognitive disabilities and to support compatibility with assistive technologies.",
    ],
  },
  {
    heading: "Website Accessibility Features",
    body: ["To support accessibility, our website may include the following features:"],
    list: [
      "Clear and consistent page structure",
      "Logical heading hierarchy",
      "Screen reader compatibility",
      "Alternative text for images",
      "Responsive design for mobile and desktop devices",
      "Readable font sizes and scalable text options",
      "Sufficient color contrast for improved readability",
    ],
    note: "These features help ensure users can access information about our telehealth services effectively.",
  },
  {
    heading: "Telehealth Accessibility",
    body: [
      "Our platform is designed to reduce barriers to healthcare by enabling Oklahoma patients to complete medical marijuana evaluations online. We strive to ensure that individuals using assistive technologies can access information related to scheduling, eligibility requirements, and patient support services.",
      "We are committed to making our digital healthcare experience as accessible as possible.",
    ],
  },
  {
    heading: "Ongoing Improvements",
    body: [
      "We regularly review our website to identify opportunities for improvement and to enhance accessibility and usability. As technology and standards evolve, we continue implementing updates to support a more inclusive experience for all users.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "Some website features may rely on third-party tools, such as scheduling systems or payment processors. While we strive to maintain accessibility throughout our platform, we cannot guarantee the accessibility of external services outside our direct control.",
      "If you encounter any issues with third-party tools, please contact us for assistance.",
    ],
  },
  {
    heading: "Accessibility Assistance",
    body: [
      "If you experience difficulty accessing any part of our website or need assistance with our content or services, please contact us. We will make reasonable efforts to provide the information or support you need in an accessible format.",
    ],
  },
  {
    heading: "Related Policies",
    body: [
      "Accessibility is part of our broader commitment to protecting patient rights, maintaining transparency, and providing secure telehealth services. To learn more about how we protect your information and govern the use of our platform, please review the following pages:",
    ],
    policyLinks: [
      { text: "Privacy Policy", href: pages.privacy.path },
      { text: "Terms of Use", href: pages.terms.path },
      { text: "HIPAA Compliance Policy", href: pages.hipaa.path },
    ],
    note: "These policies outline how we handle patient data, maintain secure communications, and ensure responsible use of our telehealth services.",
  },
  {
    heading: "Feedback",
    body: [
      "We welcome feedback regarding the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please let us know. Your input helps us continue improving the accessibility and usability of our platform.",
    ],
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function AccessibilityStatementPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.accessibility)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Accessibility Statement"
        currentPath={pages.accessibility.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                INCLUSIVE ACCESS
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Accessibility Statement
              </h1>
              <PageDates page={pages.accessibility} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                At Medical Marijuana Doctor Oklahoma, we are committed to ensuring that our website
                and telehealth services are accessible to all users, including individuals with
                disabilities. We strive to provide an inclusive digital experience that allows
                patients to access information, review eligibility requirements, and schedule online
                consultations with ease.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Accessibility is an ongoing priority as we continue to improve our platform.
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
                      {section.policyLinks ? (
                        <ul className="space-y-1.5">
                          {section.policyLinks.map((link) => (
                            <li key={link.href} className="flex items-start gap-2.5">
                              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4C9A2A]" />
                              <Link
                                href={link.href}
                                className="font-medium text-[#0E3B2E] underline underline-offset-2"
                              >
                                {link.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
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
                    NEED HELP?
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
