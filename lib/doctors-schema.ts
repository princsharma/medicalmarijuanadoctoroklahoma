/**
 * Our Doctors listing page JSON-LD.
 * Host verified: www → https://medicalmarijuanadoctoroklahoma.com/ (307).
 */
export function doctorsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/doctors/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://medicalmarijuanadoctoroklahoma.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Our Doctors",
            item: "https://medicalmarijuanadoctoroklahoma.com/doctors/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/doctors/#webpage",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/",
        name: "Meet Our Licensed Medical Marijuana Doctors Team",
        description:
          "State-licensed MMJ doctors specialized in medical cannabis evaluations and patient care for Oklahoma patients.",
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
        breadcrumb: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/doctors/#breadcrumb",
        },
        about: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        mainEntity: [
          {
            "@id":
              "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/#physician",
          },
          {
            "@id":
              "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/#physician",
          },
          {
            "@id":
              "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/#physician",
          },
          {
            "@id":
              "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/#physician",
          },
          {
            "@id":
              "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/#physician",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "Physician",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/#physician",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/",
        name: "Cheryl Bugailiskis, MD",
        honorificSuffix: "MD",
        medicalSpecialty: "Pediatric",
        description:
          "Board-certified pediatrician providing compliant medical cannabis evaluations for qualifying Oklahoma patients.",
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        affiliation: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        areaServed: { "@type": "State", name: "Oklahoma" },
      },
      {
        "@type": "Physician",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/#physician",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/",
        name: "Joel Durinka, MD",
        honorificSuffix: "MD",
        medicalSpecialty: "PrimaryCare",
        description:
          "Family medicine physician conducting a detailed evaluation of your medical history and qualifying conditions.",
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        affiliation: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        areaServed: { "@type": "State", name: "Oklahoma" },
      },
      {
        "@type": "Physician",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/#physician",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/",
        name: "Johnathan Miller, MD",
        honorificSuffix: "MD",
        medicalSpecialty: "PrimaryCare",
        description:
          "General practice physician using a holistic, patient-focused approach to every Oklahoma medical marijuana evaluation.",
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        affiliation: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        areaServed: { "@type": "State", name: "Oklahoma" },
      },
      {
        "@type": "Physician",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/#physician",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/",
        name: "Kevin Kargman, DO",
        honorificSuffix: "DO",
        medicalSpecialty: "Pediatric",
        description:
          "Certified pediatrician providing thorough, regulation-compliant medical marijuana evaluations.",
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        affiliation: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        areaServed: { "@type": "State", name: "Oklahoma" },
      },
      {
        "@type": "Physician",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/#physician",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/",
        name: "Lewis Jassey, DO",
        honorificSuffix: "DO",
        medicalSpecialty: "Pediatric",
        description:
          "Board-certified pediatrician offering careful, experienced medical marijuana evaluations for Oklahoma patients.",
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        affiliation: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        areaServed: { "@type": "State", name: "Oklahoma" },
      },
    ],
  };
}
