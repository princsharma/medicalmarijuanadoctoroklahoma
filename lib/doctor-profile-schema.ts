import type { Doctor } from "@/lib/doctors";

const SITE = "https://medicalmarijuanadoctoroklahoma.com";

function medicalSpecialty(category: string) {
  if (category === "Pediatrics") return "Pediatric";
  return "PrimaryCare";
}

/**
 * Individual doctor profile JSON-LD (@graph).
 * Matches the Cheryl Bugailiskis schema shape for all doctor pages.
 */
export function doctorProfileSchema(doctor: Doctor) {
  const profileUrl = `${SITE}/doctors/${doctor.slug}/`;
  const physicianId = `${profileUrl}#physician`;
  const webpageId = `${profileUrl}#webpage`;
  const breadcrumbId = `${profileUrl}#breadcrumb`;
  const imageUrl = `${SITE}${doctor.image.startsWith("/") ? "" : "/"}${doctor.image}`;

  const alumniOf =
    doctor.educationHistory?.map((item) => ({
      "@type": "EducationalOrganization",
      name: item.institution,
    })) ?? [];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Doctors",
          item: `${SITE}/doctors/`,
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
      "@type": "ProfilePage",
      "@id": webpageId,
      url: profileUrl,
      name: `Dr. ${doctor.name}, ${doctor.credentials} | MMJ Doctor OK`,
      description: doctor.bio,
      isPartOf: {
        "@id": `${SITE}/#website`,
      },
      breadcrumb: {
        "@id": breadcrumbId,
      },
      mainEntity: {
        "@id": physicianId,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Physician",
      "@id": physicianId,
      name: `${doctor.name}, ${doctor.credentials}`,
      url: profileUrl,
      image: imageUrl,
      honorificSuffix: doctor.credentials,
      medicalSpecialty: medicalSpecialty(doctor.category),
      description: doctor.bio,
      ...(doctor.npi
        ? {
            identifier: {
              "@type": "PropertyValue",
              propertyID: "NPI",
              value: doctor.npi,
            },
          }
        : {}),
      ...(alumniOf.length > 0 ? { alumniOf } : {}),
      worksFor: {
        "@id": `${SITE}/#organization`,
      },
      affiliation: {
        "@id": `${SITE}/#organization`,
      },
      areaServed: {
        "@type": "State",
        name: "Oklahoma",
      },
    },
  ];

  if (doctor.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${profileUrl}#faq`,
      mainEntity: doctor.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
