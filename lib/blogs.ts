export type BlogAuthor = {
  name: string;
  role: string;
  credentials: string;
  slug: string;
  image: string;
  bio: string;
};

export type BlogReviewer = {
  name: string;
  role: string;
  credentials: string;
  slug: string;
  image: string;
};

export type BlogChecklist = {
  title: string;
  description?: string;
  items: {
    heading: string;
    text: string;
  }[];
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogTable = {
  title?: string;
  headers: string[];
  rows: {
    activity: string;
    status: string;
  }[];
};

export type BlogSection = {
  id: string;
  title: string;
  content: string[];
  bullets?: string[];
  trailingContent?: string[];
  quote?: {
    text: string;
    author: string;
  };
  checklists?: BlogChecklist[];
  table?: BlogTable;
  callout?: {
    title: string;
    text: string;
    type?: "info" | "warning" | "success";
  };
  subsections?: {
    title: string;
    content: string[];
  }[];
};

export type BlogPost = {
  slug: string;
  aliases?: string[];
  metaTitle: string;
  metaDescription: string;
  title: string;
  titleSecondary?: string;
  subtitle: string;
  category: "OMMA Guidelines" | "Qualifying Conditions" | "Card Renewal" | "Patient Rights" | "Dosage & Usage" | "General";
  readTime: string;
  datePublished: string;
  dateModified: string;
  coverImage: string;
  author: BlogAuthor;
  reviewer: BlogReviewer;
  intro: string[];
  keyPoints: string[];
  sections: BlogSection[];
  keyTakeaways: string[];
  faqs: BlogFaqItem[];
  relatedSlugs: string[];
};

export const blogAuthors: Record<string, BlogAuthor> = {
  robert: {
    name: "Robert D. Saint Laurent",
    role: "Health & Medical Content Writer",
    credentials: "M.Ed., Editorial Specialist",
    slug: "robert-d-saint-laurent",
    image: "/robert-saint-laurent-author-of-my-mmj-doctor.webp",
    bio: "With over three decades of professional experience in health and medical writing, education, and clinical research communication, Robert translates complex Oklahoma cannabis regulations and medical sciences into clear, patient-centered guides.",
  },
  daalon: {
    name: "Daalon B. Echols",
    role: "Neurologist · Health & Medical Content Writer",
    credentials: "M.D.",
    slug: "daalon-b-echols",
    image: "/profile-image-of-daalon-echols.webp",
    bio: "Dr. Echols is a board-certified physician with over 21 years of clinical experience in neurology, neurophysiology, and internal medicine. He brings his extensive clinical background to healthcare writing, helping ensure medical information is clear, reliable, and accessible.",
  },
};

export const blogReviewers: Record<string, BlogReviewer> = {
  drJassey: {
    name: "Dr. Lewis Jassey",
    role: "Medical Cannabis Specialist",
    credentials: "M.D., Board-Certified Physician",
    slug: "lewis-jassey",
    image: "/dr-lewis-jassey.webp",
  },
  drBugailiskis: {
    name: "Dr. Cheryl Bugailiskis",
    role: "Board-Certified Physician",
    credentials: "M.D., Telehealth Evaluator",
    slug: "cheryl-bugailiskis",
    image: "/dr-cheryl-bugailiskis.webp",
  },
  drKargman: {
    name: "Dr. Kevin Kargman",
    role: "Board-Certified Osteopathic Physician",
    credentials: "D.O., MMJ Specialist",
    slug: "kevin-kargman",
    image: "/doctor-kevin-kargman.webp",
  },
  drMiller: {
    name: "Dr. Johnathan C. Miller",
    role: "Clinical Evaluator",
    credentials: "M.D., Board-Certified",
    slug: "johnathan-c-miller",
    image: "/dr-johnathan-c-miller.webp",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "is-marijuana-legal-in-oklahoma",
    aliases: [
      "how-to-verify-if-an-esa-letter-is-legitimate",
      "how-to-verify-oklahoma-medical-marijuana-card-legitimate",
    ],
    metaTitle: "Is Marijuana Legal in Oklahoma in 2026?",
    metaDescription:
      "Medical marijuana is legal in Oklahoma in 2026, but recreational use remains illegal. Learn key rules, limits, and OMMA changes you must know.",
    title: "Is Marijuana Legal in Oklahoma in 2026?",
    titleSecondary: "All You Need to Know",
    subtitle:
      "Medical marijuana is legal in Oklahoma in 2026, but recreational use remains illegal. Learn key rules, limits, and OMMA changes you must know.",
    category: "OMMA Guidelines",
    readTime: "6 min read",
    datePublished: "2024-06-19",
    dateModified: "2026-08-15",
    coverImage: "/blogs-is-marijuana-legal-in-oklahoma.png",
    author: blogAuthors.robert,
    reviewer: blogReviewers.drJassey,
    intro: [
      "Marijuana laws in Oklahoma vary depending on the type and purpose of marijuana use. While Oklahoma allows medical marijuana for licensed patients, recreational marijuana remains illegal statewide.",
      "However, licensed marijuana also comes with limitations. You cannot just go around purchasing, cultivating, consuming publicly, or handing it out to your friends. There are some limits, which you will find out about in detail, in this blog.",
      "In addition, we'll discuss what type of marijuana is legal, and what has changed in Oklahoma Marijuana Laws in 2026, so you don't break any laws.",
    ],
    keyPoints: [
      "Oklahoma legalized medical marijuana in 2018, but recreational marijuana remains illegal statewide.",
      "Eligible patients need an OMMA patient license to legally purchase medical marijuana.",
      "Licensed patients can grow up to 6 mature and 6 seedling plants at home, subject to state rules.",
      "Medical marijuana use is restricted in certain public places, workplaces, and while driving impaired.",
      "New OMMA rules took effect on July 11, 2026, changing several requirements for patients, physicians, and businesses.",
    ],
    sections: [
      {
        id: "what-type-of-marijuana-is-legal-in-oklahoma",
        title: "What Type of Marijuana Is Legal in Oklahoma?",
        content: [
          "Oklahoma has a medical-use cannabis program, rather than a statewide adult-use program. [State Question 788](https://ballotpedia.org/Oklahoma_State_Question_788,_Medical_Marijuana_Legalization_Initiative_%28June_2018%29), approved by voters on June 26, 2018, legalized medical marijuana in the state.",
          "The measure created the legal framework allowing licensed patients to purchase medical marijuana from licensed dispensaries.",
          "Recreational marijuana has never been legalized statewide. Oklahoma voters considered State Question 820, a proposal to legalize and regulate adult-use marijuana, on March 7, 2023. The measure did not establish an adult-use market.",
          "Therefore, in 2026, Oklahoma remains a medical-marijuana state, not a recreational-marijuana state. The Oklahoma Medical Marijuana Authority (OMMA) is the state agency responsible for regulating Oklahoma's medical marijuana program. It processes patient and business licenses, administers rules, and handles enforcement within the medical program.",
          "[OMMA's current permanent rules](https://oklahoma.gov/omma/rules-and-legislation/rules.html) took effect July 11, 2026, replacing the previous rules.",
        ],
      },
      {
        id: "can-anyone-buy-medical-marijuana-in-oklahoma",
        title: "Can Anyone Buy Medical Marijuana in Oklahoma?",
        content: [
          "No. A person must qualify for and obtain the appropriate OMMA patient authorization before legally purchasing medical marijuana through the state's medical program. An adult Oklahoma resident generally needs a physician recommendation, proof of identity, and proof of Oklahoma residency to apply.",
          "Oklahoma is unusual because it does not have a state-defined list of qualifying medical conditions. State law says there are no qualifying conditions and requires the recommendation to follow accepted standards of medical practice.",
          "But that does not mean approval is automatic. A physician must determine that recommending medical marijuana is appropriate for the patient. For Oklahoma residents, an approved [medical marijuana card Oklahoma](https://medicalmarijuanadoctoroklahoma.com/) allows the patient to legally buy, use, and grow medical marijuana under state rules.",
        ],
      },
      {
        id: "can-i-grow-marijuana-in-oklahoma",
        title: "Can I grow marijuana in Oklahoma?",
        content: [
          "Yes. A licensed medical marijuana patient can grow marijuana for personal medical use, subject to state requirements.",
          "[OMMA's current patient rules](https://oklahoma.gov/omma/patients-caregivers/patient-rights-and-responsibilities.html) allow a licensed patient to possess:",
        ],
        bullets: [
          "6 mature marijuana plants",
          "6 seedling plants",
          "The harvested marijuana from those plants",
        ],
        trailingContent: [
          "Home-grown marijuana must be cultivated on property owned by the patient or on property where the owner has given the patient written permission. The plants also cannot be visible from an adjacent street to a person with normal 20/20 vision.",
          "Home growers cannot use extraction equipment involving butane, propane, carbon dioxide, or other potentially hazardous materials on residential property.",
        ],
      },
      {
        id: "where-is-marijuana-use-restricted",
        title: "Where Is Marijuana Use Restricted?",
        content: [
          "Having a valid patient license does not mean marijuana can be used anywhere.",
        ],
        subsections: [
          {
            title: "Driving",
            content: [
              "Medical authorization does not make driving while impaired legal. [Oklahoma's Highway Safety Office](https://oklahoma.gov/highwaysafety/focus-areas/drug-impaired/marijuana.html) warns that marijuana can affect reaction time, coordination, attention, and judgment, and states that drug-impaired driving remains illegal.",
            ],
          },
          {
            title: "Public Spaces",
            content: [
              "Smoking and vaping medical marijuana are subject to the same state restrictions that apply to tobacco under Oklahoma's Smoking in Public Places and Indoor Workplaces Act. [OMMA](https://oklahoma.gov/omma/patients-caregivers/patient-rights-and-responsibilities.html) specifically states that smoking or vaping medical marijuana outdoors in public, or indoors at a workplace, is subject to these restrictions.",
            ],
          },
          {
            title: "Workplaces",
            content: [
              "A patient license does not give someone the right to use or possess marijuana at work. Employers generally do not have to permit marijuana use at the workplace, and special rules can apply to safety-sensitive positions.",
            ],
          },
          {
            title: "Sharing Marijuana",
            content: [
              "A patient cannot simply give their legally purchased Oklahoma cannabis to another person. [OMMA](https://oklahoma.gov/omma/patients-caregivers/patient-rights-and-responsibilities.html) states that licensed patients are prohibited from sharing medical marijuana and medical marijuana products with another individual, whether that person is licensed or not.",
            ],
          },
        ],
      },
      {
        id: "what-changed-in-oklahoma-marijuana-law-in-2026",
        title: "What Changed in Oklahoma Marijuana Law in 2026?",
        content: [
          "Several developments make 2026 important for the medical program:",
        ],
        subsections: [
          {
            title: "New physician requirements took effect January 1, 2026",
            content: [
              "Physicians recommending medical marijuana must complete the required education and register with OMMA. Applications containing recommendations from physicians who are not properly registered can be rejected.",
            ],
          },
          {
            title: "OMMA's new permanent rules became effective July 11, 2026",
            content: [
              "They incorporate legislative changes from the 2025 session, including measures concerning physician registration, labeling, patient-license identification, and other medical-marijuana regulations.",
            ],
          },
          {
            title: "HB 3143 was signed into law in 2026",
            content: [
              "Among other provisions, it extended the moratorium on new medical marijuana dispensary, grower, and processor licenses through August 1, 2028, unless OMMA's executive director determines that pending reviews, inspections, or investigations have been completed.",
            ],
          },
        ],
        trailingContent: [
          "[Federal marijuana policy](https://oklahoma.gov/omma/about/news/2026/update-federal-reclassification-of-marijuana.html) also changed in 2026, but that did not turn recreational cannabis into legal adult-use marijuana in Oklahoma.",
          "So, the key point is that 2026 brought regulatory changes to Oklahoma's medical program, not statewide recreational legalization.",
        ],
      },
      {
        id: "oklahoma-marijuana-laws-at-a-glance",
        title: "Oklahoma Marijuana Laws at a Glance",
        content: [],
        table: {
          title: "Oklahoma Marijuana Laws at a Glance",
          headers: ["Activity", "Legal in Oklahoma in 2026?"],
          rows: [
            {
              activity: "Medical marijuana for licensed patients",
              status: "Yes",
            },
            {
              activity: "Recreational/adult-use marijuana",
              status: "No statewide legalization",
            },
            {
              activity: "Buying from a licensed medical dispensary",
              status: "Yes, for authorized patients",
            },
            {
              activity: "Home cultivation",
              status: "Yes, subject to patient limits and rules",
            },
            {
              activity: "Possessing marijuana without authorization",
              status: "Generally unlawful, subject to limited statutory exceptions",
            },
            {
              activity: "Driving while impaired by marijuana",
              status: "No",
            },
            {
              activity: "Public smoking/vaping",
              status: "Restricted under applicable state and local rules",
            },
            {
              activity: "Sharing medical marijuana with another person",
              status: "No",
            },
          ],
        },
      },
      {
        id: "wrapping-up",
        title: "Wrapping Up",
        content: [
          "Oklahoma's cannabis laws in 2026 are best understood as medical legalization, not recreational legalization. Qualified patients can legally purchase, possess, use, and grow marijuana within the limits established by state law and OMMA rules.",
          "The state does not use a fixed list of qualifying conditions, but patients still need an appropriate recommendation from a registered physician. At the same time, rules around public use, driving, cultivation, possession, purchasing, and transportation still apply.",
          "If you are considering applying, renewing, or using a [medical marijuana card Oklahoma](https://medicalmarijuanadoctoroklahoma.com/) patients can obtain, check OMMA's current rules before relying on older online information.",
        ],
      },
      {
        id: "frequently-asked-questions",
        title: "Frequently Asked Questions",
        content: [],
        subsections: [
          {
            title: "1. What Happens If You Possess Marijuana Without Medical Authorization?",
            content: [
              "Possessing marijuana outside the state's authorized medical framework can expose a person to criminal penalties. Oklahoma law generally makes knowing or intentional possession of a controlled dangerous substance unlawful unless it is otherwise authorized.",
            ],
          },
          {
            title: "2. Is weed legal in Oklahoma in 2026?",
            content: [
              "Medical marijuana is legal for authorized patients, but Oklahoma has not legalized recreational adult-use marijuana statewide. The state continues to regulate cannabis primarily through its medical marijuana program.",
            ],
          },
          {
            title: "3. Do you need a medical marijuana card in Oklahoma?",
            content: [
              "Yes, you generally need an approved OMMA patient license to legally purchase, possess, use, or grow medical marijuana under the state program. However, OMMA may accept your official approval email or MedPortal approval as identification at a dispensary.",
            ],
          },
          {
            title: "4. I am not from Oklahoma. Can I still get a medical marijuana card?",
            content: [
              "Non-Oklahoma residents cannot obtain the standard two-year Oklahoma resident patient license simply. However, Oklahoma offers a 30-day out-of-state patient license to people who already hold a valid state-government-issued medical marijuana license from another state.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [],
    faqs: [
      {
        question: "What Happens If You Possess Marijuana Without Medical Authorization?",
        answer:
          "Possessing marijuana outside the state's authorized medical framework can expose a person to criminal penalties. Oklahoma law generally makes knowing or intentional possession of a controlled dangerous substance unlawful unless it is otherwise authorized.",
      },
      {
        question: "Is weed legal in Oklahoma in 2026?",
        answer:
          "Medical marijuana is legal for authorized patients, but Oklahoma has not legalized recreational adult-use marijuana statewide. The state continues to regulate cannabis primarily through its medical marijuana program.",
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
    relatedSlugs: ["oklahoma-cannabis-laws"],
  },
  {
    slug: "oklahoma-cannabis-laws",
    metaTitle: "Oklahoma Cannabis Laws 2026: Medical Marijuana Rules",
    metaDescription:
      "Oklahoma cannabis laws explained for 2026, including medical marijuana, possession limits, home cultivation, licenses, and restrictions.",
    title: "Oklahoma Cannabis Laws Explained",
    titleSecondary: "Medical Marijuana Rules for 2026",
    subtitle:
      "Medical marijuana is legal in Oklahoma, but recreational marijuana remains illegal for general adult use. Understanding cannabis laws can help patients avoid common legal issues and stay within the limits of Oklahoma law.",
    category: "OMMA Guidelines",
    readTime: "8 min read",
    datePublished: "2026-10-06",
    dateModified: "2026-10-16",
    coverImage: "/oklahoma-cannabis-laws.webp",
    author: blogAuthors.daalon,
    reviewer: blogReviewers.drKargman,
    intro: [
      "Medical marijuana is legal in Oklahoma, but recreational marijuana remains illegal for general adult use. Understanding cannabis laws can help patients avoid common legal issues and stay within the limits of Oklahoma law.",
      "Oklahoma has a medical marijuana program that allows eligible patients to access marijuana under state law.",
      "However, having a medical marijuana license does not mean that all cannabis-related activities are legal. Patients and residents must understand the rules surrounding possession, cultivation, purchasing, and use.",
      "This article explains Oklahoma cannabis laws, including eligibility, possession limits, home cultivation, restrictions, and penalties for violating state law.",
    ],
    keyPoints: [
      "Oklahoma does not have a general adult-use marijuana program.",
      "Patients must meet Oklahoma's eligibility requirements and obtain a state-issued medical marijuana license.",
      "Oklahoma does not require patients to have a specific qualifying condition; a registered physician may recommend medical marijuana when appropriate.",
      "Adult patient licenses can be valid for up to two years, while temporary and out-of-state licenses have shorter validity periods.",
    ],
    sections: [
      {
        id: "is-cannabis-legal",
        title: "Is Cannabis Legal in Oklahoma?",
        content: [
          "Yes, [medical marijuana is legal in Oklahoma](/blog/is-marijuana-legal-in-oklahoma/). Voters approved [State Question 788 (SQ 788)](https://oklahoma.gov/content/dam/ok/en/omma/docs/sq_788_1.pdf) on June 26, 2018, legalizing medical marijuana for eligible patients and establishing a state-regulated medical marijuana program.",
          "Under SQ 788, patients can access medical marijuana with a recommendation from a licensed physician. Oklahoma does not restrict medical marijuana eligibility to a fixed list of qualifying conditions. Instead, physicians can recommend medical marijuana when they believe it may benefit a patient.",
          "The [Oklahoma Medical Marijuana Authority (OMMA)](https://oklahoma.gov/omma/) regulates the state's medical marijuana program. Although medical marijuana is legal, recreational marijuana remains illegal in Oklahoma. Patients must meet the program's requirements to obtain a medical marijuana license and receive the legal protections provided under state law.",
        ],
      },
      {
        id: "omma-role",
        title: "What Is OMMA's Role in Oklahoma's Medical Marijuana Program?",
        content: [
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
        content: [
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
        content: [
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
        trailingContent: [
          "Possession limits determine how much medical marijuana a licensed patient may legally have. Dispensaries must also follow state requirements governing the sale and packaging of medical marijuana products.",
        ],
      },
      {
        id: "home-cultivation",
        title: "Cannabis Home Cultivation Laws in Oklahoma",
        content: [
          "Oklahoma allows patients to grow marijuana on property they own. To grow marijuana on rented property, they need written permission from the landlord.",
          "According to [OMMA Patient Rights & Responsibilities](https://oklahoma.gov/omma/patients-caregivers/patient-rights-and-responsibilities.html), a licensed patient may possess:",
        ],
        bullets: [
          "Up to 6 mature marijuana plants",
          "Up to 6 seedling plants",
          "Marijuana harvested from the mature plants",
        ],
        trailingContent: [
          "The amount of harvested marijuana must also remain within the applicable possession limits.",
        ],
        subsections: [
          {
            title: "Restrictions on Home Cultivation",
            content: [
              "Home-grown cannabis must be kept out of plain view from neighboring streets. It should not be visible to a person with normal 20/20 vision standing on a street next to the property.",
              "Patients cannot use extraction equipment or processes involving butane, propane, carbon dioxide, or other potentially hazardous materials in or on residential property.",
            ],
          },
        ],
      },
      {
        id: "physician-recommendation-rules",
        title: "2026 Physician Recommendation Rules",
        content: [
          "Oklahoma introduced new physician requirements in 2026. Starting January 1, 2026, physicians providing new recommendations must follow updated registration, education, and professional standards.",
        ],
        subsections: [
          {
            title: "OMMA Registration and Education",
            content: [
              "Physicians must register with the Oklahoma Medical Marijuana Authority (OMMA) and complete the required medical marijuana education before providing new recommendations. Registration is effective only after OMMA approves it.",
            ],
          },
          {
            title: "Professional Standards",
            content: [
              "Physicians must remain in good standing with the appropriate Oklahoma medical board. They must also follow accepted standards that a reasonable and prudent physician would use when recommending medication.",
            ],
          },
          {
            title: "Dispensary Location Restrictions",
            content: [
              "A recommending physician cannot be located at the same physical address as a dispensary. This restriction also applies to virtual appointments when the patient is physically located at a dispensary.",
            ],
          },
          {
            title: "Verify Your Physician",
            content: [
              "Patients should confirm that their physician is properly registered and approved by OMMA before getting a recommendation.",
            ],
          },
          {
            title: "Recommendation Timing",
            content: [
              "The physician recommendation must be dated within 30 days of the patient's application. An adult patient's application can be rejected if the recommendation comes from an unqualified or unregistered physician.",
            ],
          },
        ],
      },
      {
        id: "get-medical-marijuana-card",
        title: "How to Get an Oklahoma Medical Marijuana Card?",
        content: [
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
        content: [
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
        content: [
          "Medical marijuana access in Oklahoma requires the appropriate patient license and compliance with current state rules. A license provides specific legal protections, but patients must still follow Oklahoma's limits on possession, purchasing, cultivation, and use.",
          "Since regulations can change, checking the latest OMMA requirements is important before using medical marijuana.",
          "If you need assistance applying for your [MMJ card](/), reach out to us at Medical Marijuana Doctor Oklahoma. We help patients connect with a state-licensed doctor through an audio/video consultation. If the doctor determines that you qualify, they can provide the appropriate recommendation.",
        ],
      },
      {
        id: "frequently-asked-questions",
        title: "Frequently Asked Questions",
        content: [],
        subsections: [
          {
            title: "How Long Does It Take to Get an Oklahoma Medical Marijuana License?",
            content: [
              "OMMA generally processes new and renewal patient license applications within 14 business days. Approved applicants may need another one or two business days for the license card to be printed.",
            ],
          },
          {
            title: "How Long Is an Oklahoma Medical Marijuana License Valid?",
            content: [
              "A standard adult or minor patient license is valid for up to two years. Oklahoma also offers short-term licenses valid for 60 days, while out-of-state temporary licenses are valid for 30 days.",
            ],
          },
          {
            title: "Can a Caregiver Buy Medical Marijuana for a Patient?",
            content: [
              "Yes. A licensed caregiver can buy, transport, possess, and administer medical marijuana for a designated patient. The physician must document that the patient needs a caregiver, and the required caregiver designation must be completed.",
            ],
          },
          {
            title: "Can Visitors Get an Oklahoma Medical Marijuana License?",
            content: [
              "Yes. Non-Oklahoma residents with a valid medical marijuana license from another state can apply for an out-of-state temporary license. It is valid for 30 days and allows eligible visitors to legally buy, use, and grow medical marijuana in Oklahoma.",
            ],
          },
          {
            title: "Can You Renew an Oklahoma Medical Marijuana License?",
            content: [
              "Yes. Patients can submit a renewal application through OMMA. Renewal applications are generally processed within 14 business days, so patients should apply before their current license expires.",
            ],
          },
          {
            title: "Where Can You Legally Buy Medical Marijuana in Oklahoma?",
            content: [
              "Licensed patients can purchase medical marijuana from OMMA-licensed dispensaries. Patients must present valid proof of their medical marijuana license when making a purchase, and dispensaries must verify the license.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Oklahoma does not have a general adult-use marijuana program.",
      "Patients must meet Oklahoma's eligibility requirements and obtain a state-issued medical marijuana license.",
      "Oklahoma does not require patients to have a specific qualifying condition; a registered physician may recommend medical marijuana when appropriate.",
      "Adult patient licenses can be valid for up to two years, while temporary and out-of-state licenses have shorter validity periods.",
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
    relatedSlugs: ["is-marijuana-legal-in-oklahoma"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const normalized = slug.toLowerCase().trim();
  return blogPosts.find(
    (post) =>
      post.slug === normalized ||
      post.aliases?.some((alias) => alias === normalized)
  );
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getRelatedBlogPosts(post: BlogPost): BlogPost[] {
  return blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));
}
