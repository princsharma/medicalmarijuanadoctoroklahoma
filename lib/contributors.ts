export type ContributorStat = {
  label: string;
  value: string;
  detail: string;
};

export type ContributorVerifiedProfile = {
  label: string;
  href: string;
};

export type ContributorAlumniOf = {
  name: string;
  sameAs: string;
};

export type ContributorCredential = {
  "@type": "EducationalOccupationalCredential";
  credentialCategory: string;
  name: string;
  recognizedBy: {
    "@type": "EducationalOrganization";
    name: string;
  };
};

export type Contributor = {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  /** Profile image URL used in JSON-LD (may differ from on-page portrait). */
  schemaProfileImage?: string;
  schemaHeadline?: string;
  schemaPersonDescription?: string;
  schemaJobTitle?: string;
  schemaImageCaption?: string;
  knowsAbout?: string[];
  alumniOf?: ContributorAlumniOf | ContributorAlumniOf[];
  hasCredential?: ContributorCredential[];
  tagline: string;
  shortBio: string;
  intro: string;
  about: string[];
  quote: string;
  education: string[];
  experience: string[];
  stats: ContributorStat[];
  glanceIntro: string;
  backgroundIntro: string;
  contactIntro: string;
  linkedinName: string;
  linkedinUrl: string;
  email?: string;
  verifiedProfiles: ContributorVerifiedProfile[];
  verifiedDate: string;
  initials: string;
  accent: string;
  bioCta: string;
  image: string;
};

/** Image path for Open Graph / Twitter cards (prefers schema profile portrait). */
export function contributorSocialOgImage(person: Contributor) {
  return person.schemaProfileImage ?? person.image;
}

export const contributors: Contributor[] = [
  {
    slug: "robert-d-saint-laurent",
    name: "Robert D. Saint Laurent",
    credentials: "M.Ed.",
    role: "Medical Writer",
    tagline: "Health & Medical Content Writer • Editorial Specialist",
    shortBio:
      "Robert researches and writes the educational content on this site, translating Oklahoma's medical marijuana laws and processes into clear, accurate language for patients.",
    intro:
      "Robert D. Saint Laurent is an experienced health and medical content writer and editorial specialist with over three decades of professional experience in content development, education, and fitness sciences. With a strong foundation in both academic instruction and health-focused communication, Robert brings a clear, research-driven, and audience-centered approach to content creation that emphasizes accuracy, clarity, and reader engagement.",
    about: [
      "Robert D. Saint Laurent is an experienced health and medical content writer and editorial specialist with a strong background in research-driven writing, educational content development, and fitness sciences. He holds a Master of Education degree from Bridgewater State University (1999), which has deeply shaped his structured, instructional approach to content development.",
      "Robert has built an extensive career specializing in the development of educational materials that translate complex medical and wellness concepts into accessible, easy-to-understand language. His work reflects a deep commitment to delivering reliable, evidence-based information that supports informed decision-making for diverse audiences.",
    ],
    quote:
      "My goal as a health and medical content writer is to bridge the gap between complex clinical information and everyday readers. Accuracy and clarity are not mutually exclusive - when written well, evidence-based content empowers people to make better decisions about their health.",
    education: [
      "Master of Education (M.Ed.) - Bridgewater State University (1999)",
    ],
    experience: [
      "Health & Medical Content Writer (30+ years)",
      "Editorial Specialist - content accuracy and quality assurance",
      "Development of evidence-based educational healthcare materials",
      "Fitness sciences and wellness content expertise",
    ],
    stats: [
      {
        label: "Writing Experience",
        value: "30+ Years",
        detail: "In health & telehealth content",
      },
      {
        label: "Articles Published",
        value: "55+",
        detail: "Across MMJ educational sites",
      },
      {
        label: "Programs Covered",
        value: "4+",
        detail: "State programs supported",
      },
      {
        label: "Profile Last Verified",
        value: "May 2026",
        detail: "Reviewed by Editorial Team",
      },
    ],
    glanceIntro:
      "Professional experience and editorial expertise supporting every article published by Robert for Medical Marijuana Doctor Oklahoma.",
    backgroundIntro:
      "Academic qualifications, writing experience, and health communication expertise supporting Robert's work on Medical Marijuana Doctor Oklahoma.",
    contactIntro:
      "Have a question about an article or want to suggest a topic? Reach Robert through the channels below, or explore verified profiles for additional professional context.",
    linkedinName: "Robert D. Saint Laurent",
    linkedinUrl: "https://www.linkedin.com/in/robert-saint-laurent-36511419",
    verifiedProfiles: [
      {
        label: "Responsum Health",
        href: "https://responsumhealth.com/team/robert-saint-laurent/",
      },
      {
        label: "Amazon",
        href: "https://www.amazon.com/stores/Robert-D.-SaintLaurent/author/B001KC4JQI",
      },
    ],
    verifiedDate: "May 2026",
    initials: "RS",
    accent: "#0E3B2E",
    bioCta: "View Robert's full bio",
    image: "/media/robert-saint-laurent-author-of-my-mmj-doctor.webp",
    schemaProfileImage: "/media/profile-image-of-robert-saint-laurent.webp",
    schemaHeadline:
      "Robert D. Saint Laurent, M.Ed. - Medical Content Writer & Editorial Specialist",
    schemaPersonDescription:
      "Robert D. Saint Laurent is an experienced health and medical content writer and editorial specialist with over three decades of professional experience in content development, education, and fitness sciences.",
    alumniOf: {
      name: "Bridgewater State University",
      sameAs: "https://en.wikipedia.org/wiki/Bridgewater_State_University",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Master of Education (M.Ed.)",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Bridgewater State University",
        },
      },
    ],
    knowsAbout: [
      "Oklahoma Medical Marijuana Laws",
      "OMMA Regulations",
      "Health & Medical Content Development",
      "Telemedicine Education",
      "Patient Communication",
    ],
  },
  {
    slug: "daalon-b-echols",
    name: "Daalon B. Echols",
    credentials: "MD",
    role: "Medical Reviewer",
    tagline: "Neurologist • Health & Medical Content Writer",
    shortBio:
      "Dr. Echols is a board-certified physician who reviews our content for clinical accuracy before publication.",
    intro:
      "Dr. Echols is a board-certified physician with over 21 years of clinical experience in neurology, neurophysiology, and internal medicine. He brings his extensive clinical background to healthcare writing, helping ensure medical information is clear, reliable, and accessible for patient and general audiences.",
    about: [
      "Dr. Daalon B. Echols is a physician with a strong background in neurology, neurophysiology, and internal medicine. He earned his Bachelor of Arts from Princeton University and his Doctor of Medicine from Washington University in St. Louis, and has spent over 21 years treating patients with complex neurological and medical conditions. His clinical experience includes patient evaluation, long-term disease management, and developing individualized treatment plans.",
      "Dr. Echols combines his clinical expertise with healthcare writing to create accurate, patient-friendly content. He specializes in explaining complex medical topics, including medical cannabis and the evaluation of qualifying conditions for treatment eligibility.",
    ],
    quote:
      "My goal is to bridge the gap between complex medical science and everyday patients - delivering clear, evidence-based information that helps people make informed decisions about their health and treatment options.",
    education: [
      "Bachelor of Arts - Princeton University",
      "Doctor of Medicine - Washington University in St. Louis",
      "Specialization in Neurology & Neurophysiology",
    ],
    experience: [
      "Board-certified neurologist - 21+ years in clinical practice",
      "Patient evaluation and long-term disease management",
      "Medical writer - clinical accuracy, patient education, evidence-based communication",
    ],
    stats: [
      {
        label: "Writing Experience",
        value: "21 Years",
        detail: "Years of Clinical Experience",
      },
      {
        label: "Articles Published",
        value: "13+",
        detail: "Across MMJ educational sites",
      },
      {
        label: "Programs Covered",
        value: "6",
        detail: "Programs Covered",
      },
      {
        label: "Profile Last Verified",
        value: "June 2026",
        detail: "Reviewed by Editorial Team",
      },
    ],
    glanceIntro:
      "Clinical experience and professional credentials support every article reviewed by Dr. Echols for Medical Marijuana Doctor Oklahoma.",
    backgroundIntro:
      "Clinical qualifications, training, and patient care expertise supporting Dr. Daalon Echols' work as a physician and medical reviewer.",
    contactIntro:
      "Have a question about one of Dr. Daalon Echols' articles or a healthcare topic you'd like to see covered? Review his credentials and professional information below.",
    linkedinName: "Daalon Echols",
    linkedinUrl: "https://www.linkedin.com/in/daalon-echols",
    verifiedProfiles: [
      {
        label: "NPIDB",
        href:
          "https://npidb.org/doctors/allopathic_osteopathic_physicians/neurology_2084n0400x/1619089166.aspx",
      },
      {
        label: "NPI Registry",
        href: "https://npiregistry.cms.hhs.gov/provider-view/1619089166",
      },
      {
        label: "WebMD",
        href:
          "https://doctor.webmd.com/doctor/daalon-echols-a5bee825-0168-4f3d-953d-9326130136ce-overview",
      },
    ],
    verifiedDate: "June 2026",
    initials: "DE",
    accent: "#2F7A18",
    bioCta: "View Dr. Echols' full bio",
    image: "/media/profile-image-of-daalon-echols.webp",
    schemaProfileImage: "/media/profile-image-of-daalon-echols.webp",
    schemaHeadline:
      "Dr. Daalon B. Echols, MD - Board-Certified Neurologist & Medical Reviewer",
    schemaPersonDescription:
      "Dr. Echols is a board-certified physician with over 21 years of clinical experience in neurology, neurophysiology, and internal medicine. He reviews content for clinical accuracy, patient education, and evidence-based communication.",
    schemaJobTitle:
      "Neurologist • Health & Medical Content Writer • Medical Reviewer",
    schemaImageCaption: "Daalon B. Echols, MD Medical Reviewer",
    alumniOf: [
      {
        name: "Princeton University",
        sameAs: "https://en.wikipedia.org/wiki/Princeton_University",
      },
      {
        name: "Washington University in St. Louis",
        sameAs: "https://en.wikipedia.org/wiki/Washington_University_in_St._Louis",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Doctor of Medicine (MD)",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Washington University in St. Louis",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Bachelor of Arts (BA)",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Princeton University",
        },
      },
    ],
    knowsAbout: [
      "Neurology",
      "Neurophysiology",
      "Internal Medicine",
      "Medical Cannabis Evaluation",
      "Clinical Quality Review",
    ],
  },
];

export function getContributor(slug: string) {
  return contributors.find((contributor) => contributor.slug === slug);
}
