export type BlogCategoryArticle = {
  slug: string;
  title: string;
  path: string;
  excerpt: string;
};

export type BlogCategory = {
  slug: string;
  label: string;
  path: string;
  parentPath: "/blog/";
  description: string;
  articles: BlogCategoryArticle[];
};

const TITLE_OVERRIDES: Record<string, string> = {
  omma: "OMMA",
  thc: "THC",
  cbd: "CBD",
  mmj: "MMJ",
  vs: "vs",
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => TITLE_OVERRIDES[part] ?? part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function articlesFor(categorySlug: string, slugs: string[]): BlogCategoryArticle[] {
  return slugs.map((slug) => {
    const title = titleFromSlug(slug);
    return {
      slug,
      title,
      path: `/blog/${categorySlug}/${slug}/`,
      excerpt: `A patient guide on ${title} for Oklahoma medical marijuana patients.`,
    };
  });
}

function category(
  slug: string,
  label: string,
  description: string,
  articleSlugs: string[]
): BlogCategory {
  return {
    slug,
    label,
    path: `/blog/${slug}/`,
    parentPath: "/blog/",
    description,
    articles: articlesFor(slug, articleSlugs),
  };
}

/** Dosage & Usage sits in the center of the filter row. */
export const blogCategories: BlogCategory[] = [
  category(
    "omma-guidelines",
    "OMMA Guidelines",
    "Oklahoma Medical Marijuana Authority rules, legality, taxes, and possession limits for patients.",
    [
      // "is-weed-legal-in-oklahoma",
      // "what-is-omma",
      // "state-question-788",
      // "delta-8-vs-medical-marijuana",
      // "possession-limits",
      // "oklahoma-cannabis-tax",
      // "medical-vs-recreational-oklahoma",
      // "is-medical-card-worth-it",
    ]
  ),
  category(
    "application-guide",
    "Application Guide",
    "How Oklahoma patients apply for a medical marijuana card, common mistakes, and approval timelines.",
    [
      // "omma-approval-time",

      //  "shop-before-card-arrives", 
      //  "card-timeline",
        // "application-mistakes"
      ]
  ),
  category(
    "online-evaluations",
    "Online Evaluations",
    "How online Oklahoma medical marijuana evaluations work and how to choose an OMMA-registered doctor.",
    [
      // "is-online-medical-card-legal",
      // "omma-registered-doctors",
      // "choose-online-mmj-doctor",
      // "online-vs-in-person",
    ]
  ),
  category(
    "dosage-and-usage",
    "Dosage & Usage",
    "Oklahoma patient guides to cannabis products, labels, first dispensary visits, and beginner dosing.",
    [
      // "first-dispensary-visit",
      // "cannabis-product-types",
      // "thc-vs-cbd",
      // "indica-vs-sativa",
      // "edibles-onset-time",
      // "cannabis-for-beginners",
      // "side-effects-interactions",
      // "reading-cannabis-labels",
      // "prepackaged-cannabis-rule",
      // "omma-medication-lockbox",
    ]
  ),
  category(
    "patient-rights",
    "Patient Rights",
    "Privacy, housing, employment, and travel questions for Oklahoma medical marijuana patients.",
    [
      // "are-omma-records-public",
      // "fired-for-positive-thc-test",
      // "renting-with-medical-card",
      // "crossing-state-lines",
      // "traveling-with-medical-marijuana",
      // "using-card-other-states",
    ]
  ),
  category(
    "license-types",
    "License Types",
    "Oklahoma minor, caregiver, and short-term medical marijuana license types and how to apply.",
    [
      // "minor-patient-license",
      // "caregiver-license",
      // "short-term-license",
      // "apply-minor-license",
      // "apply-caregiver-license",
    ]
  ),
  category(
    "card-renewal",
    "Card Renewal",
    "How long an Oklahoma medical marijuana card lasts and how to renew an expired recommendation.",
    [
      // "how-long-card-valid",
      //  "renew-expired-card", 
      //  "renewal-recommendation"
      ]
  ),
];

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogCategoryArticle(categorySlug: string, articleSlug: string) {
  return getBlogCategory(categorySlug)?.articles.find((article) => article.slug === articleSlug);
}

export const blogCategoryLivePaths = blogCategories.flatMap((category) => [
  category.path,
  ...category.articles.map((article) => article.path),
]);
