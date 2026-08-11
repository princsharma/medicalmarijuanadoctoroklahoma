import {
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  absoluteUrl,
  pages,
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const LOGO_ID = `${SITE_URL}/#logo`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;
const SERVICE_ID = `${SITE_URL}/#service`;
const BREADCRUMB_ID = `${SITE_URL}/#breadcrumb`;
const HOWTO_ID = `${SITE_URL}/#howto`;
const FAQ_ID = `${SITE_URL}/#faq`;
const CONDITIONS_ID = `${SITE_URL}/#conditions`;

const PHYSICIANS = [
  {
    slug: "cheryl-bugailiskis",
    name: "Cheryl Bugailiskis, MD",
    honorificSuffix: "MD",
    givenName: "Cheryl",
    familyName: "Bugailiskis",
    description:
      "Board-certified pediatrician with 15 years of clinical experience, providing OMMA-compliant medical cannabis evaluations for qualifying Oklahoma patients.",
    medicalSpecialty: ["Pediatric"],
    knowsAbout: ["Cannabis Medicine"],
    credentials: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Board Certification in Pediatrics",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Oklahoma Medical License",
      },
    ],
  },
  {
    slug: "joel-durinka",
    name: "Joel Durinka, MD",
    honorificSuffix: "MD",
    givenName: "Joel",
    familyName: "Durinka",
    description:
      "Family medicine physician with 16 years of experience, conducting detailed evaluations of medical history and qualifying conditions for Oklahoma medical marijuana patients.",
    medicalSpecialty: ["PrimaryCare"],
    knowsAbout: ["Family Medicine", "Cannabis Medicine"],
    credentials: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Oklahoma Medical License",
    },
  },
  {
    slug: "johnathan-miller",
    name: "Johnathan Miller, MD",
    honorificSuffix: "MD",
    givenName: "Johnathan",
    familyName: "Miller",
    description:
      "General practice physician with 8 years of experience, using a holistic, patient-focused approach to Oklahoma medical marijuana evaluations.",
    medicalSpecialty: ["PrimaryCare"],
    knowsAbout: ["General Medical Practice", "Cannabis Medicine"],
    credentials: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Oklahoma Medical License",
    },
  },
  {
    slug: "kevin-kargman",
    name: "Kevin Kargman, DO",
    honorificSuffix: "DO",
    givenName: "Kevin",
    familyName: "Kargman",
    description:
      "Certified pediatrician with 19 years of experience, providing thorough, regulation-compliant medical marijuana evaluations for Oklahoma patients.",
    medicalSpecialty: ["Pediatric"],
    knowsAbout: ["Cannabis Medicine"],
    credentials: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Oklahoma Medical License",
    },
  },
  {
    slug: "lewis-jassey",
    name: "Lewis Jassey, DO",
    honorificSuffix: "DO",
    givenName: "Lewis",
    familyName: "Jassey",
    description:
      "Board-certified pediatrician with 30+ years of experience, offering careful, experienced medical marijuana evaluations for Oklahoma patients.",
    medicalSpecialty: ["Pediatric"],
    knowsAbout: ["Cannabis Medicine"],
    credentials: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Board Certification in Pediatrics",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Oklahoma Medical License",
      },
    ],
  },
] as const;

const CONDITIONS = [
  "Anorexia",
  "Anxiety",
  "Arthritis",
  "Cancer",
  "Chronic Pain",
  "Crohn's Disease",
  "Depression",
  "Epilepsy",
  "Fibromyalgia",
  "Glaucoma",
  "Insomnia",
  "Migraines",
  "Multiple Sclerosis",
  "Muscle Spasms",
  "Nausea",
  "PTSD",
] as const;

function physicianId(slug: string) {
  return absoluteUrl(`/doctors/${slug}/#physician`);
}

function physicianNodes() {
  return PHYSICIANS.map((doctor) => {
    const url = absoluteUrl(`/doctors/${doctor.slug}/`);
    return {
      "@context": "https://schema.org",
      "@type": ["Physician", "Person"],
      "@id": physicianId(doctor.slug),
      name: doctor.name,
      honorificPrefix: "Dr.",
      honorificSuffix: doctor.honorificSuffix,
      givenName: doctor.givenName,
      familyName: doctor.familyName,
      jobTitle: "Medical Cannabis Evaluating Physician (Oklahoma)",
      description: doctor.description,
      medicalSpecialty: [...doctor.medicalSpecialty],
      knowsAbout: [...doctor.knowsAbout],
      url,
      telephone: "+1-405-445-1637",
      memberOf: { "@id": ORG_ID },
      worksFor: { "@id": ORG_ID },
      hasCredential: doctor.credentials,
    };
  });
}

/**
 * Homepage schemas as separate JSON-LD blocks so SEO tools detect each type
 * (MedicalWebPage, Service, HowTo, etc.) instead of only ProfilePage.
 * ProfilePage belongs on doctor profile URLs, not the homepage.
 */
export function homePageSchemas(): Record<string, unknown>[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["MedicalOrganization", "MedicalBusiness", "LocalBusiness"],
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "MMJ Doctor Oklahoma",
      url: `${SITE_URL}/`,
      logo: { "@id": LOGO_ID },
      image: { "@id": LOGO_ID },
      description:
        "Medical Marijuana Doctor Oklahoma is a telehealth platform connecting Oklahoma patients with licensed physicians for OMMA-compliant medical marijuana evaluations via secure, HIPAA-compliant video consultations.",
      knowsAbout: ["Cannabis Medicine", "Telemedicine"],
      areaServed: {
        "@type": "State",
        name: "Oklahoma",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1036 W I-240 Service Road",
        addressLocality: "Oklahoma City",
        addressRegion: "OK",
        postalCode: "73139",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.3907522,
        longitude: -97.5349792,
      },
      telephone: "+1-405-445-1637",
      email: "contact@medicalmarijuanadoctoroklahoma.com",
      priceRange: "$$",
      hasMap: SOCIAL_LINKS.googleMaps,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-405-445-1637",
          contactType: "customer service",
          areaServed: "US-OK",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          email: "contact@medicalmarijuanadoctoroklahoma.com",
          contactType: "customer support",
          areaServed: "US-OK",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.linkedin,
        SOCIAL_LINKS.googleMaps,
      ],
      publishingPrinciples: absoluteUrl(pages.editorial.path),
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: absoluteUrl("/logo.png"),
      contentUrl: absoluteUrl("/logo.png"),
      caption: "Medical Marijuana Doctor Oklahoma logo",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "@id": WEBPAGE_ID,
      url: `${SITE_URL}/`,
      name: pages.home.title,
      description: pages.home.description,
      inLanguage: "en-US",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": SERVICE_ID },
      audience: {
        "@type": "MedicalAudience",
        audienceType: "Patient",
        geographicArea: {
          "@type": "State",
          name: "Oklahoma",
        },
      },
      breadcrumb: { "@id": BREADCRUMB_ID },
      mainEntity: { "@id": SERVICE_ID },
      datePublished: pages.home.datePublished,
      dateModified: pages.home.dateModified,
    },
    {
      "@context": "https://schema.org",
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
          item: absoluteUrl(pages.doctors.path),
        },
      ],
    },
    ...physicianNodes(),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "Oklahoma Medical Marijuana Card Evaluation",
      description:
        "Online medical marijuana evaluation by an Oklahoma-licensed physician via HIPAA-compliant telehealth, followed by OMMA registration using the physician's recommendation letter.",
      serviceType: "Medical Marijuana Evaluation",
      category: "Telemedicine",
      provider: [
        { "@id": ORG_ID },
        ...PHYSICIANS.map((doctor) => ({ "@id": physicianId(doctor.slug) })),
      ],
      areaServed: {
        "@type": "State",
        name: "Oklahoma",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        availableLanguage: ["English"],
      },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
      offers: {
        "@type": "Offer",
        name: "OMMA Medical Marijuana Card Evaluation",
        description:
          "One-time evaluation fee with full refund guarantee if not approved.",
        price: "149.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/`,
        seller: { "@id": ORG_ID },
        eligibleRegion: {
          "@type": "State",
          name: "Oklahoma",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": HOWTO_ID,
      name: "How to Get an Oklahoma Medical Marijuana Card Online",
      description: "Get your Oklahoma Medical Marijuana Card in 4 simple steps.",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: "149",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Schedule an Appointment",
          text: "Book a consultation with a licensed Oklahoma MMJ doctor online.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Connect with Licensed Oklahoma Doctors",
          text: "Meet with our certified physicians via secure video call.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Registration with OMMA",
          text: "Use the recommendation letter for OMMA registration.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Receive Your Medical Marijuana Card",
          text: "Get your digital card instantly and physical card by mail.",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": FAQ_ID,
      mainEntity: [
        {
          "@type": "Question",
          name: "Are the doctors licensed to recommend medical marijuana?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All our doctors are state-licensed and registered to legally evaluate and recommend medical marijuana for qualifying Oklahoma patients under OMMA.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": CONDITIONS_ID,
      name: "Qualifying Medical Conditions for Oklahoma Medical Marijuana Card",
      description:
        "Oklahoma allows physicians to recommend medical marijuana for any condition they believe could benefit from treatment. These are commonly evaluated conditions.",
      numberOfItems: CONDITIONS.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: CONDITIONS.map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "MedicalCondition",
          name,
        },
      })),
    },
  ];
}

/** @deprecated Prefer homePageSchemas() for separate script tags. */
export function homePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": homePageSchemas().map(({ ["@context"]: _context, ...node }) => node),
  };
}
