/**
 * Contact Us page JSON-LD.
 * Host verified: www → https://medicalmarijuanadoctoroklahoma.com/ (307).
 */
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "MedicalBusiness"],
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        name: "Medical Marijuana Doctor Oklahoma",
        url: "https://medicalmarijuanadoctoroklahoma.com/",
        logo: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/logo.png",
        },
        image: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/logo.png",
        },
        description:
          "Medical Marijuana Doctor Oklahoma is a telehealth platform connecting Oklahoma patients with licensed physicians for OMMA-compliant medical marijuana evaluations via secure, HIPAA-compliant video consultations.",
        telephone: "+1-405-445-1637",
        email: "contact@medicalmarijuanadoctoroklahoma.com",
        address: {
          "@type": "PostalAddress",
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#address",
          streetAddress: "1036 W I-240 Service Road",
          addressLocality: "Oklahoma City",
          addressRegion: "OK",
          postalCode: "73139",
          addressCountry: "US",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            "@id": "https://medicalmarijuanadoctoroklahoma.com/#contactpoint",
            telephone: "+1-405-445-1637",
            email: "contact@medicalmarijuanadoctoroklahoma.com",
            contactType: "customer support",
            areaServed: "US-OK",
            availableLanguage: ["English"],
          },
        ],
        areaServed: {
          "@type": "State",
          name: "Oklahoma",
        },
        sameAs: ["https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7"],
      },
      {
        "@type": "ContactPage",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/contact-us/#webpage",
        url: "https://medicalmarijuanadoctoroklahoma.com/contact-us/",
        name: "Contact Medical Marijuana Doctor Oklahoma",
        description:
          "Contact Medical Marijuana Doctor Oklahoma for help with appointments, medical marijuana evaluations, OMMA certification, account assistance, or general questions.",
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
        about: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        mainEntity: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        publisher: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        primaryImageOfPage: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/logo.png",
        },
        breadcrumb: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/contact-us/#breadcrumb",
        },
        dateModified: "2026-08-11",
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/contact-us/#breadcrumb",
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
            name: "Contact Us",
            item: "https://medicalmarijuanadoctoroklahoma.com/contact-us/",
          },
        ],
      },
    ],
  };
}
