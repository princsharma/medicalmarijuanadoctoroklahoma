import { BlogPost } from "@/lib/blogs";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

export function blogListSchema(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog/#blog`,
    name: "Medical Marijuana Doctor Oklahoma Educational Guides & Blog",
    description:
      "Explore expert guides, Oklahoma OMMA legal regulations, qualifying health conditions, renewal steps, and cannabis medical insights.",
    url: `${SITE_URL}/blog/`,
    publisher: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/oklahoma-logo.webp`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: `${post.title} ${post.titleSecondary ?? ""}`.trim(),
      url: absoluteUrl(`/blog/${post.slug}/`),
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
        url: absoluteUrl(`/contributors/${post.author.slug}/`),
      },
      image: `${SITE_URL}${post.coverImage}`,
    })),
  };
}

export function blogArticleSchema(post: BlogPost) {
  const fullTitle = `${post.title} ${post.titleSecondary ?? ""}`.trim();
  const articleUrl = absoluteUrl(`/blog/${post.slug}/`);

  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": ["BlogPosting", "MedicalWebPage"],
      "@id": `${articleUrl}#article`,
      url: articleUrl,
      headline: fullTitle,
      description: post.subtitle,
      image: `${SITE_URL}${post.coverImage}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      inLanguage: "en-US",
      mainEntityOfPage: articleUrl,
      author: {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
        url: absoluteUrl(`/contributors/${post.author.slug}/`),
      },
      reviewedBy: {
        "@type": "Person",
        name: post.reviewer.name,
        jobTitle: post.reviewer.role,
        url: absoluteUrl(`/doctors/${post.reviewer.slug}/`),
      },
      publisher: {
        "@type": "MedicalOrganization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/oklahoma-logo.webp`,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
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
          name: "Blog",
          item: `${SITE_URL}/blog/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: fullTitle,
          item: articleUrl,
        },
      ],
    },
  ];

  if (post.faqs && post.faqs.length > 0) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return schema;
}
