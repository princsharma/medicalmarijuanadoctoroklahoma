import type { Contributor } from "@/lib/contributors";
import {
  SITE_NAME,
  SITE_URL,
  absoluteOgImageUrl,
  absoluteUrl,
  pages,
  withTrailingSlash,
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const ORG_LOGO = absoluteOgImageUrl("/logo.webp");

const CONTRIBUTOR_PAGE_DATES = {
  datePublished: "2026-08-05T00:00:00+00:00",
  dateModified: "2026-08-05T00:00:00+00:00",
};

function contributorOrganizationNode() {
  return {
    "@type": ["MedicalOrganization", "MedicalBusiness"],
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: ORG_LOGO,
    image: ORG_LOGO,
    description:
      "Medical Marijuana Doctor Oklahoma connects Oklahoma patients with licensed physicians for OMMA-compliant medical marijuana evaluations via secure telehealth.",
    telephone: "+1-405-445-1637",
    email: "contact@medicalmarijuanadoctoroklahoma.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1036 W I-240 Service Road",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      postalCode: "73139",
      addressCountry: "US",
    },
    sameAs: [
      "https://maps.app.goo.gl/93bMfCu8LaZ78Eb8A",
      "https://www.facebook.com/mmjdoctoroklahoma/",
      "https://www.instagram.com/mmjdoctorsoklahoma/",
      "https://www.linkedin.com/company/107855441",
    ],
  };
}

export function contributorProfileGraphSchema(person: Contributor) {
  const path = withTrailingSlash(`/contributors/${person.slug}`);
  const pageUrl = absoluteUrl(path);
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const webpageId = `${pageUrl}#webpage`;
  const personId = `${pageUrl}#person`;
  const pageTitle = `${person.name} | Medical Content Team`;
  const profileImagePath = person.schemaProfileImage ?? person.image;
  const profileImageUrl = absoluteOgImageUrl(profileImagePath);
  const headline =
    person.schemaHeadline ??
    `${person.name}, ${person.credentials} - ${person.role}`;
  const personDescription = person.schemaPersonDescription ?? person.intro;
  const imageCaption =
    person.schemaImageCaption ??
    `${person.name}, ${person.credentials} ${person.role}`;

  const personNode: Record<string, unknown> = {
    "@type": "Person",
    "@id": personId,
    name: person.name,
    honorificSuffix: person.credentials,
    jobTitle: person.schemaJobTitle ?? person.tagline,
    url: pageUrl,
    image: profileImageUrl,
    description: personDescription,
    email: person.email ?? "contact@medicalmarijuanadoctoroklahoma.com",
    worksFor: { "@id": ORG_ID },
  };

  if (person.alumniOf) {
    const alumniList = Array.isArray(person.alumniOf)
      ? person.alumniOf
      : [person.alumniOf];
    personNode.alumniOf = alumniList.map((school) => ({
      "@type": "EducationalOrganization",
      name: school.name,
      sameAs: school.sameAs,
    }));
  }

  if (person.hasCredential?.length) {
    personNode.hasCredential = person.hasCredential;
  }

  if (person.knowsAbout?.length) {
    personNode.knowsAbout = person.knowsAbout;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      contributorOrganizationNode(),
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
            name: "Contributors",
            item: absoluteUrl(pages.contributors.path),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: person.name,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": webpageId,
        url: pageUrl,
        name: pageTitle,
        headline,
        description: person.shortBio,
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": WEBSITE_ID,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
        },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": profileImageUrl,
          url: profileImageUrl,
          caption: imageCaption,
        },
        datePublished: CONTRIBUTOR_PAGE_DATES.datePublished,
        dateModified: CONTRIBUTOR_PAGE_DATES.dateModified,
        mainEntity: { "@id": personId },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "main p:first-of-type", "meta[name='description']"],
        },
      },
      personNode,
    ],
  };
}
