import {
  FEDERAL_MARIJUANA_POLICY_PHRASE,
  FEDERAL_MARIJUANA_RECLASSIFICATION_URL,
  OKLAHOMA_HIGHWAY_SAFETY_MARIJUANA_URL,
  OKLAHOMA_HIGHWAY_SAFETY_OFFICE_PHRASE,
  OMMA_PATIENT_RIGHTS_URL,
  OMMA_PHRASE,
  linkMedicalMarijuanaCard,
  linkMedicalMarijuanaLegalInOklahoma,
  linkOmmaCurrentPatientRules,
  linkOmmaCurrentPermanentRules,
  linkPhrases,
  linkStateQuestion788Ballotpedia,
} from "@/lib/blog/paragraphs";

export const isMarijuanaLegalInOklahoma = {
  slug: "is-marijuana-legal-in-oklahoma",
  path: "/blog/is-marijuana-legal-in-oklahoma/",
  title: "Is Marijuana Legal in Oklahoma in 2026?",
  subtitle: "All You Need to Know",
  excerpt:
    "Medical marijuana is legal in Oklahoma in 2026, but recreational use remains illegal. Learn key rules, limits, and OMMA changes you must know.",
  category: "OMMA Guidelines",
  focusKeyword: "Is marijuana legal in Oklahoma",
  metaTitle: "Is Marijuana Legal in Oklahoma in 2026?",
  metaDescription:
    "Medical marijuana is legal in Oklahoma in 2026, but recreational use remains illegal. Learn key rules, limits, and OMMA changes you must know.",
  image: "/media/is-marijuana-legal-in-oklahoma.webp",
  imageAlt:
    "Judge's gavel, cannabis leaf, and flower bud on a wooden table with scales of justice in a sunlit field, representing Oklahoma marijuana law",
  publishedAt: "2024-06-19",
  updatedAt: "2026-08-15",
  author: {
    name: "Robert D. Saint Laurent",
    credentials: "M.Ed.",
    slug: "robert-d-saint-laurent",
    image: "/media/robert-saint-laurent-author-of-my-mmj-doctor.webp",
    bio:
      "With over three decades of professional experience in health and medical writing, education, and clinical research communication, Robert translates complex Oklahoma cannabis regulations and medical sciences into clear, patient-centered guides.",
  },
  reviewer: {
    name: "Lewis Jassey",
    credentials: "M.D., Board-Certified Physician",
    slug: "lewis-jassey",
    image: "/media/dr-lewis-jassey.webp",
  },
  keyPoints: [
    "Oklahoma legalized medical marijuana in 2018, but recreational marijuana remains illegal statewide.",
    "Eligible patients need an OMMA patient license to legally purchase medical marijuana.",
    "Licensed patients can grow up to 6 mature and 6 seedling plants at home, subject to state rules.",
    "Medical marijuana use is restricted in certain public places, workplaces, and while driving impaired.",
    "New OMMA rules took effect on July 11, 2026, changing several requirements for patients, physicians, and businesses.",
  ],
  introduction: [
    linkMedicalMarijuanaLegalInOklahoma(
      "Marijuana laws in Oklahoma vary depending on the type and purpose of marijuana use. Medical marijuana is legal in Oklahoma for licensed patients, but recreational marijuana remains illegal statewide."
    ),
    "However, licensed marijuana also comes with limitations. You cannot just go around purchasing, cultivating, consuming publicly, or handing it out to your friends. There are some limits, which you will find out about in detail, in this blog.",
    "In addition, we'll discuss what type of marijuana is legal, and what has changed in Oklahoma Marijuana Laws in 2026, so you don't break any laws.",
  ],
  sections: [
    {
      id: "what-type-is-legal",
      title: "What Type of Marijuana Is Legal in Oklahoma?",
      paragraphs: [
        linkStateQuestion788Ballotpedia(
          "Oklahoma has a medical-use cannabis program, rather than a statewide adult-use program. State Question 788, approved by voters on June 26, 2018, legalized medical marijuana in the state."
        ),
        "The measure created the legal framework allowing licensed patients to purchase medical marijuana from licensed dispensaries.",
        "Recreational marijuana has never been legalized statewide. Oklahoma voters considered State Question 820, a proposal to legalize and regulate adult-use marijuana, on March 7, 2023. The measure did not establish an adult-use market.",
        "Therefore, in 2026, Oklahoma remains a medical-marijuana state, not a recreational-marijuana state. The Oklahoma Medical Marijuana Authority (OMMA) is the state agency responsible for regulating Oklahoma's medical marijuana program. It processes patient and business licenses, administers rules, and handles enforcement within the medical program.",
        linkOmmaCurrentPermanentRules(
          "OMMA's current permanent rules took effect July 11, 2026, replacing the previous rules."
        ),
      ],
    },
    {
      id: "who-can-buy",
      title: "Can Anyone Buy Medical Marijuana in Oklahoma?",
      paragraphs: [
        "No. A person must qualify for and obtain the appropriate OMMA patient authorization before legally purchasing medical marijuana through the state's medical program. An adult Oklahoma resident generally needs a physician recommendation, proof of identity, and proof of Oklahoma residency to apply.",
        "Oklahoma is unusual because it does not have a state-defined list of qualifying medical conditions. State law says there are no qualifying conditions and requires the recommendation to follow accepted standards of medical practice.",
        "But that does not mean approval is automatic. A physician must determine that recommending medical marijuana is appropriate for the patient. For Oklahoma residents, an approved Medical marijuana card allows the patient to legally buy, use, and grow medical marijuana under state rules.",
      ],
      inlineCta: {
        title: "Find Out If You Qualify for Medical Marijuana",
        description:
          "Medical Marijuana Doctor Oklahoma connects Oklahoma patients with state-licensed doctors for 100% online medical marijuana evaluations.",
        buttonLabel: "Apply Today",
      },
    },
    {
      id: "home-cultivation",
      title: "Can I grow marijuana in Oklahoma?",
      paragraphs: [
        "Yes. A licensed medical marijuana patient can grow marijuana for personal medical use, subject to state requirements.",
        linkOmmaCurrentPatientRules("OMMA's current patient rules allow a licensed patient to possess:"),
      ],
      bullets: [
        "6 mature marijuana plants",
        "6 seedling plants",
        "The harvested marijuana from those plants",
      ],
      followingParagraphs: [
        "Home-grown marijuana must be cultivated on property owned by the patient or on property where the owner has given the patient written permission. The plants also cannot be visible from an adjacent street to a person with normal 20/20 vision.",
        "Home growers cannot use extraction equipment involving butane, propane, carbon dioxide, or other potentially hazardous materials on residential property.",
      ],
    },
    {
      id: "where-restricted",
      title: "Where Is Marijuana Use Restricted?",
      paragraphs: [
        "Having a valid patient license does not mean marijuana can be used anywhere.",
      ],
      subsections: [
        {
          title: "Driving",
          paragraphs: [
            linkPhrases(
              "Medical authorization does not make driving while impaired legal. Oklahoma's Highway Safety Office warns that marijuana can affect reaction time, coordination, attention, and judgment, and states that drug-impaired driving remains illegal.",
              [
                {
                  phrase: OKLAHOMA_HIGHWAY_SAFETY_OFFICE_PHRASE,
                  href: OKLAHOMA_HIGHWAY_SAFETY_MARIJUANA_URL,
                },
              ]
            ),
          ],
        },
        {
          title: "Public spaces",
          paragraphs: [
            linkPhrases(
              "Smoking and vaping medical marijuana are subject to the same state restrictions that apply to tobacco under Oklahoma's Smoking in Public Places and Indoor Workplaces Act. OMMA specifically states that smoking or vaping medical marijuana outdoors in public, or indoors at a workplace, is subject to these restrictions.",
              [{ phrase: OMMA_PHRASE, href: OMMA_PATIENT_RIGHTS_URL }]
            ),
          ],
        },
        {
          title: "Workplaces",
          paragraphs: [
            "A patient license does not give someone the right to use or possess marijuana at work. Employers generally do not have to permit marijuana use at the workplace, and special rules can apply to safety-sensitive positions.",
          ],
        },
        {
          title: "Sharing marijuana",
          paragraphs: [
            "A patient cannot simply give their legally purchased oklahoma weeds to another person. OMMA states that licensed patients are prohibited from sharing medical marijuana and medical marijuana products with another individual, whether that person is licensed or not.",
          ],
        },
      ],
    },
    {
      id: "changes-2026",
      title: "What Changed in Oklahoma Marijuana Law in 2026?",
      paragraphs: [
        "Several developments make 2026 important for the medical program:",
      ],
      subsections: [
        {
          title: "New physician requirements took effect January 1, 2026",
          paragraphs: [
            "Physicians recommending medical marijuana must complete the required education and register with OMMA. Applications containing recommendations from physicians who are not properly registered can be rejected.",
          ],
        },
        {
          title: "OMMA's new permanent rules became effective July 11, 2026",
          paragraphs: [
            "They incorporate legislative changes from the 2025 session, including measures concerning physician registration, labeling, patient-license identification, and other medical-marijuana regulations.",
          ],
        },
        {
          title: "HB 3143 was signed into law in 2026",
          paragraphs: [
            "Among other provisions, it extended the moratorium on new medical marijuana dispensary, grower, and processor licenses through August 1, 2028, unless OMMA's executive director determines that pending reviews, inspections, or investigations have been completed.",
            linkPhrases(
              "Federal marijuana policy also changed in 2026, but that did not turn recreational cannabis into legal adult-use marijuana in Oklahoma.",
              [
                {
                  phrase: FEDERAL_MARIJUANA_POLICY_PHRASE,
                  href: FEDERAL_MARIJUANA_RECLASSIFICATION_URL,
                },
              ]
            ),
            "So, the key point is that 2026 brought regulatory changes to Oklahoma's medical program, not statewide recreational legalization.",
          ],
        },
      ],
    },
    {
      id: "laws-at-a-glance",
      title: "Oklahoma Marijuana Laws at a Glance",
      table: {
        headers: ["Activity", "Legal in Oklahoma in 2026?"] as [string, string],
        rows: [
          ["Medical marijuana for licensed patients", "Yes"],
          ["Recreational/adult-use marijuana", "No statewide legalization"],
          ["Buying from a licensed medical dispensary", "Yes, for authorized patients"],
          ["Home cultivation", "Yes, subject to patient limits and rules"],
          [
            "Possessing marijuana without authorization",
            "Generally unlawful, subject to limited statutory exceptions",
          ],
          ["Driving while impaired by marijuana", "No"],
          ["Public smoking/vaping", "Restricted under applicable state and local rules"],
          ["Sharing medical marijuana with another person", "No"],
        ] as [string, string][],
      },
    },
    {
      id: "wrapping-up",
      title: "Wrapping Up",
      paragraphs: [
        "Oklahoma's cannabis laws in 2026 are best understood as medical legalization, not recreational legalization. Qualified patients can legally purchase, possess, use, and grow marijuana within the limits established by state law and OMMA rules.",
        "The state does not use a fixed list of qualifying conditions, but patients still need an appropriate recommendation from a registered physician. At the same time, rules around public use, driving, cultivation, possession, purchasing, and transportation still apply.",
        linkMedicalMarijuanaCard(
          "If you are considering applying, renewing, or using a medical marijuana card Oklahoma patients can obtain, check OMMA's current rules before relying on older online information."
        ),
      ],
    },
  ],
  faqs: [
    {
      question: "What Happens If You Possess Marijuana Without Medical Authorization?",
      answer:
        "Possessing marijuana outside the state's authorized medical framework can expose a person to criminal penalties. Oklahoma law generally makes knowing or intentional possession of a controlled dangerous substance unlawful unless it is otherwise authorized.",
    },
    {
      question: "Is weed legal in Oklahoma in 2026?",
      answer: linkMedicalMarijuanaLegalInOklahoma(
        "Medical marijuana is legal in Oklahoma for authorized patients, but Oklahoma has not legalized recreational adult-use marijuana statewide. The state continues to regulate cannabis primarily through its medical marijuana program."
      ),
    },
    {
      question: "Do you need a medical marijuana card in Oklahoma?",
      answer:
        "Yes, you generally need an approved OMMA patient license to legally purchase, possess, use, or grow medical marijuana under the state program. However, OMMA may accept your official approval email or MedPortal approval as identification at a dispensary.",
    },
    {
      question: "I am not from Oklahoma. Can I still get a medical marijuana card?",
      answer:
        "Non-Oklahoma residents cannot obtain the standard two-year Oklahoma resident patient license simply. However, Oklahoma offers a 30-day out-of-state patient license to people who already hold a valid state-government-issued medical marijuana license from another state.",
    },
  ],
  references: [
    {
      label: "Oklahoma Medical Marijuana Authority",
      href: "https://oklahoma.gov/omma.html",
    },
    {
      label: "OMMA Patient Rights & Responsibilities",
      href: "https://oklahoma.gov/omma/patients-caregivers/patient-rights-and-responsibilities.html",
    },
  ],
  disclaimer:
    "This article is for educational purposes only and does not constitute medical, legal, or professional advice. Oklahoma cannabis laws and regulations can change, and individual circumstances may affect how the law applies. Always check the latest requirements from the Oklahoma Medical Marijuana Authority (OMMA) or consult a qualified professional for guidance specific to your situation.",
};
