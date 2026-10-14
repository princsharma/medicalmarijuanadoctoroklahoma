import {
  contributorSocialOgImage,
  contributors,
  type Contributor,
} from "@/lib/contributors";
import {
  SITE_NAME,
  SITE_URL,
  absoluteOgImageUrl,
  absoluteUrl,
  pages,
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = absoluteOgImageUrl("/oklahoma-logo.webp");
const HERO_IMAGE_ID = absoluteOgImageUrl("/media/contributors-team-social-og.webp");
const CONTRIBUTORS_PATH = pages.contributors.path;
const PAGE_URL = absoluteUrl(CONTRIBUTORS_PATH);
const WEBPAGE_ID = `${PAGE_URL}#webpage`;
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`;
const CONTRIBUTOR_LIST_ID = `${PAGE_URL}#contributorlist`;
const DAALON_PERSON_ID = `${absoluteUrl("/contributors/daalon-b-echols/")}#person`;

const LISTING_DATES = {
  datePublished: "2026-08-05T00:00:00+00:00",
  dateModified: "2026-08-05T00:00:00+00:00",
  lastReviewed: "2026-08-05",
};

function organizationNode() {
  return {
    "@type": ["MedicalOrganization", "MedicalBusiness"],
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: { "@id": LOGO_ID },
    image: { "@id": LOGO_ID },
    description:
      "Medical Marijuana Doctor Oklahoma is a telehealth platform connecting Oklahoma patients with licensed physicians for OMMA-compliant medical marijuana evaluations via secure, HIPAA-compliant video consultations.",
    telephone: "+1-405-445-1637",
    email: "contact@medicalmarijuanadoctoroklahoma.com",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1036 W I-240 Service Road",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      postalCode: "73139",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.3986,
      longitude: -97.5332,
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
          "Sunday",
        ],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-405-445-1637",
        contactType: "customer service",
        areaServed: "US-OK",
        availableLanguage: ["en", "English"],
      },
      {
        "@type": "ContactPoint",
        email: "contact@medicalmarijuanadoctoroklahoma.com",
        contactType: "customer support",
        areaServed: "US-OK",
        availableLanguage: ["en", "English"],
      },
    ],
    areaServed: {
      "@type": "State",
      name: "Oklahoma",
      sameAs: "https://en.wikipedia.org/wiki/Oklahoma",
    },
    knowsAbout: [
      "Medical Cannabis",
      "Oklahoma Medical Marijuana Authority (OMMA)",
      "Telemedicine",
      "Cannabinoid Therapy",
    ],
    publishingPrinciples: absoluteUrl(pages.editorial.path),
    sameAs: [
      "https://maps.app.goo.gl/8HTa3Scrh8eU3Wfi7",
      "https://www.facebook.com/mmjdoctoroklahoma/",
      "https://www.instagram.com/mmjdoctorsoklahoma/",
      "https://www.linkedin.com/company/107855441",
      "https://www.wikidata.org/wiki/Q1649",
    ],
  };
}

function logoImageNode() {
  return {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: LOGO_ID,
    contentUrl: LOGO_ID,
    caption: "Medical Marijuana Doctor Oklahoma Logo",
  };
}

function heroImageNode() {
  return {
    "@type": "ImageObject",
    "@id": HERO_IMAGE_ID,
    url: HERO_IMAGE_ID,
    contentUrl: HERO_IMAGE_ID,
    width: "1200",
    height: "630",
    caption: "Our Medical Content Team | Medical Marijuana Doctor Oklahoma",
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

function listingPersonNode(person: Contributor) {
  const personUrl = absoluteUrl(`/contributors/${person.slug}/`);
  const personId = `${personUrl}#person`;
  const imageUrl = absoluteOgImageUrl(contributorSocialOgImage(person));

  if (person.slug === "robert-d-saint-laurent") {
    return {
      "@type": "Person",
      "@id": personId,
      name: person.name,
      honorificSuffix: person.credentials,
      jobTitle: person.role,
      url: personUrl,
      image: {
        "@type": "ImageObject",
        "@id": imageUrl,
        url: imageUrl,
        caption: "Robert D. Saint Laurent, M.Ed. Medical Writer",
      },
      description:
        "Robert researches and writes educational content, translating Oklahoma's medical marijuana laws and clinical processes into clear, patient-focused resources.",
      worksFor: { "@id": ORG_ID },
      knowsAbout: [
        "Oklahoma Medical Marijuana Laws",
        "OMMA Regulations",
        "Patient Education",
        "Medical Cannabis Research",
      ],
    };
  }

  if (person.slug === "daalon-b-echols") {
    return {
      "@type": ["Person", "Physician"],
      "@id": personId,
      name: person.name,
      honorificSuffix: "MD",
      jobTitle: "Medical Reviewer & Board-Certified Physician",
      url: personUrl,
      image: {
        "@type": "ImageObject",
        "@id": imageUrl,
        url: imageUrl,
        caption: "Daalon B. Echols, MD Medical Reviewer",
      },
      description:
        "Dr. Echols is a board-certified physician who reviews all site content for clinical accuracy, medical compliance, and safety before publication.",
      medicalSpecialty: "PrimaryCare",
      worksFor: { "@id": ORG_ID },
      knowsAbout: [
        "Cannabinoid Medicine",
        "Clinical Evaluations",
        "Telemedicine Consultation",
        "Oklahoma Health Legislation",
      ],
    };
  }

  return {
    "@type": "Person",
    "@id": personId,
    name: person.name,
    honorificSuffix: person.credentials,
    jobTitle: person.role,
    url: personUrl,
    image: imageUrl,
    description: person.shortBio,
    worksFor: { "@id": ORG_ID },
  };
}

export function contributorsListingGraphSchema() {
  const page = pages.contributors;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      logoImageNode(),
      heroImageNode(),
      websiteNode(),
      {
        "@type": ["CollectionPage", "MedicalWebPage"],
        "@id": WEBPAGE_ID,
        url: PAGE_URL,
        name: page.title,
        headline: "Our Medical Content Team",
        description: page.description,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BREADCRUMB_ID },
        mainEntity: { "@id": CONTRIBUTOR_LIST_ID },
        publisher: { "@id": ORG_ID },
        primaryImageOfPage: { "@id": HERO_IMAGE_ID },
        datePublished: LISTING_DATES.datePublished,
        dateModified: LISTING_DATES.dateModified,
        lastReviewed: LISTING_DATES.lastReviewed,
        reviewedBy: { "@id": DAALON_PERSON_ID },
        breadcrumb: { "@id": BREADCRUMB_ID },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "section.pt-16 p", "meta[name='description']"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": BREADCRUMB_ID,
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
            name: "Contributors",
            item: PAGE_URL,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": CONTRIBUTOR_LIST_ID,
        name: "Medical Content Contributors",
        description:
          "Writers and medical reviewers responsible for clinical accuracy and educational content.",
        numberOfItems: contributors.length,
        itemListElement: contributors.map((person, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": `${absoluteUrl(`/contributors/${person.slug}/`)}#person`,
          },
        })),
      },
      ...contributors.map((person) => listingPersonNode(person)),
    ],
  };
}
