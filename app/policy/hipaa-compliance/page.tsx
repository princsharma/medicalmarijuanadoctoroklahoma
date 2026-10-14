import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { PageDates } from "@/components/seo/page-dates";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.hipaa);

type LinkRef = { text: string; href: string };

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  subitems?: { label: string; text: string }[];
  faqs?: { q: string; a: string }[];
  note?: string;
  links?: LinkRef[];
};

const sections: Section[] = [
  {
    heading: "What Is HIPAA?",
    body: [
      "The Health Insurance Portability and Accountability Act of 1996 (HIPAA) is a United States federal law that establishes national standards for the protection of sensitive patient health information.",
      "HIPAA requires healthcare providers and organizations that handle medical data to implement safeguards that protect Protected Health Information (PHI) from unauthorized access, disclosure, or misuse.",
      "HIPAA regulations primarily focus on:",
    ],
    list: [
      "Protecting the confidentiality of patient health information",
      "Ensuring the security of electronic health records and communications",
      "Giving patients rights regarding access to and control over their medical data",
    ],
    note: "Organizations that handle health information must comply with HIPAA privacy and security rules to ensure patient data is handled responsibly and securely.",
  },
  {
    heading: "Our Commitment to HIPAA Compliance",
    body: [
      "Medical Marijuana Doctor Oklahoma implements administrative, technical, and physical safeguards designed to support HIPAA privacy and security standards.",
      "Our privacy and security practices are intended to ensure that patient health information is:",
    ],
    list: [
      "Collected only when necessary to provide medical services",
      "Stored using secure systems and access controls",
      "Protected against unauthorized disclosure or misuse",
      "Accessed only by authorized healthcare professionals and necessary personnel",
    ],
    note: "We continuously review our privacy policies, security systems, and operational procedures to help maintain compliance with healthcare privacy regulations.",
  },
  {
    heading: "What Is Protected Health Information (PHI)?",
    body: [
      "Protected Health Information (PHI) refers to identifiable information related to a person's health condition, medical treatment, or healthcare services.",
      "Examples of PHI may include:",
    ],
    list: [
      "Medical history or health conditions",
      "Physician consultation records",
      "Telehealth consultation information",
      "Medical marijuana evaluation details",
      "Personal identifiers connected to healthcare records",
    ],
    note: "Under HIPAA, this information must be protected using appropriate privacy and security safeguards.",
  },
  {
    heading: "How Medical Marijuana Doctor Oklahoma Protects Patient Information",
    body: ["We use several layers of safeguards to help protect patient health information."],
    subitems: [
      {
        label: "Administrative Safeguards",
        text: "Policies and procedures that limit access to health information to authorized individuals who require it to perform their duties.",
      },
      {
        label: "Technical Safeguards",
        text: "Secure systems for storing and transmitting sensitive data. These systems help protect patient information through encrypted communications, access controls, and secure technologies.",
      },
      {
        label: "Physical Safeguards",
        text: "Protection for the infrastructure used to store health information, including servers, networks, and systems that support telehealth services.",
      },
    ],
    note: "Together, these safeguards help maintain the confidentiality and integrity of patient information.",
  },
  {
    heading: "Telehealth Privacy and Security Standards",
    body: [
      "Medical Marijuana Doctor Oklahoma provides telehealth services that allow patients to consult with Oklahoma-licensed physicians remotely for medical marijuana evaluations.",
      "Telehealth consultations may involve:",
    ],
    list: [
      "Secure video consultations",
      "Protected electronic messaging",
      "Secure transmission of medical documentation",
    ],
    note: "These technologies are designed to help protect patient privacy and maintain confidentiality during remote medical evaluations.",
  },
  {
    heading: "Use and Disclosure of Health Information",
    body: [
      "Patient health information may be used or disclosed only as permitted under applicable healthcare privacy laws.",
      "This may include uses such as:",
    ],
    list: [
      "Facilitating medical evaluations conducted by licensed physicians",
      "Supporting telehealth consultations",
      "Maintaining necessary administrative and medical records",
      "Complying with legal or regulatory obligations when required by law",
    ],
    note: "Medical Marijuana Doctor Oklahoma does not sell patient medical information.",
  },
  {
    heading: "Patient Privacy Rights",
    body: ["Patients may have certain rights regarding their protected health information, including the ability to:"],
    list: [
      "Request access to their personal health information",
      "Request corrections to inaccurate records",
      "Request restrictions on certain uses or disclosures of information",
      "Request confidential communication when appropriate",
    ],
    note: "Requests for personal health information may be submitted using the contact information below.",
  },
  {
    heading: "Data Security Practices",
    body: [
      "Medical Marijuana Doctor Oklahoma uses security practices designed to protect patient data from unauthorized access, disclosure, alteration, or destruction.",
      "Sensitive information transmitted through the platform may be protected using secure communication technologies and controlled access systems.",
      "While no electronic system can guarantee absolute security, we implement reasonable safeguards designed to help protect patient information.",
    ],
    note: "This HIPAA Compliance Notice should be read together with our Privacy Policy and Terms of Use, which provide additional information regarding how personal data is collected, used, and disclosed.",
    links: [
      { text: "Privacy Policy", href: pages.privacy.path },
      { text: "Terms of Use", href: pages.terms.path },
    ],
  },
  {
    heading: "Frequently Asked Questions",
    faqs: [
      {
        q: "Is Medical Marijuana Doctor Oklahoma HIPAA compliant?",
        a: "Yes. Medical Marijuana Doctor Oklahoma follows privacy and security practices designed to comply with HIPAA standards for protecting patient health information during telehealth consultations and medical marijuana evaluations.",
      },
      {
        q: "How does Medical Marijuana Doctor Oklahoma protect patient information?",
        a: "We use secure systems, access controls, and privacy safeguards designed to protect patient information from unauthorized access or disclosure.",
      },
      {
        q: "Are telehealth consultations secure?",
        a: "Telehealth consultations conducted through Medical Marijuana Doctor Oklahoma are designed to support HIPAA-compliant privacy protections, maintaining the confidentiality of patient information during remote medical evaluations.",
      },
      {
        q: "Is my medical marijuana evaluation confidential?",
        a: "Yes. Medical marijuana evaluations conducted through licensed physicians are treated as confidential medical information and handled according to healthcare privacy standards and HIPAA guidelines.",
      },
      {
        q: "Who can access my health information?",
        a: "Access to protected health information is limited to authorized healthcare providers and necessary personnel involved in providing services through the platform.",
      },
    ],
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

function renderWithLinks(text: string, links?: LinkRef[]): ReactNode {
  if (!links?.length) return text;

  let remaining = text;
  const nodes: ReactNode[] = [];

  links.forEach((link, linkIndex) => {
    const splitIndex = remaining.indexOf(link.text);
    if (splitIndex === -1) return;

    nodes.push(remaining.slice(0, splitIndex));
    nodes.push(
      <Link
        key={`${link.href}-${linkIndex}`}
        href={link.href}
        className="font-medium text-[#0E3B2E] underline underline-offset-2"
      >
        {link.text}
      </Link>
    );
    remaining = remaining.slice(splitIndex + link.text.length);
  });

  nodes.push(remaining);

  return nodes.map((node, i) => <span key={i}>{node}</span>);
}

export default function HipaaCompliancePage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.hipaa)} />
      <SiteHeader />
      <PageBreadcrumb
        page="HIPAA Compliance"
        currentPath={pages.hipaa.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                FEDERAL COMPLIANCE
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                HIPAA Compliance and Health Information Privacy
              </h1>
              <PageDates page={pages.hipaa} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Medical Marijuana Doctor Oklahoma is committed to protecting the privacy and
                security of patient health information. As a telehealth platform that connects
                Oklahoma patients with licensed physicians for medical marijuana evaluations, we
                take the confidentiality of personal and medical information seriously.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                We follow healthcare privacy standards designed to protect patient data, including
                the requirements established under the Health Insurance Portability and
                Accountability Act (HIPAA), and maintain the technologies and procedures that
                support secure telehealth consultations.
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
                      {section.faqs ? (
                        <div className="space-y-4">
                          {section.faqs.map((faq) => (
                            <div key={faq.q}>
                              <p className="font-semibold text-[#0E3B2E]">{faq.q}</p>
                              <p className="mt-1">{faq.a}</p>
                            </div>
                          ))}
                        </div>
                      ) : null}
                      {section.note ? <p>{renderWithLinks(section.note, section.links)}</p> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/consent-for-telehealth/"
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:bg-black/[0.02]"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/75">
                    NEXT DOCUMENT
                  </p>
                  <p className="mt-1 font-heading text-lg font-medium text-[#0E3B2E]">
                    Consent for Telehealth
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
