import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { PageDates } from "@/components/seo/page-dates";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.disclaimer);

type Section = {
  heading: string;
  body: string[];
};

const sections: Section[] = [
  {
    heading: "Informational Purpose Only",
    body: [
      "Medical Marijuana Doctor Oklahoma provides content for educational and informational purposes only. It is not intended to be used as a substitute for professional medical advice or healthcare services. The information on this website is designed to help users understand medical marijuana and wellness options, but should always be reviewed with a licensed healthcare provider before making any decisions.",
    ],
  },
  {
    heading: "Not a Substitute for Medical Care",
    body: [
      "Medical Marijuana Doctor Oklahoma is not a healthcare provider. The platform is designed to connect patients with licensed healthcare professionals for medical marijuana evaluations. Any decisions regarding medical treatment, including medication or therapy, should be made in consultation with a licensed healthcare professional. Medical marijuana recommendations are not prescriptions and should not be viewed as a substitute for conventional medical care.",
    ],
  },
  {
    heading: "No Diagnosis or Treatment",
    body: [
      "The information provided on this platform does not diagnose, treat, cure, or prevent any medical conditions. Medical Marijuana Doctor Oklahoma facilitates medical marijuana evaluations through licensed professionals, but it does not provide direct medical treatment or advice. Always seek the guidance of a qualified healthcare provider before making any medical decisions.",
    ],
  },
  {
    heading: "User Responsibility",
    body: [
      "Your health choices are your responsibility. Any action taken based on information provided by this platform is done at your own risk. Medical Marijuana Doctor Oklahoma is not responsible for any outcomes resulting from decisions made without the guidance of a licensed healthcare provider. It is always essential to verify and discuss your healthcare decisions with a licensed physician or healthcare professional.",
    ],
  },
  {
    heading: "Testimonials and User Experiences",
    body: [
      "Any testimonials or user-generated content on this site represent individual experiences. These testimonials should not be considered as medical advice and may not reflect your own experience or outcome. Outcomes may vary, and there is no guarantee that you will experience similar results. Always consult a healthcare provider before making any medical decisions.",
    ],
  },
  {
    heading: "No Endorsement of Products or Services",
    body: [
      "Medical Marijuana Doctor Oklahoma does not endorse, guarantee, or make any claims about the effectiveness or safety of any products, services, or therapies mentioned on the platform. The inclusion of a product, service, or therapy on this site does not imply that we recommend it. Users should independently verify and consult their healthcare provider before using any such products or services.",
    ],
  },
  {
    heading: "Platform's Role",
    body: [
      "Medical Marijuana Doctor Oklahoma is a technology platform that connects patients with licensed healthcare professionals for medical marijuana evaluations. We do not provide direct medical care, and our services are not intended to replace the doctor-patient relationship. We connect patients to licensed providers who make medical recommendations, but we do not make those recommendations ourselves.",
    ],
  },
  {
    heading: "Emergencies",
    body: [
      "This platform is not designed for emergency medical situations. If you are experiencing a medical emergency, please contact 911 or your local emergency services immediately. Do not delay seeking professional medical attention while using this site.",
    ],
  },
  {
    heading: "Third-Party Websites",
    body: [
      "Our website may include links to third-party websites for convenience. We do not control or verify the content, security, or privacy practices of these third-party websites. Use of these sites is at your own discretion. Please review the privacy practices and terms of use for any third-party websites you visit.",
    ],
  },
  {
    heading: "Special Considerations",
    body: [
      "If you are under 18, have chronic or serious health conditions, or are pregnant or breastfeeding, it is essential to consult with a licensed healthcare provider before making any decisions based on the information available on this platform. Always seek personalized advice from a healthcare professional.",
    ],
  },
  {
    heading: "Emerging and Alternative Therapies",
    body: [
      "Some content on this site may discuss alternative, experimental, or emerging treatments that are not guaranteed to be safe or effective. It is important to consult with a trusted medical professional before pursuing any alternative therapies discussed on this platform.",
    ],
  },
  {
    heading: "Modifications to the Disclaimer",
    body: [
      "Medical Marijuana Doctor Oklahoma reserves the right to update, modify, or remove any content or information provided on this platform at any time, without prior notice. We encourage users to review this page regularly to stay informed of any changes. All changes to the Disclaimer will be posted on this page.",
    ],
  },
];

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.disclaimer)} />
      <SiteHeader />
      <PageBreadcrumb
        page="Disclaimer"
        currentPath={pages.disclaimer.path}
        items={[{ label: "Legal Policies", href: pages.legal.path }]}
      />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                IMPORTANT NOTICE
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Disclaimer & Policies
              </h1>
              <PageDates page={pages.disclaimer} />
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                At Medical Marijuana Doctor Oklahoma, we are committed to providing educational
                resources and connecting patients with licensed healthcare professionals for medical
                marijuana evaluations. However, please be aware that the information on this website
                is subject to important disclaimers outlined below.
              </p>
              <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#0E3B2E]/85">
                By using this platform, you agree to the following terms:
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
                      {section.body.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
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
