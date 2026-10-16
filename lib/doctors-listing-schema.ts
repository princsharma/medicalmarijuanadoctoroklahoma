import { doctors, type Doctor } from "@/lib/doctors";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  pages,
  withTrailingSlash,
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PAGE_URL = absoluteUrl(pages.doctors.path);
const WEBPAGE_ID = `${PAGE_URL}#webpage`;
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;

function physicianId(slug: string) {
  return `${absoluteUrl(withTrailingSlash(`/doctors/${slug}`))}#physician`;
}

function medicalSpecialty(category: string) {
  return category === "Pediatrics" ? "Pediatric" : "PrimaryCare";
}

export function doctorPhysicianNode(doctor: Doctor) {
  const profileUrl = absoluteUrl(withTrailingSlash(`/doctors/${doctor.slug}`));

  return {
    "@type": "Physician",
    "@id": physicianId(doctor.slug),
    url: profileUrl,
    name: `${doctor.name}, ${doctor.credentials}`,
    honorificSuffix: doctor.credentials,
    medicalSpecialty: medicalSpecialty(doctor.category),
    description: doctor.bio,
    worksFor: { "@id": ORG_ID },
    affiliation: { "@id": ORG_ID },
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
    },
  };
}

export function doctorProfileGraphSchema(doctor: Doctor) {
  const profilePath = withTrailingSlash(`/doctors/${doctor.slug}`);
  const profileUrl = absoluteUrl(profilePath);
  const webpageId = `${profileUrl}#webpage`;
  const breadcrumbId = `${profileUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Doctors",
            item: PAGE_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: doctor.name,
            item: profileUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: profileUrl,
        name: `Dr. ${doctor.name}, ${doctor.credentials} | MMJ Doctor OK`,
        description: doctor.bio,
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": breadcrumbId },
        about: { "@id": ORG_ID },
        mainEntity: { "@id": physicianId(doctor.slug) },
        inLanguage: "en-US",
      },
      doctorPhysicianNode(doctor),
    ],
  };
}

export function doctorsListingGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": BREADCRUMB_ID,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Doctors",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: PAGE_URL,
        name: "Meet Our Licensed Medical Marijuana Doctors Team",
        description:
          "State-licensed MMJ doctors specialized in medical cannabis evaluations and patient care for Oklahoma patients.",
        isPartOf: { "@id": WEBSITE_ID },
        breadcrumb: { "@id": BREADCRUMB_ID },
        about: { "@id": ORG_ID },
        mainEntity: doctors.map((doctor) => ({
          "@id": physicianId(doctor.slug),
        })),
        inLanguage: "en-US",
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
      ...doctors.map((doctor) => doctorPhysicianNode(doctor)),
    ],
  };
}
