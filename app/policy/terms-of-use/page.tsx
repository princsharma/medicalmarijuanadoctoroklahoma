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

export const metadata: Metadata = buildMetadata(pages.terms);

type LinkRef = { text: string; href: string };

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  afterList?: string[];
  secondListIntro?: string;
  secondList?: string[];
  note?: string;
  links?: LinkRef[];
  contact?: { label: string; value: string; href?: string }[];
};

const sections: Section[] = [
  {
    heading: "Overview of Services",
    body: [
      "Medical Marijuana Doctor Oklahoma operates a technology-based platform that facilitates access to independent licensed physicians who provide medical marijuana evaluations in Oklahoma, where such services are legally permitted.",
      "Medical Marijuana Doctor Oklahoma is not a medical practice and does not provide medical advice, diagnosis, or treatment. All clinical evaluations and medical marijuana recommendations are provided solely by independent licensed physicians who are responsible for their own professional judgment and compliance with applicable state law.",
      "The role of Medical Marijuana Doctor Oklahoma is limited to providing administrative, technological, and communication support that enables patients to connect with licensed physicians for telehealth evaluations.",
      "All medical marijuana recommendations, if issued, are granted solely at the discretion of the evaluating physician following an individualized medical assessment. Medical Marijuana Doctor Oklahoma does not influence or control medical decisions and does not guarantee that any user will qualify for or receive a medical marijuana recommendation.",
      "Services are available where medical marijuana evaluations via telehealth are permitted under applicable Oklahoma law.",
    ],
  },
  {
    heading: "Eligibility and Compliance",
    body: [
      "Services offered through Medical Marijuana Doctor Oklahoma are available only to individuals who are physically located in Oklahoma at the time of their evaluation.",
      "By using this website and its services, you represent and warrant that:",
    ],
    list: [
      "You are at least 18 years of age, or the minimum legal age required under Oklahoma law",
      "You are physically located in Oklahoma where the requested services are legally permitted",
      "You will provide accurate, complete, and truthful information during registration and evaluation",
    ],
    afterList: [
      "Physicians providing services through the platform are licensed in Oklahoma. You understand that eligibility requirements for medical marijuana recommendations are set by Oklahoma law and OMMA regulations, and approval is subject to state-specific medical and regulatory standards.",
      "You are solely responsible for complying with all applicable local, state, and federal laws relating to medical marijuana use, possession, and related activities.",
      "Medical Marijuana Doctor Oklahoma reserves the right to limit, deny, or discontinue services if legal or regulatory changes restrict such services.",
    ],
  },
  {
    heading: "Physician-Patient Relationship",
    body: [
      "A physician-patient relationship is established only once a licensed physician agrees to evaluate you and begins the medical assessment process through the platform.",
      "Medical Marijuana Doctor Oklahoma does not employ, control, or supervise the clinical practice of physicians providing services through the platform. All physicians are independent licensed professionals who exercise their own professional judgment in evaluating patients and determining whether a medical marijuana recommendation is appropriate under applicable Oklahoma law.",
      "Medical Marijuana Doctor Oklahoma does not influence medical decisions or treatment recommendations and does not guarantee that any individual will receive a medical marijuana recommendation. You understand and agree that any medical advice, evaluation, or recommendation you receive is provided solely by the physician and not by Medical Marijuana Doctor Oklahoma.",
    ],
  },
  {
    heading: "Telehealth Consent and Limitations",
    body: [
      "By using the services available through Medical Marijuana Doctor Oklahoma, you consent to receive medical evaluations and related services through telehealth technologies, where permitted by applicable law.",
      "Telehealth services are delivered using electronic communication methods, which may include video conferencing, audio communication, electronic messaging, and digital transmission of medical information.",
      "You acknowledge and understand that:",
    ],
    list: [
      "Telehealth consultations may differ from in-person medical visits",
      "Certain conditions may not be suitable for telehealth evaluation",
      "Technical difficulties may interrupt or delay communication",
      "The evaluating physician may determine that an in-person examination is necessary",
    ],
    afterList: [
      "Telehealth services are not intended for emergency medical situations. By proceeding with telehealth services, you voluntarily accept any limitations associated with remote medical evaluations as permitted by law.",
    ],
  },
  {
    heading: "Privacy Policy",
    body: [
      "Your use of the website and services is also governed by our Privacy Policy, which describes how we collect, use, disclose, and safeguard your personal information, including information submitted during medical evaluations. All personal health information is collected, transmitted, and stored in compliance with HIPAA privacy and security standards.",
    ],
    note: "By accessing or using the website, you acknowledge that you have read and agree to those terms.",
    links: [{ text: "Privacy Policy", href: pages.privacy.path }],
  },
  {
    heading: "Federal Law and Regulatory Disclosure",
    body: [
      "Medical marijuana laws vary by state, and eligibility requirements differ depending on applicable state regulations. While Oklahoma permits medical use of marijuana under state law, marijuana remains classified as a Schedule I controlled substance under United States federal law. Federal law may prohibit certain activities related to marijuana, including possession, distribution, and use.",
      "Medical Marijuana Doctor Oklahoma operates in compliance with applicable Oklahoma state law governing medical marijuana evaluations. However, we make no representation regarding the legality of marijuana under federal law.",
      "You are solely responsible for understanding and complying with all local, state, and federal laws that apply to you, including laws related to the possession, use, transportation, or distribution of medical marijuana.",
      "Nothing on this website should be interpreted as legal advice regarding marijuana laws.",
    ],
  },
  {
    heading: "User Responsibilities and Prohibited Conduct",
    body: [
      "By accessing or using the website and services, you agree to use the platform only for lawful purposes and in accordance with these Terms.",
      "You agree that you will:",
    ],
    list: [
      "Provide accurate, complete, and truthful information during registration and medical evaluation",
      "Maintain the confidentiality of your account credentials",
      "Comply with all applicable laws and regulations",
    ],
    secondListIntro: "You agree that you will not:",
    secondList: [
      "Provide false, misleading, or fraudulent information",
      "Use another person's identity or credentials",
      "Attempt to gain unauthorized access to the website, systems, or accounts",
      "Interfere with or disrupt the operation of the platform",
      "Use the services for any unlawful purpose",
      "Copy, modify, distribute, reverse engineer, or otherwise misuse website content or technology",
    ],
    afterList: [
      "Medical Marijuana Doctor Oklahoma reserves the right to suspend, restrict, or terminate access to the website or services if you violate these Terms or engage in conduct that we determine, in our sole discretion, is unlawful, fraudulent, abusive, or harmful.",
    ],
  },
  {
    heading: "Fees and Refund Policy",
    body: [
      "Fees for medical marijuana evaluations are disclosed at the time of scheduling and prior to confirmation of services.",
      "Refund eligibility is subject to specific conditions, including but not limited to physician eligibility determinations and service delivery timelines.",
    ],
    note: "Complete details regarding refunds, eligibility criteria, and procedures are set forth in our Refund Policy.",
    links: [{ text: "Refund Policy", href: pages.refund.path }],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, Medical Marijuana Doctor Oklahoma, its affiliates, officers, directors, employees, and representatives shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages arising out of or related to your use of the website or services.",
      "This includes, but is not limited to, loss of profits, data, business opportunities, or service interruptions or delays in evaluation. In no event shall Medical Marijuana Doctor Oklahoma's total liability exceed the amount paid by you for services through the platform in the twelve (12) months preceding the event giving rise to the claim.",
      "Some states do not allow certain limitations of liability. In such cases, liability shall be limited to the maximum extent permitted by applicable law.",
    ],
  },
  {
    heading: "Indemnification",
    body: [
      "You agree to indemnify, defend, and hold harmless Medical Marijuana Doctor Oklahoma, its affiliates, officers, directors, employees, contractors, and representatives from and against any claims, demands, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to:",
    ],
    list: [
      "Your use or misuse of the website or services",
      "Your violation of these Terms of Use",
      "Your violation of any applicable law or regulation",
      "Any false, inaccurate, or misleading information you provide",
      "Your infringement of the rights of any third party",
    ],
    afterList: [
      "This indemnification obligation survives termination of your use of the website or services.",
    ],
  },
  {
    heading: "Governing Law and Dispute Resolution",
    body: [
      "These Terms of Use and any disputes arising out of or relating to your access to or use of the website or services shall be governed by and construed in accordance with the laws of the State of Oklahoma, without regard to its conflict of law principles.",
      "You agree that any legal action or proceeding arising out of or relating to these Terms shall be brought exclusively in the state or federal courts located in Oklahoma, and you consent to the personal jurisdiction and venue of such courts.",
      "To the fullest extent permitted by law, any claim arising out of or relating to your use of the website or services must be brought in your individual capacity and not as a plaintiff or class member in any purported class, collective, or representative proceeding. Nothing in these Terms shall prevent either party from seeking equitable or injunctive relief where appropriate.",
    ],
  },
  {
    heading: "Modifications to Terms and Services",
    body: [
      "Medical Marijuana Doctor Oklahoma reserves the right to update, modify, or replace these Terms of Use at any time in its sole discretion. Any changes will be effective upon posting the revised Terms on the website, unless otherwise stated. Your continued access to or use of the website or services after any changes are posted constitutes your acceptance of the revised Terms.",
      "We also reserve the right to modify, suspend, or discontinue any aspect of the website or services at any time, including availability in certain jurisdictions, without prior notice, where required by legal, regulatory, or operational considerations.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "Medical Marijuana Doctor Oklahoma reserves the right to suspend, restrict, or terminate your access to the website or services at any time, with or without notice, if we believe that you have engaged in conduct that is unlawful, fraudulent, abusive, or harmful. We may discontinue use of the website and services at any time.",
      "Termination of access does not relieve you of any obligations incurred prior to termination, including payment obligations or indemnification responsibilities.",
      "The provisions of these Terms that by their nature should survive termination, including but not limited to Limitation of Liability, Indemnification, Governing Law, and Dispute Resolution, shall remain in full force and effect after termination.",
    ],
  },
  {
    heading: "Contact Information and Notices",
    body: [
      "If you have any questions regarding these Terms of Use, you may contact us using the information below:",
    ],
    contact: [
      { label: "Company", value: "Medical Marijuana Doctor Oklahoma" },
      {
        label: "Website",
        value: "https://medicalmarijuanadoctoroklahoma.com",
        href: "https://medicalmarijuanadoctoroklahoma.com",
      },
      {
        label: "Email",
        value: "contact@medicalmarijuanadoctoroklahoma.com",
        href: "mailto:contact@medicalmarijuanadoctoroklahoma.com",
      },
      {
        label: "Phone",
        value: "+1 (405) 445-1637",
        href: "tel:+14054451637",
      },
    ],
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

function renderWithLinks(
  text: string,
  links: LinkRef[] | undefined,
  linkedHrefs: Set<string>
): ReactNode {
  if (!links?.length) return text;

  let remaining = text;
  const nodes: ReactNode[] = [];

  links.forEach((link, linkIndex) => {
    if (linkedHrefs.has(link.href)) return;

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
    linkedHrefs.add(link.href);
  });

  nodes.push(remaining);

  return nodes.map((node, i) => <span key={i}>{node}</span>);
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#4C9A2A]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.terms)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Terms of Use"
        currentPath={pages.terms.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                LEGAL TERMS
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Terms of Use
              </h1>
              <PageDates page={pages.terms} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Please carefully review these Terms of Use before accessing or using the Medical
                Marijuana Doctor Oklahoma website or services. These terms contain important
                information regarding your legal rights, disclaimers of warranties, and limitations
                of liability.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                By accessing, browsing, registering for, or using this website or any services
                provided through the platform, you acknowledge that you have read, understood, and
                agree to be legally bound by these Terms of Use, our Privacy Policy, and any other
                policies referenced herein.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Medical Marijuana Doctor Oklahoma operates as a technology platform that facilitates
                access to independent licensed physicians for medical marijuana evaluations where
                permitted by applicable state law. Medical Marijuana Doctor Oklahoma does not
                provide medical advice, diagnosis, or treatment and does not guarantee that any
                individual will receive a medical marijuana recommendation.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Your continued use of the website following any modifications to these Terms
                constitutes your acceptance of those changes.
              </p>
            </div>

            <div className="mt-10">
              {sections.map((section, index) => {
                const linkedHrefs = new Set<string>();

                return (
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
                        <p key={i}>{renderWithLinks(paragraph, section.links, linkedHrefs)}</p>
                      ))}
                      {section.list ? <BulletList items={section.list} /> : null}
                      {section.secondListIntro ? <p>{section.secondListIntro}</p> : null}
                      {section.secondList ? <BulletList items={section.secondList} /> : null}
                      {section.afterList?.map((paragraph, i) => (
                        <p key={`after-${i}`}>{paragraph}</p>
                      ))}
                      {section.contact ? (
                        <ul className="space-y-3">
                          {section.contact.map((item) => (
                            <li key={item.label}>
                              <p className="font-semibold text-[#0E3B2E]">{item.label}:</p>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className="mt-0.5 block max-w-full break-all font-medium text-[#0E3B2E] underline underline-offset-2"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                <p className="mt-0.5 max-w-full break-words">{item.value}</p>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.note ? (
                        <p>{renderWithLinks(section.note, section.links, linkedHrefs)}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            <div className="mt-4">
              <Link
                href={pages.privacy.path}
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:bg-black/[0.02]"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/75">
                    NEXT DOCUMENT
                  </p>
                  <p className="mt-1 font-heading text-lg font-medium text-[#0E3B2E]">
                    Privacy Policy
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
