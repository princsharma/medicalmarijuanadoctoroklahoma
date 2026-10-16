import { isMarijuanaLegalInOklahomaGraphSchema } from "@/lib/blog/is-marijuana-legal-in-oklahoma-graph";
import { oklahomaCannabisLawsGraphSchema } from "@/lib/blog/oklahoma-cannabis-laws-graph";
import { isMarijuanaLegalInOklahoma } from "@/lib/blog/is-marijuana-legal-in-oklahoma";
import { oklahomaCannabisLaws } from "@/lib/blog/oklahoma-cannabis-laws";
import type { BlogParagraph } from "@/lib/blog/paragraphs";
import { type PageSeo } from "@/lib/seo";

export type BlogSection = {
  id: string;
  title: string;
  paragraphs?: BlogParagraph[];
  bullets?: string[];
  followingParagraphs?: BlogParagraph[];
  inlineCta?: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  table?: {
    headers: [string, string];
    rows: [string, string][];
  };
  subsections?: {
    title: string;
    paragraphs?: BlogParagraph[];
    bullets?: string[];
  }[];
};

export type BlogQuestion = {
  question: string;
  answer: BlogParagraph;
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
    roleLine?: string;
    aboutRoleLine?: string;
    profileKind?: "contributors" | "doctors";
  };
  reviewer: {
    name: string;
    credentials: string;
    slug: string;
    image: string;
    roleLine?: string;
    profileKind?: "contributors" | "doctors";
  };
  keyPoints: string[];
  keyPointsHeading?: string;
  introBeforeKeyPoints?: BlogParagraph[];
  introduction: BlogParagraph[];
  sections: BlogSection[];
  faqs: BlogQuestion[];
  references?: { label: string; href: string }[];
  disclaimer?: string;
};

export const blogPosts: BlogPost[] = [
  isMarijuanaLegalInOklahoma,
  oklahomaCannabisLaws,
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

const BLOG_GRAPH_SCHEMA_SLUGS = new Set([
  "is-marijuana-legal-in-oklahoma",
  "oklahoma-cannabis-laws",
]);

export function blogPostUsesGraphSchema(slug: string) {
  return BLOG_GRAPH_SCHEMA_SLUGS.has(slug);
}

export function blogJsonLdSchema(post: BlogPost) {
  if (post.slug === "is-marijuana-legal-in-oklahoma") {
    return isMarijuanaLegalInOklahomaGraphSchema(post);
  }
  if (post.slug === "oklahoma-cannabis-laws") {
    return oklahomaCannabisLawsGraphSchema(post);
  }
  return articleSchema(post);
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
      url: `https://medicalmarijuanadoctoroklahoma.com/${post.author.profileKind ?? "contributors"}/${post.author.slug}/`,
    },
    editor: {
      "@type": "Person",
      name: post.reviewer.name,
      url: `https://medicalmarijuanadoctoroklahoma.com/${post.reviewer.profileKind ?? "doctors"}/${post.reviewer.slug}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "Medical Marijuana Doctor Oklahoma",
      url: "https://medicalmarijuanadoctoroklahoma.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://medicalmarijuanadoctoroklahoma.com/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://medicalmarijuanadoctoroklahoma.com${post.path}`,
    },
    inLanguage: "en-US",
  };
}
