import type { BlogPost } from "@/lib/blog";
import { faqAnswerPlainText } from "@/lib/blog/faq-text";
import {
  SITE_NAME,
  SITE_URL,
  absoluteOgImageUrl,
  absoluteUrl,
  pages,
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ORG_LOGO_URL = absoluteOgImageUrl("/oklahoma-logo.webp");

const OKLAHOMA_ADMIN_AREA = {
  "@type": "AdministrativeArea",
  name: "Oklahoma",
  sameAs: [
    "https://en.wikipedia.org/wiki/Oklahoma",
    "https://www.wikidata.org/wiki/Q1649",
  ],
};

const ORG_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1036 W I-240 Service Road",
  addressLocality: "Oklahoma City",
  addressRegion: "OK",
  postalCode: "73139",
  addressCountry: "US",
};

function organizationNode() {
  return {
    "@type": "MedicalOrganization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: `${SITE_URL}/`,
    image: ORG_LOGO_URL,
    logo: {
      "@type": "ImageObject",
      "@id": ORG_LOGO_URL,
      url: ORG_LOGO_URL,
      contentUrl: ORG_LOGO_URL,
      caption: `${SITE_NAME} logo`,
    },
    description:
      "Medical Marijuana Doctor Oklahoma is a telehealth platform connecting Oklahoma patients with licensed physicians for OMMA-compliant medical marijuana evaluations via secure, HIPAA-compliant video consultations.",
    telephone: "+1-405-445-1637",
    email: "contact@medicalmarijuanadoctoroklahoma.com",
    priceRange: "$$",
    knowsAbout: [
      "Medical Cannabis",
      "Telemedicine",
      "OMMA Patient Licensing",
      "Cannabis Health Evaluations",
    ],
    address: ORG_ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.3907522,
      longitude: -97.5349792,
    },
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
      sameAs: [
        "https://en.wikipedia.org/wiki/Oklahoma",
        "https://www.wikidata.org/wiki/Q1649",
      ],
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "00:00",
        closes: "00:00",
      },
    ],
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
    sameAs: [
      "https://www.facebook.com/mmjdoctoroklahoma/",
      "https://www.instagram.com/mmjdoctorsoklahoma/",
      "https://www.linkedin.com/company/107855441",
      "https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7",
    ],
    publishingPrinciples: absoluteUrl(pages.editorial.path),
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description:
      "See how Oklahoma residents can apply for a medical marijuana card, including eligibility, physician evaluation, and OMMA steps.",
    inLanguage: "en-US",
    publisher: { "@id": ORG_ID },
  };
}

function authorNode(post: BlogPost) {
  const authorUrl = absoluteUrl(`/contributors/${post.author.slug}/`);
  const authorId = `${authorUrl}#author`;

  return {
    "@type": "Person",
    "@id": authorId,
    name: post.author.name,
    jobTitle: "Physician & Medical Content Specialist",
    honorificSuffix: "MD",
    description:
      "Dr. Echols is a board-certified physician who reviews our content for clinical accuracy before publication.",
    image: absoluteOgImageUrl("/media/profile-image-of-daalon-echols.webp"),
    url: authorUrl,
    knowsAbout: [
      "Oklahoma Cannabis Laws",
      "OMMA Regulations",
      "Medical Marijuana Programs",
      "Clinical Accuracy",
    ],
    worksFor: { "@id": ORG_ID },
    sameAs: [authorUrl],
  };
}

function reviewerNode(post: BlogPost) {
  const physicianUrl = absoluteUrl(`/doctors/${post.reviewer.slug}/`);
  const physicianId = `${physicianUrl}#physician`;
  const reviewerName = post.reviewer.name.startsWith("Dr.")
    ? post.reviewer.name
    : `Dr. ${post.reviewer.name}`;

  return {
    "@type": "Person",
    "@id": physicianId,
    name: reviewerName,
    jobTitle: "Board-Certified Physician & Medical Cannabis Specialist",
    honorificPrefix: "Dr.",
    honorificSuffix: "DO",
    description:
      "Board-certified physician providing thorough, regulation-compliant OMMA medical marijuana evaluations and telehealth consultations.",
    image: absoluteOgImageUrl("/doctor-kevin-kargman.webp"),
    url: physicianUrl,
    telephone: "+1-405-445-1637",
    priceRange: "$$",
    address: ORG_ADDRESS,
    knowsAbout: [
      "Medical Cannabis",
      "Cannabinoid Medicine",
      "Telemedicine",
      "OMMA Evaluations",
      "Oklahoma Cannabis Laws",
    ],
    worksFor: { "@id": ORG_ID },
    sameAs: [physicianUrl],
  };
}

function articleAboutEntities() {
  return [
    {
      "@type": "Legislation",
      name: "Oklahoma State Question 788",
      alternateName: "SQ 788",
      legislationJurisdiction: OKLAHOMA_ADMIN_AREA,
      sameAs: [
        "https://ballotpedia.org/Oklahoma_State_Question_788,_Medical_Marijuana_Legalization_Initiative_(June_2018)",
        "https://www.wikidata.org/wiki/Q28404287",
      ],
    },
    {
      "@type": "GovernmentPermit",
      name: "Oklahoma OMMA Medical Marijuana Patient License",
      validIn: OKLAHOMA_ADMIN_AREA,
      issuedBy: {
        "@type": "GovernmentOrganization",
        name: "Oklahoma Medical Marijuana Authority",
        alternateName: "OMMA",
        url: "https://oklahoma.gov/omma.html",
        sameAs: ["https://oklahoma.gov/omma/rules-and-legislation/rules.html"],
      },
    },
    {
      "@type": "MedicalTherapy",
      name: "Medical Cannabis",
      alternateName: "Medical Marijuana",
      sameAs: [
        "https://en.wikipedia.org/wiki/Medical_cannabis",
        "https://www.wikidata.org/wiki/Q853401",
      ],
    },
  ];
}

function isoDateMidnightUtc(isoDate: string) {
  return `${isoDate}T00:00:00+00:00`;
}

export function oklahomaCannabisLawsGraphSchema(post: BlogPost) {
  const pageUrl = absoluteUrl(post.path);
  const articleId = `${pageUrl}#article`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;
  const authorUrl = absoluteUrl(`/contributors/${post.author.slug}/`);
  const physicianUrl = absoluteUrl(`/doctors/${post.reviewer.slug}/`);
  const imageUrl = absoluteOgImageUrl(post.image);
  const alternativeHeadline = post.subtitle
    ? `${post.title}: ${post.subtitle}`
    : post.title;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      websiteNode(),
      authorNode(post),
      reviewerNode(post),
      {
        "@type": ["BlogPosting", "MedicalWebPage"],
        "@id": articleId,
        isPartOf: { "@id": WEBSITE_ID },
        url: pageUrl,
        headline: post.metaTitle,
        alternativeHeadline,
        description: post.metaDescription,
        image: {
          "@type": "ImageObject",
          "@id": imageUrl,
          url: imageUrl,
          width: 1200,
          height: 800,
          caption: post.imageAlt,
        },
        datePublished: isoDateMidnightUtc(post.publishedAt),
        dateModified: isoDateMidnightUtc(post.updatedAt),
        lastReviewed: post.updatedAt,
        inLanguage: "en-US",
        mainEntityOfPage: pageUrl,
        author: { "@id": `${authorUrl}#author` },
        reviewedBy: { "@id": `${physicianUrl}#physician` },
        publisher: { "@id": ORG_ID },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["meta[name='description']", "h1"],
        },
        about: articleAboutEntities(),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog & Guides",
            item: absoluteUrl(pages.blog.path),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faqAnswerPlainText(faq.answer),
          },
        })),
      },
    ],
  };
}
