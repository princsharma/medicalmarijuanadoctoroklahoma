import type { Metadata } from "next";

export const SITE_URL = "https://medicalmarijuanadoctoroklahoma.com";
/** Canonical host with trailing slash for robots.txt Host / URL normalization. */
export const SITE_HOST = `${SITE_URL}/`;
export const SITE_NAME = "Medical Marijuana Doctor Oklahoma";
export const SITE_TAGLINE = "Get Your Medical Marijuana Card Online in Oklahoma";
export const DEFAULT_OG_IMAGE = "/hero-section.jpg";
export const ABOUT_OG_IMAGE = "/aboutus-hero-section.webp";
export const CONTACT_OG_IMAGE = "/contact-us-hero-section.webp";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/mmjdoctoroklahoma/",
  googleMaps: "https://maps.app.goo.gl/93bMfCu8LaZ78Eb8A",
  instagram: "https://www.instagram.com/mmjdoctorsoklahoma/",
  linkedin: "https://www.linkedin.com/company/107855441",
} as const;

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  ogType?: "website" | "article";
  /** Open Graph / Twitter share image path (public/). Defaults to DEFAULT_OG_IMAGE. */
  ogImage?: string;
};

/** Normalize internal paths to trailing-slash form (except site root). */
export function withTrailingSlash(path: string) {
  if (!path || path === "/") return "/";
  const [pathname, query = ""] = path.split("?");
  const normalized = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return query ? `${normalized}?${query}` : normalized;
}

export const pages = {
  home: {
    path: "/",
    title: "How to Apply for an Oklahoma Medical Marijuana Card Online",
    description:
      "See how Oklahoma residents can apply for a medical marijuana card, including eligibility, physician evaluation, and OMMA steps.",
    datePublished: "2024-01-01",
    dateModified: "2026-08-10",
    changeFrequency: "weekly",
    priority: 1,
  },
  about: {
    path: "/about-us/",
    title: "About Us | Medical Marijuana Doctor Oklahoma",
    description:
      "Learn how Medical Marijuana Doctor Oklahoma connects patients with licensed physicians for secure, compliant MMJ evaluations.",
    datePublished: "2024-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "monthly",
    priority: 0.8,
    ogImage: ABOUT_OG_IMAGE,
  },
  contact: {
    path: "/contact-us/",
    title: "Contact Us | Medical Marijuana Doctor Oklahoma",
    description:
      "Questions about your Oklahoma MMJ card? Contact us by phone, email, or office visit. Real staff respond quickly to help you.",
    datePublished: "2024-01-01",
    dateModified: "2026-08-11",
    changeFrequency: "monthly",
    priority: 0.8,
    ogImage: CONTACT_OG_IMAGE,
  },
  doctors: {
    path: "/doctors/",
    title: "Our Doctors | Medical Marijuana Doctor Oklahoma",
    description:
      "Meet Oklahoma-licensed physicians offering medical marijuana evaluations with fast, secure telehealth visits statewide.",
    datePublished: "2024-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  faq: {
    path: "/faq/",
    title: "FAQ | Medical Marijuana Doctor Oklahoma",
    description:
      "Answers to common questions asked by Oklahoma patients about getting and maintaining a Medical Marijuana Card.",
    datePublished: "2024-01-01",
    dateModified: "2026-08-13",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  reviews: {
    path: "/reviews/",
    title: "Patient Reviews | MMJ Doctor Oklahoma",
    description:
      "Read verified Google reviews from Oklahoma patients who completed medical marijuana evaluations with our licensed doctors.",
    datePublished: "2024-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  privacy: {
    path: "/privacy-policy/",
    title: "Privacy Policy | Medical Marijuana Doctor OK",
    description:
      "See how we collect, use, and protect personal and health information during Oklahoma medical marijuana evaluations.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.4,
    ogType: "article",
  },
  terms: {
    path: "/terms-of-use/",
    title: "Terms of Use | Medical Marijuana Doctor Oklahoma",
    description:
      "Read Terms of Use covering eligibility, telehealth consent, physician relationships, liability, and Oklahoma law.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.4,
    ogType: "article",
  },
  hipaa: {
    path: "/hipaa-compliance/",
    title: "HIPAA Compliance | Medical Marijuana Doctor OK",
    description:
      "See how we protect patient health information and maintain HIPAA compliance during telehealth MMJ evaluations.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.4,
    ogType: "article",
  },
  telehealth: {
    path: "/consent-for-telehealth/",
    title: "Telehealth Consent | Medical Marijuana Doctor OK",
    description:
      "Read our Consent to Telehealth policy to understand remote evaluations with Oklahoma-licensed physicians.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.4,
    ogType: "article",
  },
  refund: {
    path: "/refund-policy/",
    title: "Refund Policy | Medical Marijuana Doctor Oklahoma",
    description:
      "Learn when you qualify for a full refund on your Oklahoma MMJ evaluation, plus missed appointment and request steps.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.4,
    ogType: "article",
  },
  accessibility: {
    path: "/accessibility-statement/",
    title: "Accessibility | Medical Marijuana Doctor Oklahoma",
    description:
      "We follow WCAG 2.1 accessibility standards so every patient can use our Oklahoma telehealth services with ease.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.3,
    ogType: "article",
  },
  editorial: {
    path: "/editorial-policy/",
    title: "Editorial Policy | Medical Marijuana Doctor OK",
    description:
      "See how we ensure accurate, fact-checked medical marijuana content for Oklahoma patients, caregivers, and readers.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.3,
    ogType: "article",
  },
  disclaimer: {
    path: "/disclaimer/",
    title: "Disclaimer | Medical Marijuana Doctor Oklahoma",
    description:
      "Read key disclaimers about our telehealth services, including limits on medical advice and the platform's role.",
    datePublished: "2026-01-01",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.3,
    ogType: "article",
  },
  legal: {
    path: "/legal/",
    title: "Legal Policies | Medical Marijuana Doctor OK",
    description:
      "Browse privacy, HIPAA, telehealth consent, terms, refunds, accessibility, editorial, and disclaimer policies.",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    changeFrequency: "yearly",
    priority: 0.5,
  },
  contributors: {
    path: "/contributors/",
    title: "Our Medical Content Team | Medical Marijuana Doctor OK",
    description:
      "Meet the writer and physician reviewer behind the medical marijuana content on Medical Marijuana Doctor Oklahoma.",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    changeFrequency: "monthly",
    priority: 0.7,
  },
} as const satisfies Record<string, PageSeo>;

export type PageKey = keyof typeof pages;

export function absoluteUrl(path: string) {
  const normalized = path === "/" ? "/" : withTrailingSlash(path);
  return new URL(normalized, SITE_URL).toString();
}

export function clampMetaTitle(title: string, max = 60) {
  if (title.length <= max) return title;
  const cut = title.slice(0, max);
  const at = cut.lastIndexOf(" ");
  return (at > max * 0.6 ? cut.slice(0, at) : cut).trimEnd();
}

export function clampMetaDescription(description: string, max = 130) {
  if (description.length <= max) return description;
  const cut = description.slice(0, max);
  const at = cut.lastIndexOf(" ");
  return (at > max * 0.7 ? cut.slice(0, at) : cut).trimEnd();
}

const OG_IMAGE_SIZES: Record<string, { width: number; height: number }> = {
  [DEFAULT_OG_IMAGE]: { width: 800, height: 550 },
  [ABOUT_OG_IMAGE]: { width: 600, height: 550 },
  [CONTACT_OG_IMAGE]: { width: 500, height: 400 },
};

export function buildMetadata(page: PageSeo, extras?: Metadata): Metadata {
  const url = absoluteUrl(page.path);
  const ogType = page.ogType ?? "website";
  const title = clampMetaTitle(page.title);
  const description = clampMetaDescription(page.description);
  const ogImage = page.ogImage ?? DEFAULT_OG_IMAGE;
  const size = OG_IMAGE_SIZES[ogImage] ?? { width: 1200, height: 630 };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: ogType,
      publishedTime: page.datePublished,
      modifiedTime: page.dateModified,
      images: [
        {
          url: ogImage,
          width: size.width,
          height: size.height,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    other: {
      "article:published_time": page.datePublished,
      "article:modified_time": page.dateModified,
    },
    ...extras,
  };
}

export function doctorMetadata(input: {
  slug: string;
  name: string;
  credentials: string;
  bio: string;
  image: string;
  dateModified?: string;
}): Metadata {
  const path = withTrailingSlash(`/doctors/${input.slug}`);
  const title = clampMetaTitle(
    `Dr. ${input.name}, ${input.credentials} | MMJ Doctor OK`
  );
  const description = clampMetaDescription(input.bio);
  const datePublished = "2024-06-01";
  const dateModified = input.dateModified ?? "2026-08-05";

  return buildMetadata(
    {
      path,
      title,
      description,
      datePublished,
      dateModified,
      ogType: "article",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      openGraph: {
        title,
        description,
        url: absoluteUrl(path),
        siteName: SITE_NAME,
        locale: "en_US",
        type: "article",
        images: [
          {
            url: input.image,
            width: 800,
            height: 1000,
            alt: `Dr. ${input.name}, ${input.credentials}`,
          },
        ],
      },
    }
  );
}

const LOGO_ID = `${SITE_URL}/logo.png`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "MedicalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: { "@id": LOGO_ID },
    image: { "@id": LOGO_ID },
    description:
      "Medical Marijuana Doctor Oklahoma is a telehealth platform connecting Oklahoma patients with licensed physicians for OMMA-compliant medical marijuana evaluations via secure, HIPAA-compliant video consultations.",
    knowsAbout: ["Cannabis Medicine", "Telemedicine"],
    email: "contact@medicalmarijuanadoctoroklahoma.com",
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
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
    },
    sameAs: ["https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7"],
    publishingPrinciples: absoluteUrl(pages.editorial.path),
  };
}

export function logoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: LOGO_ID,
    contentUrl: LOGO_ID,
    caption: "Medical Marijuana Doctor Oklahoma logo",
  };
}

/** Site-level identity / publisher schema for GEO and Knowledge Graph signals. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: pages.home.description,
    inLanguage: "en-US",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function webPageSchema(page: PageSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl(page.path),
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function formatDisplayDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00.000Z`));
}
