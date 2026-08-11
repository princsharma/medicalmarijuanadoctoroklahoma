import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { WhyChoose } from "@/components/sections/why-choose";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatIsCard } from "@/components/sections/what-is-card";
import { QualifyingConditions } from "@/components/sections/qualifying-conditions";
import { DontSeeCondition } from "@/components/sections/dont-see-condition";
import { BenefitsOfCannabis } from "@/components/sections/benefits-of-cannabis";
import { Testimonials } from "@/components/sections/testimonials";
import { JsonLd } from "@/components/seo/json-ld";
import { homePageSchemas } from "@/lib/home-schema";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.home);

export default function Home() {
  const schemas = homePageSchemas();

  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      {schemas.map((schema) => (
        <JsonLd
          key={String(schema["@id"] ?? schema["@type"])}
          data={schema}
        />
      ))}
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <WhyChoose />
        <HowItWorks />
        <WhatIsCard />
        <QualifyingConditions />
        <DontSeeCondition />
        <BenefitsOfCannabis />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
