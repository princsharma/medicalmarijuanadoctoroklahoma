/**
 * Oklahoma homepage JSON-LD.
 * Host verified: www → https://medicalmarijuanadoctoroklahoma.com/ (307).
 * Logo verified: https://medicalmarijuanadoctoroklahoma.com/logo.png (200).
 */
export function homePageSchema() {
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
        telephone: "+1-405-445-1637",
        email: "contact@medicalmarijuanadoctoroklahoma.com",
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
        sameAs: ["https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7"],
        publishingPrinciples:
          "https://medicalmarijuanadoctoroklahoma.com/editorial-policy/",
      },
      {
        "@type": "ImageObject",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/logo.png",
        url: "https://medicalmarijuanadoctoroklahoma.com/logo.png",
        contentUrl: "https://medicalmarijuanadoctoroklahoma.com/logo.png",
        caption: "Medical Marijuana Doctor Oklahoma logo",
      },
      {
        "@type": "WebSite",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        url: "https://medicalmarijuanadoctoroklahoma.com/",
        name: "Medical Marijuana Doctor Oklahoma",
        publisher: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": ["Physician", "Person"],
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/#physician",
        name: "Cheryl Bugailiskis, MD",
        honorificPrefix: "Dr.",
        honorificSuffix: "MD",
        givenName: "Cheryl",
        familyName: "Bugailiskis",
        jobTitle: "Medical Cannabis Evaluating Physician (Oklahoma)",
        description:
          "Board-certified pediatrician with 15 years of clinical experience, providing OMMA-compliant medical cannabis evaluations for qualifying Oklahoma patients.",
        medicalSpecialty: ["Pediatric"],
        knowsAbout: ["Cannabis Medicine"],
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/",
        telephone: "+1-405-445-1637",
        memberOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        hasCredential: [
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
        "@type": "ProfilePage",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/#profilepage",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/",
        name: "Dr. Cheryl Bugailiskis, MD — Oklahoma Medical Marijuana Doctor",
        mainEntity: {
          "@id":
            "https://medicalmarijuanadoctoroklahoma.com/doctors/cheryl-bugailiskis/#physician",
        },
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
      },
      {
        "@type": ["Physician", "Person"],
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/#physician",
        name: "Joel Durinka, MD",
        honorificPrefix: "Dr.",
        honorificSuffix: "MD",
        givenName: "Joel",
        familyName: "Durinka",
        jobTitle: "Medical Cannabis Evaluating Physician (Oklahoma)",
        description:
          "Family medicine physician with 16 years of experience, conducting detailed evaluations of medical history and qualifying conditions for Oklahoma medical marijuana patients.",
        medicalSpecialty: ["PrimaryCare"],
        knowsAbout: ["Family Medicine", "Cannabis Medicine"],
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/",
        telephone: "+1-405-445-1637",
        memberOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Oklahoma Medical License",
        },
      },
      {
        "@type": "ProfilePage",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/#profilepage",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/",
        name: "Dr. Joel Durinka, MD — Oklahoma Medical Marijuana Doctor",
        mainEntity: {
          "@id":
            "https://medicalmarijuanadoctoroklahoma.com/doctors/joel-durinka/#physician",
        },
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
      },
      {
        "@type": ["Physician", "Person"],
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/#physician",
        name: "Johnathan Miller, MD",
        honorificPrefix: "Dr.",
        honorificSuffix: "MD",
        givenName: "Johnathan",
        familyName: "Miller",
        jobTitle: "Medical Cannabis Evaluating Physician (Oklahoma)",
        description:
          "General practice physician with 8 years of experience, using a holistic, patient-focused approach to Oklahoma medical marijuana evaluations.",
        medicalSpecialty: ["PrimaryCare"],
        knowsAbout: ["General Medical Practice", "Cannabis Medicine"],
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/",
        telephone: "+1-405-445-1637",
        memberOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Oklahoma Medical License",
        },
      },
      {
        "@type": "ProfilePage",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/#profilepage",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/",
        name: "Dr. Johnathan Miller, MD — Oklahoma Medical Marijuana Doctor",
        mainEntity: {
          "@id":
            "https://medicalmarijuanadoctoroklahoma.com/doctors/johnathan-miller/#physician",
        },
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
      },
      {
        "@type": ["Physician", "Person"],
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/#physician",
        name: "Kevin Kargman, DO",
        honorificPrefix: "Dr.",
        honorificSuffix: "DO",
        givenName: "Kevin",
        familyName: "Kargman",
        jobTitle: "Medical Cannabis Evaluating Physician (Oklahoma)",
        description:
          "Certified pediatrician with 19 years of experience, providing thorough, regulation-compliant medical marijuana evaluations for Oklahoma patients.",
        medicalSpecialty: ["Pediatric"],
        knowsAbout: ["Cannabis Medicine"],
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/",
        telephone: "+1-405-445-1637",
        memberOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Oklahoma Medical License",
        },
      },
      {
        "@type": "ProfilePage",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/#profilepage",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/",
        name: "Dr. Kevin Kargman, DO — Oklahoma Medical Marijuana Doctor",
        mainEntity: {
          "@id":
            "https://medicalmarijuanadoctoroklahoma.com/doctors/kevin-kargman/#physician",
        },
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
      },
      {
        "@type": ["Physician", "Person"],
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/#physician",
        name: "Lewis Jassey, DO",
        honorificPrefix: "Dr.",
        honorificSuffix: "DO",
        givenName: "Lewis",
        familyName: "Jassey",
        jobTitle: "Medical Cannabis Evaluating Physician (Oklahoma)",
        description:
          "Board-certified pediatrician with 30+ years of experience, offering careful, experienced medical marijuana evaluations for Oklahoma patients.",
        medicalSpecialty: ["Pediatric"],
        knowsAbout: ["Cannabis Medicine"],
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/",
        telephone: "+1-405-445-1637",
        memberOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        worksFor: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        hasCredential: [
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
        "@type": "ProfilePage",
        "@id":
          "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/#profilepage",
        url: "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/",
        name: "Dr. Lewis Jassey, DO — Oklahoma Medical Marijuana Doctor",
        mainEntity: {
          "@id":
            "https://medicalmarijuanadoctoroklahoma.com/doctors/lewis-jassey/#physician",
        },
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#webpage",
        url: "https://medicalmarijuanadoctoroklahoma.com/",
        name: "Medical Marijuana Doctor Oklahoma | MMJ Card",
        description:
          "Get approved by an Oklahoma medical marijuana doctor and receive your digital card in minutes. Easy online application, instant approval, same-day access to legal cannabis in Oklahoma.",
        inLanguage: "en-US",
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
        about: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#service",
        },
        audience: {
          "@type": "MedicalAudience",
          audienceType: "Patient",
          geographicArea: {
            "@type": "State",
            name: "Oklahoma",
          },
        },
        breadcrumb: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#breadcrumb",
        },
        mainEntity: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#service",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#breadcrumb",
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
        "@type": "Service",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#service",
        name: "Oklahoma Medical Marijuana Card Evaluation",
        description:
          "Online medical marijuana evaluation by an Oklahoma-licensed physician via HIPAA-compliant telehealth, followed by OMMA registration using the physician's recommendation letter.",
        serviceType: "Medical Marijuana Evaluation",
        category: "Telemedicine",
        provider: [
          {
            "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
          },
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
          url: "https://medicalmarijuanadoctoroklahoma.com/",
          seller: {
            "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
          },
          eligibleRegion: {
            "@type": "State",
            name: "Oklahoma",
          },
        },
      },
      {
        "@type": "HowTo",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#howto",
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
        "@type": "FAQPage",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#faq",
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
        "@type": "ItemList",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#conditions",
        name: "Qualifying Medical Conditions for Oklahoma Medical Marijuana Card",
        description:
          "Oklahoma allows physicians to recommend medical marijuana for any condition they believe could benefit from treatment. These are commonly evaluated conditions.",
        numberOfItems: 16,
        itemListOrder: "https://schema.org/ItemListUnordered",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@type": "MedicalCondition", name: "Anorexia" },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: { "@type": "MedicalCondition", name: "Anxiety" },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: { "@type": "MedicalCondition", name: "Arthritis" },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: { "@type": "MedicalCondition", name: "Cancer" },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: { "@type": "MedicalCondition", name: "Chronic Pain" },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: { "@type": "MedicalCondition", name: "Crohn's Disease" },
          },
          {
            "@type": "ListItem",
            position: 7,
            item: { "@type": "MedicalCondition", name: "Depression" },
          },
          {
            "@type": "ListItem",
            position: 8,
            item: { "@type": "MedicalCondition", name: "Epilepsy" },
          },
          {
            "@type": "ListItem",
            position: 9,
            item: { "@type": "MedicalCondition", name: "Fibromyalgia" },
          },
          {
            "@type": "ListItem",
            position: 10,
            item: { "@type": "MedicalCondition", name: "Glaucoma" },
          },
          {
            "@type": "ListItem",
            position: 11,
            item: { "@type": "MedicalCondition", name: "Insomnia" },
          },
          {
            "@type": "ListItem",
            position: 12,
            item: { "@type": "MedicalCondition", name: "Migraines" },
          },
          {
            "@type": "ListItem",
            position: 13,
            item: { "@type": "MedicalCondition", name: "Multiple Sclerosis" },
          },
          {
            "@type": "ListItem",
            position: 14,
            item: { "@type": "MedicalCondition", name: "Muscle Spasms" },
          },
          {
            "@type": "ListItem",
            position: 15,
            item: { "@type": "MedicalCondition", name: "Nausea" },
          },
          {
            "@type": "ListItem",
            position: 16,
            item: { "@type": "MedicalCondition", name: "PTSD" },
          },
        ],
      },
    ],
  };
}
