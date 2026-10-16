import {
  IS_MARIJUANA_LEGAL_IN_OKLAHOMA_PATH,
  MEDICAL_MARIJUANA_LEGAL_IN_OKLAHOMA_LOWER,
  OKLAHOMA_MEDICAL_MARIJUANA_AUTHORITY_OMMA_PHRASE,
  OMMA_HOME_URL,
  OMMA_PATIENT_RIGHTS_PHRASE,
  OMMA_PATIENT_RIGHTS_URL,
  STATE_QUESTION_788_PDF_URL,
  STATE_QUESTION_788_SQ_PHRASE,
  linkMmjCard,
  linkPhrases,
} from "@/lib/blog/paragraphs";

export const oklahomaCannabisLaws = {
  slug: "oklahoma-cannabis-laws",
  path: "/blog/oklahoma-cannabis-laws/",
  title: "Oklahoma Cannabis Laws Explained",
  subtitle: "Medical Marijuana Rules for 2026",
  excerpt:
    "Medical marijuana is legal in Oklahoma, but recreational marijuana remains illegal for general adult use. Understanding cannabis laws can help patients avoid common legal issues and stay within the limits of Oklahoma law.",
  category: "OMMA Guidelines",
  focusKeyword: "Oklahoma Cannabis Laws",
  metaTitle: "Oklahoma Cannabis Laws 2026: Medical Marijuana Rules",
  metaDescription:
    "Oklahoma cannabis laws explained for 2026, including medical marijuana, possession limits, home cultivation, licenses, and restrictions.",
  image: "/oklahoma-cannabis-laws.webp",
  imageAlt:
    "Medical marijuana flower and medicine beside a physician reviewing a patient file",
  publishedAt: "2026-10-06",
  updatedAt: "2026-10-16",
  author: {
    name: "Daalon B. Echols",
    credentials: "M.D.",
    slug: "daalon-b-echols",
    profileKind: "contributors" as const,
    image: "/media/profile-image-of-daalon-echols.webp",
    roleLine: "Neurologist · Health & Medical Content Writer · M.D.",
    aboutRoleLine: "Neurologist · Health & Medical Content Writer · M.D.",
    bio:
      "Dr. Echols is a board-certified physician with over 21 years of clinical experience in neurology, neurophysiology, and internal medicine. He brings his extensive clinical background to healthcare writing, helping ensure medical information is clear, reliable, and accessible for patient and general audiences.",
  },
  reviewer: {
    name: "Dr. Kevin Kargman",
    credentials: "D.O.",
    slug: "kevin-kargman",
    profileKind: "doctors" as const,
    image: "/media/doctor-kevin-kargman.webp",
    roleLine: "Specialist in Medical Marijuana & Cannabis Evaluations · D.O.",
  },
  introBeforeKeyPoints: [
    "Medical marijuana is legal in Oklahoma, but recreational marijuana remains illegal for general adult use. Understanding cannabis laws can help patients avoid common legal issues and stay within the limits of Oklahoma law.",
  ],
  keyPointsHeading: "TL;DR",
  keyPoints: [
    "Oklahoma does not have a general adult-use marijuana program.",
    "Patients must meet Oklahoma's eligibility requirements and obtain a state-issued medical marijuana license.",
    "Oklahoma does not require patients to have a specific qualifying condition; a registered physician may recommend medical marijuana when appropriate.",
    "Adult patient licenses can be valid for up to two years, while temporary and out-of-state licenses have shorter validity periods.",
  ],
  introduction: [
    "Oklahoma has a medical marijuana program that allows eligible patients to access marijuana under state law.",
    "However, having a medical marijuana license does not mean that all cannabis-related activities are legal. Patients and residents must understand the rules surrounding possession, cultivation, purchasing, and use.",
    "This article explains Oklahoma cannabis laws, including eligibility, possession limits, home cultivation, restrictions, and penalties for violating state law.",
  ],
  sections: [
    {
      id: "is-cannabis-legal",
      title: "Is Cannabis Legal in Oklahoma?",
      paragraphs: [
        linkPhrases(
          "Yes, medical marijuana is legal in Oklahoma. Voters approved State Question 788 (SQ 788) on June 26, 2018, legalizing medical marijuana for eligible patients and establishing a state-regulated medical marijuana program.",
          [
            {
              phrase: MEDICAL_MARIJUANA_LEGAL_IN_OKLAHOMA_LOWER,
              href: IS_MARIJUANA_LEGAL_IN_OKLAHOMA_PATH,
            },
            {
              phrase: STATE_QUESTION_788_SQ_PHRASE,
              href: STATE_QUESTION_788_PDF_URL,
            },
          ]
        ),
        "Under SQ 788, patients can access medical marijuana with a recommendation from a licensed physician. Oklahoma does not restrict medical marijuana eligibility to a fixed list of qualifying conditions. Instead, physicians can recommend medical marijuana when they believe it may benefit a patient.",
        linkPhrases(
          "The Oklahoma Medical Marijuana Authority (OMMA) regulates the state's medical marijuana program. Although medical marijuana is legal, recreational marijuana remains illegal in Oklahoma. Patients must meet the program's requirements to obtain a medical marijuana license and receive the legal protections provided under state law.",
          [
            {
              phrase: OKLAHOMA_MEDICAL_MARIJUANA_AUTHORITY_OMMA_PHRASE,
              href: OMMA_HOME_URL,
            },
          ]
        ),
      ],
    },
    {
      id: "omma-role",
      title: "What Is OMMA's Role in Oklahoma's Medical Marijuana Program?",
      paragraphs: [
        "The OMMA is the state agency responsible for regulating Oklahoma's medical marijuana program. It became an independent state agency in 2022. OMMA's responsibilities include:",
      ],
      bullets: [
        "Processing patient and commercial license applications",
        "Regulating licensed medical marijuana businesses",
        "Facilitating the rulemaking process",
        "Enforcing medical marijuana laws and regulations",
        "Investigating possible violations",
        "Overseeing compliance within the state's regulated medical marijuana market",
      ],
    },
    {
      id: "who-can-use",
      title: "Who Can Use Medical Cannabis in Oklahoma?",
      paragraphs: [
        "Oklahoma allows both adults and minors to qualify for medical marijuana, but the requirements differ by age:",
      ],
      bullets: [
        "Adults 18 and older: Oklahoma residents aged 18 or older can apply for an adult medical marijuana license through OMMA.",
        "Minor Patient License: Patients under 18 can qualify with recommendations from two registered physicians and consent from a parent or legal guardian, who can purchase medical marijuana for them.",
      ],
    },
    {
      id: "possession-limits",
      title: "Oklahoma Medical Marijuana Possession Limits",
      paragraphs: [
        "Oklahoma law allows licensed medical marijuana patients to possess specific amounts of marijuana and marijuana products for personal medical use. These limits vary depending on where the marijuana is kept and the form of cannabis.",
        "A licensed patient may possess:",
      ],
      bullets: [
        "Up to 3 ounces of marijuana on their person.",
        "Up to 8 ounces of marijuana at their residence.",
        "Up to 1 ounce of concentrated marijuana.",
        "Up to 72 ounces of edible marijuana.",
        "Up to 72 ounces of topical marijuana.",
      ],
      followingParagraphs: [
        "Possession limits determine how much medical marijuana a licensed patient may legally have. Dispensaries must also follow state requirements governing the sale and packaging of medical marijuana products.",
      ],
    },
    {
      id: "home-cultivation",
      title: "Cannabis Home Cultivation Laws in Oklahoma",
      paragraphs: [
        "Oklahoma allows patients to grow marijuana on property they own. To grow marijuana on rented property, they need written permission from the landlord.",
        linkPhrases("According to OMMA Patient Rights & Responsibilities, a licensed patient may possess:", [
          { phrase: OMMA_PATIENT_RIGHTS_PHRASE, href: OMMA_PATIENT_RIGHTS_URL },
        ]),
      ],
      bullets: [
        "Up to 6 mature marijuana plants",
        "Up to 6 seedling plants",
        "Marijuana harvested from the mature plants",
      ],
      followingParagraphs: [
        "The amount of harvested marijuana must also remain within the applicable possession limits.",
      ],
      subsections: [
        {
          title: "Restrictions on Home Cultivation",
          paragraphs: [
            "Home-grown cannabis must be kept out of plain view from neighboring streets. It should not be visible to a person with normal 20/20 vision standing on a street next to the property.",
            "Patients cannot use extraction equipment or processes involving butane, propane, carbon dioxide, or other potentially hazardous materials in or on residential property.",
          ],
        },
      ],
    },
    {
      id: "physician-recommendation-rules",
      title: "2026 Physician Recommendation Rules",
      paragraphs: [
        "Oklahoma introduced new physician requirements in 2026. Starting January 1, 2026, physicians providing new recommendations must follow updated registration, education, and professional standards.",
      ],
      subsections: [
        {
          title: "OMMA Registration and Education",
          paragraphs: [
            "Physicians must register with the Oklahoma Medical Marijuana Authority (OMMA) and complete the required medical marijuana education before providing new recommendations. Registration is effective only after OMMA approves it.",
          ],
        },
        {
          title: "Professional Standards",
          paragraphs: [
            "Physicians must remain in good standing with the appropriate Oklahoma medical board. They must also follow accepted standards that a reasonable and prudent physician would use when recommending medication.",
          ],
        },
        {
          title: "Dispensary Location Restrictions",
          paragraphs: [
            "A recommending physician cannot be located at the same physical address as a dispensary. This restriction also applies to virtual appointments when the patient is physically located at a dispensary.",
          ],
        },
        {
          title: "Verify Your Physician",
          paragraphs: [
            "Patients should confirm that their physician is properly registered and approved by OMMA before getting a recommendation.",
          ],
        },
        {
          title: "Recommendation Timing",
          paragraphs: [
            "The physician recommendation must be dated within 30 days of the patient's application. An adult patient's application can be rejected if the recommendation comes from an unqualified or unregistered physician.",
          ],
        },
      ],
    },
    {
      id: "get-medical-marijuana-card",
      title: "How to Get an Oklahoma Medical Marijuana Card?",
      paragraphs: [
        "Getting an Oklahoma medical marijuana card involves a few basic steps.",
        "An eligible Oklahoma resident needs to obtain a recommendation from an authorized physician. The recommendation must be dated within 30 days of submitting the application.",
        "The patient then submits an online application to OMMA with proof of identity, Oklahoma residency, a photo, and the physician recommendation. Adults 18 and older can apply for a license valid for up to two years.",
        "OMMA generally processes patient applications within 14 business days.",
        "Once approved, the patient can use the license to legally purchase medical marijuana from licensed dispensaries.",
      ],
    },
    {
      id: "what-is-illegal",
      title: "What Is Illegal Under Oklahoma Marijuana Law?",
      paragraphs: [
        "A medical marijuana license provides legal protections for medical use, but it does not allow unrestricted cannabis activity.",
      ],
      bullets: [
        "A medical license does not make recreational marijuana legal in Oklahoma.",
        "Patients cannot sell, share, or distribute medical marijuana outside the legal system.",
        "Patients must stay within Oklahoma's legal possession limits, even with a valid license.",
        "Patients who grow marijuana must follow Oklahoma's plant and cultivation limits.",
        "A patient license does not permit cannabis use in prohibited locations or circumstances.",
        "Patients cannot drive or operate a vehicle while impaired by marijuana.",
      ],
    },
    {
      id: "conclusion",
      title: "Conclusion",
      paragraphs: [
        "Medical marijuana access in Oklahoma requires the appropriate patient license and compliance with current state rules. A license provides specific legal protections, but patients must still follow Oklahoma's limits on possession, purchasing, cultivation, and use.",
        "Since regulations can change, checking the latest OMMA requirements is important before using medical marijuana.",
        linkMmjCard(
          "If you need assistance applying for your MMJ card, reach out to us at Medical Marijuana Doctor Oklahoma. We help patients connect with a state-licensed doctor through an audio/video consultation. If the doctor determines that you qualify, they can provide the appropriate recommendation."
        ),
      ],
    },
  ],
  faqs: [
    {
      question: "How Long Does It Take to Get an Oklahoma Medical Marijuana License?",
      answer:
        "OMMA generally processes new and renewal patient license applications within 14 business days. Approved applicants may need another one or two business days for the license card to be printed.",
    },
    {
      question: "How Long Is an Oklahoma Medical Marijuana License Valid?",
      answer:
        "A standard adult or minor patient license is valid for up to two years. Oklahoma also offers short-term licenses valid for 60 days, while out-of-state temporary licenses are valid for 30 days.",
    },
    {
      question: "Can a Caregiver Buy Medical Marijuana for a Patient?",
      answer:
        "Yes. A licensed caregiver can buy, transport, possess, and administer medical marijuana for a designated patient. The physician must document that the patient needs a caregiver, and the required caregiver designation must be completed.",
    },
    {
      question: "Can Visitors Get an Oklahoma Medical Marijuana License?",
      answer:
        "Yes. Non-Oklahoma residents with a valid medical marijuana license from another state can apply for an out-of-state temporary license. It is valid for 30 days and allows eligible visitors to legally buy, use, and grow medical marijuana in Oklahoma.",
    },
    {
      question: "Can You Renew an Oklahoma Medical Marijuana License?",
      answer:
        "Yes. Patients can submit a renewal application through OMMA. Renewal applications are generally processed within 14 business days, so patients should apply before their current license expires.",
    },
    {
      question: "Where Can You Legally Buy Medical Marijuana in Oklahoma?",
      answer:
        "Licensed patients can purchase medical marijuana from OMMA-licensed dispensaries. Patients must present valid proof of their medical marijuana license when making a purchase, and dispensaries must verify the license.",
    },
  ],
  references: [
    {
      label: "Oklahoma State Question 788",
      href: "https://oklahoma.gov/content/dam/ok/en/omma/docs/sq_788_1.pdf",
    },
  ],
  disclaimer:
    "This article is for educational purposes only and does not constitute medical, legal, or professional advice. Oklahoma cannabis laws and regulations can change, and individual circumstances may affect how the law applies. Always check the latest requirements from the Oklahoma Medical Marijuana Authority (OMMA) or consult a qualified professional for guidance specific to your situation.",
};
