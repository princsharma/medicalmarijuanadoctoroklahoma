import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactDetails } from "@/components/sections/contact/contact-details";
import { ContactAfterReachOut } from "@/components/sections/contact/contact-after-reach-out";
import { ContactPrivacyNote } from "@/components/sections/contact/contact-privacy-note";
import { ContactFaq } from "@/components/sections/contact/contact-faq";
import { JsonLd } from "@/components/seo/json-ld";
import { contactPageSchema } from "@/lib/contact-schema";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.contact);

export default function ContactUsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={contactPageSchema()} />
      <SiteHeader />
      <PageBreadcrumb
        page="Contact Us"
        currentPath={pages.contact.path}
        includeSchema={false}
      />
      <main id="main-content">
        <ContactHero />
        <ContactDetails />
        <ContactAfterReachOut />
        <ContactPrivacyNote />
        <ContactFaq />
      </main>
      <SiteFooter />
    </div>
  );
}
