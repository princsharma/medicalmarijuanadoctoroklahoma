import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { PageDates } from "@/components/seo/page-dates";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.telehealth);

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  note?: string;
  links?: { text: string; href: string }[];
};

const sections: Section[] = [
  {
    heading: "Telehealth Services",
    body: [
      "Telehealth services use electronic communications to enable healthcare providers to evaluate, diagnose, and provide medical guidance remotely.",
      "Telehealth consultations may include:",
    ],
    list: [
      "Live video consultations",
      "Audio or telephone communication",
      "Secure electronic messaging",
      "Digital transmission of medical information and records",
    ],
    note: "Medical Marijuana Doctor Oklahoma operates a technology platform that helps connect patients with independent, Oklahoma-licensed physicians for medical marijuana evaluations, where permitted by state law. Additional information about the platform and our services can be found in our Terms of Use.",
    links: [{ text: "Terms of Use", href: pages.terms.path }],
  },
  {
    heading: "Nature of Telehealth Consultations",
    body: [
      "Telehealth consultations differ from traditional in-person medical visits. Because telehealth is conducted remotely, healthcare providers rely on the information you provide during the consultation to evaluate your condition.",
      "Certain medical conditions or circumstances may require an in-person examination, and a physician may determine that telehealth services are not appropriate for your situation.",
    ],
  },
  {
    heading: "Potential Benefits of Telehealth",
    body: ["Telehealth services may offer several benefits, including:"],
    list: [
      "Improved access to healthcare services",
      "Convenience and reduced travel time",
      "Faster communication with licensed healthcare providers",
    ],
  },
  {
    heading: "Potential Risks and Limitations",
    body: ["As with any medical service, telehealth may involve certain limitations, including:"],
    list: [
      "Technical interruptions or delays during communication",
      "Limitations in conducting physical examinations remotely",
      "Possible delays in diagnosis or treatment due to incomplete or inaccurate information",
    ],
    note: "You acknowledge that these limitations may affect the evaluation process.",
  },
  {
    heading: "Not for Emergency Medical Situations",
    body: [
      "Telehealth services provided through Medical Marijuana Doctor Oklahoma are not intended for emergency medical or psychiatric situations.",
      "If you are experiencing a medical emergency, call 911 or go to the nearest emergency department immediately.",
    ],
  },
  {
    heading: "Provider-Patient Relationship",
    body: [
      "A provider-patient relationship is established only after a licensed physician agrees to evaluate you and begins the medical assessment process through the telehealth consultation.",
      "Submitting information or scheduling an appointment does not automatically establish a provider-patient relationship.",
    ],
  },
  {
    heading: "Accuracy of Information",
    body: [
      "Healthcare providers rely on the information you provide during registration and consultation. You agree to provide accurate, complete, and truthful information regarding your health history, symptoms, and medical conditions.",
      "Providing inaccurate or incomplete information may affect the quality and safety of your care.",
    ],
  },
  {
    heading: "Communication Through Electronic Systems",
    body: [
      "Telehealth services may involve communication through electronic systems, including messaging platforms, video conferencing tools, and other digital technologies.",
      "While reasonable safeguards are used to protect your information, electronic communications may carry inherent risks, including technical failures and unauthorized access.",
    ],
    note: "Information about how your personal data is handled can be found in our Privacy Policy.",
    links: [{ text: "Privacy Policy", href: "/privacy-policy/" }],
  },
  {
    heading: "Privacy and Compliance",
    body: [
      "Medical Marijuana Doctor Oklahoma is committed to protecting the privacy and security of patient health information. Telehealth consultations and related medical communications are handled in accordance with healthcare privacy standards, including the Health Insurance Portability and Accountability Act (HIPAA).",
    ],
    note: "For more information about how we protect patient health information, please review our HIPAA Compliance Policy.",
    links: [{ text: "HIPAA Compliance Policy", href: "/hipaa-compliance/" }],
  },
  {
    heading: "Voluntary Consent",
    body: ["By using telehealth services through Medical Marijuana Doctor Oklahoma, you acknowledge and agree that:"],
    list: [
      "You understand the nature of telehealth services",
      "You understand the potential benefits and limitations of telehealth consultations",
      "You voluntarily consent to receive healthcare services through telehealth technologies",
      "You have had the opportunity to review related policies, including the Terms of Use and Privacy Policy",
    ],
    note: "If you do not agree with this Consent to Telehealth, you should not proceed with telehealth services through the platform.",
  },
  {
    heading: "Questions",
    note: "If you have any questions about this Consent to Telehealth or the telehealth services offered through Medical Marijuana Doctor Oklahoma, please contact us through the information on our Contact Us page.",
    links: [{ text: "Contact Us", href: "/contact-us/" }],
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function ConsentForTelehealthPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.telehealth)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Consent for Telehealth"
        currentPath={pages.telehealth.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                INFORMED CONSENT
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Consent to Telehealth
              </h1>
              <PageDates page={pages.telehealth} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                This Consent to Telehealth explains how telehealth services work when you use
                Medical Marijuana Doctor Oklahoma. Telehealth allows patients to communicate with
                licensed healthcare professionals remotely using secure electronic communication
                technologies.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                By using telehealth services through Medical Marijuana Doctor Oklahoma, you
                acknowledge that you have read and agree to receive healthcare services through
                telehealth technologies where permitted under Oklahoma law.
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
                      {section.note ? (
                        <p>
                          {section.links?.length
                            ? section.note.split(section.links[0].text).map((part, i, arr) => (
                                <span key={i}>
                                  {part}
                                  {i < arr.length - 1 ? (
                                    <Link
                                      href={section.links![0].href}
                                      className="font-medium text-[#0E3B2E] underline underline-offset-2"
                                    >
                                      {section.links![0].text}
                                    </Link>
                                  ) : null}
                                </span>
                              ))
                            : section.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/terms-of-use/"
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
