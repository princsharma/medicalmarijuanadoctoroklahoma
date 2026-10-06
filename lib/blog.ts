import { BLOG_OG_IMAGE, type PageSeo } from "@/lib/seo";

export type BlogSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
};

export type BlogQuestion = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  focusKeyword: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    credentials: string;
    slug: string;
    image: string;
    bio: string;
  };
  reviewer: {
    name: string;
    credentials: string;
    slug: string;
    image: string;
  };
  keyPoints: string[];
  introduction: string[];
  sections: BlogSection[];
  faqs: BlogQuestion[];
  references?: { label: string; href: string }[];
  disclaimer?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "oklahoma-cannabis-laws",
    path: "/blog/oklahoma-cannabis-laws/",
    title: "Oklahoma Cannabis Laws Explained",
    subtitle: "Medical Marijuana Rules for 2026",
    excerpt:
      "Oklahoma cannabis laws explained for 2026, including medical marijuana, possession limits, home cultivation, licenses, and restrictions.",
    category: "OMMA Guidelines",
    focusKeyword: "Oklahoma Cannabis Laws",
    metaTitle: "Oklahoma Cannabis Laws 2026: Medical Marijuana Rules",
    metaDescription:
      "Oklahoma cannabis laws explained for 2026, including medical marijuana, possession limits, home cultivation, licenses, and restrictions.",
    image: BLOG_OG_IMAGE,
    imageAlt:
      "Medical marijuana flower and medicine beside a physician reviewing a patient file",
    publishedAt: "2024-06-19",
    updatedAt: "2026-08-15",
    author: {
      name: "Carrie Gessler",
      credentials: "MSN, NP-C",
      slug: "carrie-gessler",
      image: "/carrie-gessler-msn.webp",
      bio: "Carrie Gessler is a health and medical content writer who creates clear, patient-centered information about medical marijuana laws and regulations.",
    },
    reviewer: {
      name: "Rick Rieser",
      credentials: "Medical Doctor (MD)",
      slug: "rick-rieser",
      image: "/dr-rick-rieser.webp",
    },
    keyPoints: [
      "Oklahoma legalized medical marijuana in 2018, but recreational marijuana remains illegal statewide.",
      "Eligible patients need an OMMA patient license to legally purchase medical marijuana.",
      "Licensed patients can possess up to 6 mature and 6 seedling plants at home, subject to state rules.",
      "Medical marijuana use is restricted in certain public places, workplaces, and while driving impaired.",
      "Physician recommendation rules changed in 2026 for patients, physicians, and businesses.",
    ],
    introduction: [
      "Oklahoma has a medical marijuana program, but it does not have a general adult-use marijuana program. Medical marijuana is legal for eligible patients with a state-issued patient license; recreational marijuana remains illegal.",
      "A patient license also comes with limits. Patients must follow rules for possession, purchasing, home cultivation, and where they use medical marijuana.",
      "This guide explains Oklahoma cannabis laws, including patient eligibility, possession limits, cultivation, restrictions, and physician recommendation requirements described for 2026.",
    ],
    sections: [
      {
        id: "is-cannabis-legal",
        title: "Is Cannabis Legal in Oklahoma?",
        paragraphs: [
          "Medical marijuana is legal in Oklahoma. Voters approved State Question 788 (SQ 788) on June 26, 2018, legalizing medical marijuana for eligible patients and establishing a state-regulated program.",
          "Patients can access medical marijuana with a recommendation from a licensed physician. Oklahoma does not limit eligibility to a fixed list of qualifying conditions; a physician may recommend medical marijuana when they believe it may benefit a patient.",
          "The Oklahoma Medical Marijuana Authority (OMMA) regulates the state program. Recreational marijuana remains illegal, and patients must meet program requirements to receive the legal protections provided under state law.",
        ],
      },
      {
        id: "omma-role",
        title: "What Is OMMA's Role in Oklahoma's Medical Marijuana Program?",
        paragraphs: [
          "OMMA is the state agency responsible for regulating Oklahoma's medical marijuana program. It became an independent state agency in 2022. Its responsibilities include:",
        ],
        bullets: [
          "Processing patient and commercial license applications",
          "Regulating licensed medical marijuana businesses",
          "Facilitating the rulemaking process",
          "Enforcing medical marijuana laws and investigating possible violations",
          "Overseeing compliance within the state's regulated medical marijuana market",
        ],
      },
      {
        id: "who-can-use",
        title: "Who Can Use Medical Cannabis in Oklahoma?",
        paragraphs: [
          "Adults and minors may qualify for medical marijuana, but the requirements differ by age:",
        ],
        bullets: [
          "Adults 18 and older who are Oklahoma residents can apply for an adult medical marijuana license through OMMA.",
          "Patients under 18 may qualify for a minor patient license with recommendations from two registered physicians and consent from a parent or legal guardian. The parent or guardian can purchase medical marijuana for the minor.",
        ],
      },
      {
        id: "possession-limits",
        title: "Oklahoma Medical Marijuana Possession Limits",
        paragraphs: [
          "Licensed patients may possess specific amounts of marijuana and marijuana products for personal medical use. Limits vary by product type and where the marijuana is kept. A licensed patient may possess:",
        ],
        bullets: [
          "Up to 3 ounces of marijuana on their person",
          "Up to 8 ounces of marijuana at their residence",
          "Up to 1 ounce of concentrated marijuana",
          "Up to 72 ounces of edible marijuana",
          "Up to 72 ounces of topical marijuana",
        ],
        subsections: [
          {
            title: "Purchases and product limits",
            paragraphs: [
              "Possession limits determine how much medical marijuana a licensed patient may legally have. Dispensaries must also follow state requirements for the sale and packaging of medical marijuana products.",
            ],
          },
        ],
      },
      {
        id: "home-cultivation",
        title: "Cannabis Home Cultivation Laws in Oklahoma",
        paragraphs: [
          "Patients may grow marijuana on property they own. Growing on rented property requires written permission from the landlord. A licensed patient may possess:",
        ],
        bullets: [
          "Up to 6 mature marijuana plants",
          "Up to 6 seedling plants",
          "Marijuana harvested from the mature plants",
        ],
        subsections: [
          {
            title: "Restrictions on home cultivation",
            paragraphs: [
              "The amount of harvested marijuana must remain within the applicable possession limits. Home-grown cannabis must be kept out of plain view from neighboring streets, including from a person with normal 20/20 vision standing on a street next to the property.",
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
        bullets: [
          "OMMA registration and education: Physicians must register with OMMA and complete the required medical marijuana education before providing new recommendations. Registration takes effect only after OMMA approval.",
          "Professional standards: Physicians must remain in good standing with the appropriate Oklahoma medical board and follow accepted standards that a reasonable and prudent physician would use when recommending medication.",
          "Dispensary location restrictions: A recommending physician cannot be located at the same physical address as a dispensary. The restriction also applies to virtual appointments when the patient is physically at a dispensary.",
          "Verify your physician: Patients should confirm that their physician is properly registered and approved by OMMA before receiving a recommendation.",
          "Recommendation timing: A physician recommendation must be dated within 30 days of the patient's application. An adult patient's application can be rejected if the recommendation comes from an unqualified or unregistered physician.",
        ],
      },
      {
        id: "get-medical-marijuana-card",
        title: "How to Get an Oklahoma Medical Marijuana Card",
        paragraphs: [
          "Getting an Oklahoma medical marijuana card involves a few basic steps:",
        ],
        bullets: [
          "An eligible Oklahoma resident obtains a recommendation from an authorized physician. The recommendation must be dated within 30 days of submitting the application.",
          "The patient submits an online application to OMMA with proof of identity, Oklahoma residency, a photo, and the physician recommendation. Adult licenses can be valid for up to two years.",
          "OMMA generally processes patient applications within 14 business days.",
          "Once approved, the patient can use the license to purchase medical marijuana from licensed dispensaries.",
        ],
      },
      {
        id: "what-is-illegal",
        title: "What Is Illegal Under Oklahoma Marijuana Law?",
        paragraphs: [
          "A medical marijuana license provides legal protections for medical use, but it does not allow unrestricted cannabis activity. The following remain prohibited:",
        ],
        bullets: [
          "Using recreational marijuana without a valid medical marijuana license",
          "Selling, sharing, or distributing medical marijuana outside the legal system",
          "Exceeding Oklahoma's legal possession limits",
          "Growing more plants than Oklahoma's cultivation limits allow",
          "Using cannabis in prohibited locations or circumstances",
          "Driving or operating a vehicle while impaired by marijuana",
        ],
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "Medical marijuana access in Oklahoma requires the appropriate patient license and compliance with current state rules. A license provides specific legal protections, but patients must still follow the state's limits on possession, purchasing, cultivation, and use.",
          "Regulations can change, so check the latest OMMA requirements before using medical marijuana. If you need assistance applying for your MMJ card, Medical Marijuana Doctor Oklahoma connects patients with a state-licensed doctor through an audio or video consultation. If the doctor determines that you qualify, they can provide the appropriate recommendation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take to get an Oklahoma medical marijuana license?",
        answer:
          "OMMA generally processes new and renewal patient license applications within 14 business days. Approved applicants may need another one or two business days for the license card to be printed.",
      },
      {
        question: "How long is an Oklahoma medical marijuana license valid?",
        answer:
          "A standard adult or minor patient license is valid for up to two years. Oklahoma also offers short-term licenses valid for 60 days, while out-of-state temporary licenses are valid for 30 days.",
      },
      {
        question: "Can a caregiver buy medical marijuana for a patient?",
        answer:
          "Yes. A licensed caregiver can buy, transport, possess, and administer medical marijuana for a designated patient. The physician must document that the patient needs a caregiver, and the required caregiver designation must be completed.",
      },
      {
        question: "Can visitors get an Oklahoma medical marijuana license?",
        answer:
          "Yes. Non-Oklahoma residents with a valid medical marijuana license from another state can apply for an out-of-state temporary license. It is valid for 30 days and allows eligible visitors to legally buy, use, and grow medical marijuana in Oklahoma.",
      },
      {
        question: "Can you renew an Oklahoma medical marijuana license?",
        answer:
          "Yes. Patients can submit a renewal application through OMMA. Renewal applications are generally processed within 14 business days, so patients should apply before their current license expires.",
      },
      {
        question: "Where can you legally buy medical marijuana in Oklahoma?",
        answer:
          "Licensed patients can purchase medical marijuana from OMMA-licensed dispensaries. Patients must present valid proof of their medical marijuana license, and dispensaries must verify the license.",
      },
    ],
    references: [
      {
        label: "Oklahoma State Question 788",
        href: "https://oklahoma.gov/content/dam/ok/en/omma/docs/sq_788_1.pdf",
      },
      {
        label: "OMMA Patient Rights & Responsibilities",
        href: "https://oklahoma.gov/omma/patients-caregivers/patient-rights-and-responsibilities.html",
      },
      {
        label: "Oklahoma Medical Marijuana Authority",
        href: "https://oklahoma.gov/omma.html",
      },
    ],
    disclaimer:
      "This article is for educational purposes only and does not constitute medical, legal, or professional advice. Oklahoma cannabis laws and regulations can change, and individual circumstances may affect how the law applies. Always check the latest requirements from the Oklahoma Medical Marijuana Authority (OMMA) or consult a qualified professional for guidance specific to your situation.",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function blogPostSeo(post: BlogPost): PageSeo {
  return {
    path: post.path,
    title: post.metaTitle,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
    ogType: "article",
    ogImage: post.image,
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.metaTitle,
    description: post.metaDescription,
    image: [post.image],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: `https://medicalmarijuanadoctoroklahoma.com/contributors/${post.author.slug}/`,
    },
    editor: {
      "@type": "Person",
      name: post.reviewer.name,
      url: `https://medicalmarijuanadoctoroklahoma.com/doctors/${post.reviewer.slug}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "Medical Marijuana Doctor Oklahoma",
      url: "https://medicalmarijuanadoctoroklahoma.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://medicalmarijuanadoctoroklahoma.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://medicalmarijuanadoctoroklahoma.com${post.path}`,
    },
    inLanguage: "en-US",
  };
}
