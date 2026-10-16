import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { DoctorsHero } from "@/components/sections/doctors/doctors-hero";
import { DoctorsTeam } from "@/components/sections/doctors/doctors-team";
import { DoctorsWhy } from "@/components/sections/doctors/doctors-why";
import { DoctorsProcess } from "@/components/sections/doctors/doctors-process";
import { DoctorsFaq } from "@/components/sections/doctors/doctors-faq";
import { DoctorsSchedule } from "@/components/sections/doctors/doctors-schedule";
import { JsonLd } from "@/components/seo/json-ld";
import { doctorsListingGraphSchema } from "@/lib/doctors-listing-schema";
import { buildMetadata, pages } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.doctors);

export default function DoctorsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={doctorsListingGraphSchema()} />
      <SiteHeader />
      <PageBreadcrumb
        page="Our Doctors"
        currentPath={pages.doctors.path}
        includeJsonLd={false}
      />
      <main id="main-content">
        <DoctorsHero />
        <DoctorsTeam />
        <DoctorsWhy />
        <DoctorsProcess />
        <DoctorsFaq />
        <DoctorsSchedule />
      </main>
      <SiteFooter />
    </div>
  );
}
