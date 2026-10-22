import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutValues } from "@/components/sections/about/about-values";
import { AboutHowItWorks } from "@/components/sections/about/about-how-it-works";
import { AboutAppointment } from "@/components/sections/about/about-appointment";
import { AboutInfo } from "@/components/sections/about/about-info";
import { AboutCta } from "@/components/sections/about/about-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { aboutPageSchema } from "@/lib/about-schema";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.about);

export default function AboutUsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={aboutPageSchema()} />
      <SiteHeader />
      <PageBreadcrumb
        page="About Us"
        currentPath={pages.about.path}
        includeSchema={false}
      />
      <main id="main-content">
        <AboutHero />
        <AboutValues />
        <AboutHowItWorks />
        <AboutAppointment />
        <AboutInfo />
        <AboutCta />
      </main>
      <SiteFooter />
    </div>
  );
}
