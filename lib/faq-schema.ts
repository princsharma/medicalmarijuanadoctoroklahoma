/**
 * FAQ page JSON-LD.
 * Host verified: www → https://medicalmarijuanadoctoroklahoma.com/ (307).
 */
export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "MedicalBusiness"],
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        name: "Medical Marijuana Doctor Oklahoma",
        alternateName: "MMJ Doctor Oklahoma",
        url: "https://medicalmarijuanadoctoroklahoma.com/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#logo",
          url: "https://medicalmarijuanadoctoroklahoma.com/logo.png",
          contentUrl: "https://medicalmarijuanadoctoroklahoma.com/logo.png",
          caption: "Medical Marijuana Doctor Oklahoma",
        },
        image: { "@id": "https://medicalmarijuanadoctoroklahoma.com/#logo" },
        telephone: "+1-405-445-1637",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1036 W I-240 Service Road",
          addressLocality: "Oklahoma City",
          addressRegion: "OK",
          postalCode: "73139",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "State",
          name: "Oklahoma",
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
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-405-445-1637",
          contactType: "customer service",
          areaServed: "US-OK",
          availableLanguage: ["English"],
        },
        sameAs: [
          "https://www.facebook.com/mmjdoctoroklahoma/",
          "https://www.instagram.com/mmjdoctorsoklahoma/",
          "https://www.linkedin.com/company/107855441",
          "https://maps.app.goo.gl/93bMfCu8LaZ78Eb8A",
        ],
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
        "@type": ["WebPage", "FAQPage"],
        "@id": "https://medicalmarijuanadoctoroklahoma.com/faq/#webpage",
        url: "https://medicalmarijuanadoctoroklahoma.com/faq/",
        name: "FAQ | Medical Marijuana Doctor Oklahoma",
        description:
          "Answers to common questions asked by Oklahoma patients about getting and maintaining a Medical Marijuana Card.",
        isPartOf: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#website",
        },
        about: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        breadcrumb: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/faq/#breadcrumb",
        },
        inLanguage: "en-US",
        mainEntity: [
          {
            "@type": "Question",
            name: "What if I need some help for the purchasing and consumption of Medical Marijuana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you need assistance purchasing or consuming Medical Marijuana, a caregiver can help you. Caregivers must obtain a legitimate license through OMMA registration before assisting a patient.",
            },
          },
          {
            "@type": "Question",
            name: "What are the qualifying conditions to get your Medical Marijuana Card in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oklahoma does not have a specific list of qualifying conditions. Licensed physicians use their own clinical discretion to determine eligibility, though common conditions include Alzheimer's, anxiety, arthritis, cancer, chronic pain, and HIV/AIDS, among others.",
            },
          },
          {
            "@type": "Question",
            name: "Recently I got shifted to a new location in Oklahoma only. How can I update my current address with OMMA?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Log into OMMA's online patient portal, create a new application update with your current address, and review the confirmation email once it's processed.",
            },
          },
          {
            "@type": "Question",
            name: "What documents are essential to be shown to the Medical Doctors during the evaluation process in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You'll need a valid photo ID, proof of Oklahoma residency, and any relevant medical records that support your evaluation.",
            },
          },
          {
            "@type": "Question",
            name: "How much time does OMMA take to review the application and assign a Medical Marijuana Card in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Once your application is complete, OMMA typically mails your Medical Marijuana Card within 14 days.",
            },
          },
          {
            "@type": "Question",
            name: "Are there any DUI rules applicable in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Oklahoma enforces strict driving-under-the-influence regulations for Medical Marijuana patients, with real penalties for violations.",
            },
          },
          {
            "@type": "Question",
            name: "Does Oklahoma provide a temporary electronic card before they send the permanent one?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, Oklahoma does not issue temporary cards. Patients must wait the full 14-day processing window to receive their permanent Medical Marijuana Card.",
            },
          },
          {
            "@type": "Question",
            name: "What are the benefits of having a Medical Marijuana Card in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cardholders get legal access to Medical Marijuana, legal protection under state law, lower taxes on purchases, and higher potency limits than what's available to recreational users.",
            },
          },
          {
            "@type": "Question",
            name: "Does Oklahoma approve the home delivery of Medical Marijuana?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, Oklahoma currently has no provision that allows home delivery of Medical Marijuana.",
            },
          },
          {
            "@type": "Question",
            name: "Will I be on a government list if I become a Medical Marijuana patient in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, patients are recorded under the Oklahoma Law Enforcement Telecommunication System, which exists to verify and protect your legal status as a cardholder.",
            },
          },
          {
            "@type": "Question",
            name: "How to get a Medical Marijuana Card in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It's a four-step process: complete an online evaluation form and schedule your appointment, have a video consultation with a licensed doctor, register with OMMA ($50 fee), and receive your card by mail within 14 days.",
            },
          },
          {
            "@type": "Question",
            name: "My card is about to expire. Can I renew the card?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, renewal is available online through the OMMA portal. Standard Medical Marijuana Cards are valid for two years from the issue date.",
            },
          },
          {
            "@type": "Question",
            name: "When does my Medical Marijuana Card expire in Oklahoma?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard cards expire two years from the date they're issued. Short-term licenses expire 60 days from their issue date.",
            },
          },
          {
            "@type": "Question",
            name: "What does a Medical Marijuana Transportation license mean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It's a notation provided with processor, grower, or dispensary licenses that allows legal transport of Medical Marijuana with a valid copy of the license on hand.",
            },
          },
          {
            "@type": "Question",
            name: "What is a Medical Marijuana Processor license?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It authorizes a business to process Medical Marijuana for medical use. Licensed processors can sell concentrated product to licensed dispensaries or other processors for a fee.",
            },
          },
          {
            "@type": "Question",
            name: "Does Oklahoma accept out-of-state Medical Marijuana Cards?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, out-of-state cardholders can receive a temporary adult license that allows them to purchase and consume Medical Marijuana under Oklahoma's rules.",
            },
          },
          {
            "@type": "Question",
            name: "What is meant by a Medical Marijuana Dispensary license?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It's a license that enables a business to legally sell Medical Marijuana to registered OMMA patients who hold a valid Medical Marijuana Card.",
            },
          },
          {
            "@type": "Question",
            name: "I suddenly lost my Medical Marijuana Card. How can I get a replacement for that?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Apply for a replacement online through the OMMA patient portal. Replacement cards are typically processed and mailed within 14 days.",
            },
          },
          {
            "@type": "Question",
            name: "What does a Grower's license mean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It permits patients or caregivers to cultivate Medical Marijuana. Licensed growers can sell their product to licensed processors or state-licensed dispensaries.",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/#service",
        name: "Oklahoma Medical Marijuana Card Evaluation",
        serviceType: "Medical Marijuana Card Certification",
        provider: {
          "@id": "https://medicalmarijuanadoctoroklahoma.com/#organization",
        },
        areaServed: {
          "@type": "State",
          name: "Oklahoma",
        },
        audience: {
          "@type": "PatientsAudience",
          audienceType: "Oklahoma patients seeking a Medical Marijuana Card",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://medicalmarijuanadoctoroklahoma.com/faq/#breadcrumb",
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
            name: "FAQ",
            item: "https://medicalmarijuanadoctoroklahoma.com/faq/",
          },
        ],
      },
    ],
  };
}
