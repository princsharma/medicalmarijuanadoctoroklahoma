export type BlogAuthor = {
  name: string;
  role: string;
  credentials: string;
  slug: string;
  image: string;
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
  },
  daalon: {
    name: "Daalon Echols",
    role: "Patient Advocacy & Healthcare Coordinator",
    credentials: "B.S. Health Sciences",
    slug: "daalon-echols",
    image: "/profile-image-of-daalon-echols.webp",
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
          "Oklahoma has a medical-use cannabis program, rather than a statewide adult-use program. State Question 788, approved by voters on June 26, 2018, legalized medical marijuana in the state.",
          "The measure created the legal framework allowing licensed patients to purchase medical marijuana from licensed dispensaries.",
          "Recreational marijuana has never been legalized statewide. Oklahoma voters considered State Question 820, a proposal to legalize and regulate adult-use marijuana, on March 7, 2023. The measure did not establish an adult-use market.",
          "Therefore, in 2026, Oklahoma remains a medical-marijuana state, not a recreational-marijuana state. The Oklahoma Medical Marijuana Authority (OMMA) is the state agency responsible for regulating Oklahoma's medical marijuana program. It processes patient and business licenses, administers rules, and handles enforcement within the medical program.",
          "OMMA's current permanent rules took effect July 11, 2026, replacing the previous rules.",
        ],
      },
      {
        id: "can-anyone-buy-medical-marijuana-in-oklahoma",
        title: "Can Anyone Buy Medical Marijuana in Oklahoma?",
        content: [
          "No. A person must qualify for and obtain the appropriate OMMA patient authorization before legally purchasing medical marijuana through the state's medical program. An adult Oklahoma resident generally needs a physician recommendation, proof of identity, and proof of Oklahoma residency to apply.",
          "Oklahoma is unusual because it does not have a state-defined list of qualifying medical conditions. State law says there are no qualifying conditions and requires the recommendation to follow accepted standards of medical practice.",
          "But that does not mean approval is automatic. A physician must determine that recommending medical marijuana is appropriate for the patient. For Oklahoma residents, an approved Medical marijuana card allows the patient to legally buy, use, and grow medical marijuana under state rules.",
        ],
        quote: {
          text: "Under Oklahoma SQ 788, there are no qualifying condition lists. Certified physicians evaluate each patient individually according to accepted medical standards to determine if cannabis provides therapeutic benefit.",
          author: "Dr. Lewis Jassey, M.D. - Board-Certified Medical Cannabis Specialist",
        },
      },
      {
        id: "can-i-grow-marijuana-in-oklahoma",
        title: "Can I Grow Marijuana in Oklahoma?",
        content: [
          "Yes. A licensed medical marijuana patient can grow marijuana for personal medical use, subject to state requirements.",
          "OMMA's current patient rules allow a licensed patient to possess:",
        ],
        checklists: [
          {
            title: "Patient Home Cultivation Rights",
            items: [
              {
                heading: "6 Mature Marijuana Plants",
                text: "Licensed patients may cultivate up to 6 mature flowering cannabis plants on private residential property.",
              },
              {
                heading: "6 Seedling Plants",
                text: "Patients can concurrently maintain up to 6 vegetative seedling cannabis plants.",
              },
              {
                heading: "Harvested Marijuana Storage",
                text: "Patients can legally possess the harvested marijuana yielded directly from those cultivated plants at their residence.",
              },
            ],
          },
        ],
        subsections: [
          {
            title: "Cultivation Location & Safety Restrictions",
            content: [
              "Home-grown marijuana must be cultivated on property owned by the patient or on property where the owner has given the patient written permission. The plants also cannot be visible from an adjacent street to a person with normal 20/20 vision.",
              "Home growers cannot use extraction equipment involving butane, propane, carbon dioxide, or other potentially hazardous materials on residential property.",
            ],
          },
        ],
      },
      {
        id: "where-is-marijuana-use-restricted",
        title: "Where Is Marijuana Use Restricted?",
        content: [
          "Having a valid patient license does not mean marijuana can be used anywhere. Oklahoma law maintains clear boundaries for consumption:",
        ],
        subsections: [
          {
            title: "Driving & Impairment",
            content: [
              "Medical authorization does not make driving while impaired legal. Oklahoma's Highway Safety Office warns that marijuana can affect reaction time, coordination, attention, and judgment, and states that drug-impaired driving remains illegal.",
            ],
          },
          {
            title: "Public Spaces & Smoking Laws",
            content: [
              "Smoking and vaping medical marijuana are subject to the same state restrictions that apply to tobacco under Oklahoma's Smoking in Public Places and Indoor Workplaces Act. OMMA specifically states that smoking or vaping medical marijuana outdoors in public, or indoors at a workplace, is subject to these restrictions.",
            ],
          },
          {
            title: "Workplaces & Employer Rights",
            content: [
              "A patient license does not give someone the right to use or possess marijuana at work. Employers generally do not have to permit marijuana use at the workplace, and special rules can apply to safety-sensitive positions.",
            ],
          },
          {
            title: "Sharing Marijuana Is Prohibited",
            content: [
              "A patient cannot simply give their legally purchased Oklahoma cannabis to another person. OMMA states that licensed patients are prohibited from sharing medical marijuana and medical marijuana products with another individual, whether that person is licensed or not.",
            ],
          },
        ],
      },
      {
        id: "what-changed-in-oklahoma-marijuana-law-in-2026",
        title: "What Changed in Oklahoma Marijuana Law in 2026?",
        content: [
          "Several important regulatory developments make 2026 an essential year for Oklahoma's medical cannabis program:",
        ],
        checklists: [
          {
            title: "Key 2026 Oklahoma Regulatory Updates",
            items: [
              {
                heading: "New Physician Requirements (Effective Jan 1, 2026)",
                text: "Physicians recommending medical marijuana must complete mandatory education and maintain active registration with OMMA. Applications with unregistered doctors will be rejected.",
              },
              {
                heading: "OMMA Permanent Rules (Effective July 11, 2026)",
                text: "Incorporate recent legislative measures regarding physician registration, product packaging, testing compliance, and patient identification.",
              },
              {
                heading: "HB 3143 Commercial Moratorium Extended",
                text: "Extends the moratorium on new medical marijuana dispensary, grower, and processor business licenses through August 1, 2028.",
              },
              {
                heading: "Federal Policy Changes",
                text: "Federal rescheduling developments took place in 2026, but recreational cannabis remains unapproved for adult-use without an OMMA medical license in Oklahoma.",
              },
            ],
          },
        ],
      },
      {
        id: "oklahoma-marijuana-laws-at-a-glance",
        title: "Oklahoma Marijuana Laws at a Glance",
        content: [
          "Here is a quick reference guide to cannabis legality and patient allowances across Oklahoma in 2026:",
        ],
        table: {
          title: "Legal Status of Cannabis Activities in Oklahoma (2026)",
          headers: ["Activity", "Legal in Oklahoma in 2026?"],
          rows: [
            {
              activity: "Medical marijuana for licensed patients",
              status: "Yes",
            },
            {
              activity: "Recreational / adult-use marijuana",
              status: "No statewide legalization",
            },
            {
              activity: "Buying from a licensed medical dispensary",
              status: "Yes, for authorized patients",
            },
            {
              activity: "Home cultivation (6 mature + 6 seedlings)",
              status: "Yes, subject to patient limits and rules",
            },
            {
              activity: "Possessing marijuana without authorization",
              status: "Generally unlawful, subject to statutory exceptions",
            },
            {
              activity: "Driving while impaired by marijuana",
              status: "No (Strictly Prohibited)",
            },
            {
              activity: "Public smoking / vaping in non-designated areas",
              status: "Restricted under Clean Indoor Air rules",
            },
            {
              activity: "Sharing medical marijuana with another person",
              status: "No (Prohibited by OMMA)",
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
          "If you are considering applying, renewing, or using a medical marijuana card Oklahoma patients can obtain, check OMMA's current rules before relying on older online information.",
        ],
      },
    ],
    keyTakeaways: [
      "Oklahoma remains strictly a medical marijuana state in 2026; recreational adult-use is illegal.",
      "Patients must hold an approved OMMA license to purchase from dispensaries or grow at home.",
      "Licensed patients can cultivate up to 6 mature plants and 6 seedlings on private property.",
      "Public smoking is regulated under Clean Indoor Air laws, and impaired driving is strictly illegal.",
      "OMMA permanent rules updated on July 11, 2026, establishing enhanced physician registration.",
    ],
    faqs: [],
    relatedSlugs: [],
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
