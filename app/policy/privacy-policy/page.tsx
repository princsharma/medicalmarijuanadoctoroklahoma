import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { PageDates } from "@/components/seo/page-dates";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.privacy);

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
  afterList?: string[];
  note?: string;
  contact?: { label: string; value: string; href?: string }[];
};

const sections: Section[] = [
  {
    heading: "Information We Collect",
    body: [
      "When you create an account, schedule an evaluation, communicate with us, or otherwise use our Services, we collect information necessary to provide medical marijuana evaluations and maintain regulatory compliance. This may include contact information, identification details required for verification, and health-related information relevant to your evaluation.",
      "We may also collect information from publicly available databases or identity verification services, as required, for fraud prevention or compliance purposes.",
      "When you visit our website, certain technical information is collected automatically. This may include your IP address, browser type, device type, operating system, and general usage data. We use analytics tools such as Google Analytics and Microsoft Clarity to better understand how users interact with our website through behavioral metrics and site performance analysis. This information is used for security, fraud prevention, performance optimization, and service improvement.",
      "We may also collect general location information, such as IP-based geographic data or zip code, to confirm you are located in Oklahoma and to provide services in accordance with Oklahoma regulations.",
    ],
  },
  {
    heading: "Health Information",
    body: [
      "In connection with medical marijuana evaluations, Oklahoma-licensed physicians may collect health-related information necessary to assess eligibility under applicable state law. We take the privacy and security of your health information seriously and ensure compliance with the Health Insurance Portability and Accountability Act (HIPAA) where applicable. This means that all personal health information you provide, including medical history, qualifying conditions, and treatment details, will be protected by strict confidentiality standards.",
      "We use health-related information solely for evaluation purposes and to comply with state-specific regulations. Health data is stored securely and used only to provide requested services, maintain accurate records, and verify eligibility. We do not use your personal health information for marketing purposes or disclose it to third parties without your consent, except as required by law.",
    ],
  },
  {
    heading: "How We Use Information",
    body: ["We use the collected information to:"],
    list: [
      "Facilitate medical marijuana evaluations with licensed physicians",
      "Verify identity and eligibility in accordance with Oklahoma law",
      "Process payments and manage appointments",
      "Communicate regarding appointments, service updates, and support",
      "Maintain regulatory compliance and business records",
      "Improve website functionality and user experience",
      "Prevent fraud, abuse, and unauthorized access",
    ],
    afterList: [
      "We may also use aggregated or de-identified information for research, reporting, and service improvement purposes.",
    ],
  },
  {
    heading: "Payment Processing",
    body: [
      "Payments are processed securely through third-party providers, including credit cards, PayPal, and Sezzle.",
      "We do not store full credit card numbers, bank account credentials, or authentication codes on our servers. Payment information is encrypted and processed directly by the respective payment provider in accordance with their own privacy and security standards.",
      "When using Sezzle or PayPal, you may be redirected to their platform to complete your transaction. Information provided to those services is governed by their independent privacy policies.",
    ],
  },
  {
    heading: "Cookies, Tracking Technologies, and Analytics",
    body: [
      "Our website uses cookies and similar technologies to enhance functionality and improve user experience. Cookies help us understand visitor preferences, measure site traffic, and maintain security.",
      "We may use analytics and performance tools, including Google Analytics and Microsoft Clarity, to evaluate how visitors use the website, analyze trends, and improve our Services. These tools may use cookies and other tracking technologies to collect behavioral and interaction data in a manner consistent with their respective privacy practices.",
      "You may adjust your browser settings to decline cookies, however certain website features may not function properly if cookies are disabled.",
    ],
  },
  {
    heading: "Communications and Email Lists",
    body: [
      "If you provide your contact information, we may communicate with you via email, SMS/text message, telephone, or automated messaging regarding appointments, account activity, service updates, and limited promotional information.",
      'By providing your phone number, you consent to receive service-related communications. You may opt out of promotional communications at any time by following unsubscribe instructions or replying "STOP" to text messages where applicable. Message and data rates may apply depending on your mobile carrier.',
      "We maintain email distribution lists for newsletters or updates. Email addresses are not sold, and access to such lists is restricted to authorized personnel and service providers.",
    ],
  },
  {
    heading: "Sharing of Information",
    body: ["We may share information with:"],
    list: [
      "Licensed physicians providing evaluations through the platform",
      "Service providers assisting with website hosting, analytics, payment processing, communications, identity verification, and fraud prevention",
      "Affiliates or related business entities for operational support",
      "Legal or regulatory authorities, when required by applicable law or to protect legal rights",
      "Successor entities in connection with a merger, acquisition, or business transfer",
    ],
    afterList: [
      "We do not sell personal health information. Information shared with third parties is limited to what is necessary for legitimate business, medical, or legal purposes.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We implement administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction.",
      "Sensitive data, including health-related information and payment transactions, is transmitted using industry-standard encryption technologies. Access to personal information is restricted to authorized personnel and trusted service providers.",
      "Our security practices are designed to align with applicable healthcare privacy and security standards where required. While we use commercially reasonable safeguards, no electronic transmission or storage system can guarantee absolute security.",
    ],
  },
  {
    heading: "Your Privacy Rights",
    body: [
      "Depending on your state of residence, you may have certain rights regarding your personal information, including:",
    ],
    list: [
      "The right to access your personal data",
      "The right to request deletion of your personal data, subject to certain exceptions",
      "The right to request correction of any inaccuracies in your data",
    ],
    afterList: [
      "You may submit a privacy-related request by contacting us. We will respond to your request within 30 days.",
    ],
  },
  {
    heading: "International Data Protection Laws",
    body: [
      "We have reviewed our business operations and data-handling practices in light of international privacy laws. As of the effective date of this Privacy Policy, we do not believe we are governed by the GDPR (General Data Protection Regulation), because we do not collect personal information from individuals located in the European Economic Area, the United Kingdom, or Switzerland, and we do not specifically target or tailor our website or services to those jurisdictions.",
      "If you believe a data protection law outside the United States applies to your use of our Services and you have questions about whether or how they apply to us, you may contact us using the details below. We are committed to providing transparency and assisting with any privacy-related concerns.",
    ],
  },
  {
    heading: "Children's Privacy",
    body: [
      "Our Services are intended solely for individuals aged 18 and over who meet the legal eligibility requirements in Oklahoma. We do not knowingly collect or solicit personal information from anyone under the age of 18. If we become aware that personal information has been collected from someone under 18, we will delete it immediately.",
      "Additionally, our Services are not intended for minors under the age of 18. If we learn that a minor has submitted personal information, we will delete it and notify the appropriate guardians.",
    ],
  },
  {
    heading: "Oklahoma and U.S. Jurisdiction",
    body: [
      "Our Services are operated within the United States and are intended for users located in Oklahoma, where medical marijuana evaluations are legally permitted. This Privacy Policy is governed by applicable United States federal law and Oklahoma state law.",
    ],
  },
  {
    heading: "Contact Information",
    body: [
      "For questions regarding this Privacy Policy or to submit a privacy-related request, please contact:",
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

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.privacy)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Privacy Policy"
        currentPath={pages.privacy.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                DATA PRIVACY
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Privacy Policy
              </h1>
              <PageDates page={pages.privacy} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                Medical Marijuana Doctor Oklahoma (&quot;Medical Marijuana Doctor Oklahoma,&quot;
                &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                privacy and safeguarding your personal information. This Privacy Policy explains how
                we collect, use, disclose, and protect information when you access our website or
                use our medical marijuana evaluation services.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                We are dedicated to protecting your personal health information in compliance with
                applicable privacy laws, including HIPAA (Health Insurance Portability and
                Accountability Act). The privacy and security of your health data are critically
                important to us, and we have implemented industry-standard measures to ensure that
                your information remains confidential.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                By using our Services, you agree to the practices described in this Privacy Policy.
                Please read it thoroughly to understand how we handle your personal and health
                information.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                This Privacy Policy applies to our website and related services (collectively, the
                &quot;Services&quot;). Our Services are intended for individuals located in
                Oklahoma, where medical marijuana evaluations are legally permitted.
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
                      {section.list ? <BulletList items={section.list} /> : null}
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
                      {section.note ? <p>{section.note}</p> : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href={pages.hipaa.path}
                className="flex items-center justify-between rounded-2xl border border-black/5 bg-white p-6 transition-colors hover:bg-black/[0.02]"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/75">
                    NEXT DOCUMENT
                  </p>
                  <p className="mt-1 font-heading text-lg font-medium text-[#0E3B2E]">
                    HIPAA Compliance
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
