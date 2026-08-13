/**
 * About Us page JSON-LD.
 * Host verified: www → https://medicalmarijuanadoctoroklahoma.com/ (307).
 */
export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        name: "Medical Marijuana Doctor Oklahoma",
        url: "https://medicalmarijuanadoctoroklahoma.com/",
        description:
          "Medical Marijuana Doctor Oklahoma connects Oklahoma patients with state-licensed physicians for medical marijuana evaluations, entirely by telehealth.",
        telephone: "+1-405-445-1637",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1036 W I-240 Service Road",
          addressLocality: "Oklahoma City",
          addressRegion: "OK",
          postalCode: "73139",
          addressCountry: "US",
        },
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
        areaServed: {
          "@type": "State",
          name: "Oklahoma",
        },
        medicalSpecialty: "Other",
        sameAs: [
          "https://www.facebook.com/mmjdoctoroklahoma/",
          "https://www.instagram.com/mmjdoctorsoklahoma/",
          "https://www.linkedin.com/company/107855441",
          "https://maps.app.goo.gl/93bMfCu8LaZ78Eb8A",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/about-us/#breadcrumb",
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
            name: "About Us",
            item: "https://medicalmarijuanadoctoroklahoma.com/about-us/",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/about-us/#webpage",
        url: "https://medicalmarijuanadoctoroklahoma.com/about-us/",
        name: "About Us | Medical Marijuana Doctor Oklahoma",
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
        about: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        breadcrumb: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/about-us/#breadcrumb",
        },
        inLanguage: "en-US",
      },
    ],
  };
}
