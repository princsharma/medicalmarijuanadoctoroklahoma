import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { FaqHero } from "@/components/sections/faq/faq-hero";
import { FaqList } from "@/components/sections/faq/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { faqPageSchema } from "@/lib/faq-schema";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.faq);

export default function FaqPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={faqPageSchema()} />
      <SiteHeader />
      <PageBreadcrumb
        page="FAQ"
        currentPath={pages.faq.path}
        includeSchema={false}
      />
      <main id="main-content">
        <FaqHero />
        <FaqList />
      </main>
      <SiteFooter />
    </div>
  );
}
