import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const mediaDir = path.join(process.cwd(), "public", "media");
const legacyMediaRewrites = fs.existsSync(mediaDir)
  ? fs
      .readdirSync(mediaDir)
      .filter((file) => /\.(?:webp|png|jpe?g|gif|ico)$/i.test(file))
      .map((file) => ({
        source: `/${file}`,
        destination: `/media/${file}`,
      }))
  : [];

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@base-ui/react", "embla-carousel-react"],
  },
  async rewrites() {
    return legacyMediaRewrites;
  },
  async redirects() {
    const homepageRedirects = [
      "services-and-benefits",
      "medical-marijuana-card",
      "our-locations",
      "oklahoma-medical-marijuana-card-renewal-online",
    ];
    const legacyPolicyPaths = [
      "privacy-policy",
      "terms-of-use",
      "hipaa-compliance",
      "consent-for-telehealth",
      "refund-policy",
      "accessibility-statement",
      "editorial-policy",
      "disclaimer",
    ];

    return [
      ...homepageRedirects.flatMap((slug) => [
        {
          source: `/${slug}`,
          destination: "/",
          statusCode: 301,
        },
        {
          source: `/${slug}/`,
          destination: "/",
          statusCode: 301,
        },
      ]),
      {
        source: "/legal",
        destination: "/policy/",
        permanent: true,
      },
      {
        source: "/legal/",
        destination: "/policy/",
        permanent: true,
      },
      {
        source: "/policy/terms-of-use",
        destination: "/policy/terms/",
        statusCode: 301,
      },
      {
        source: "/policy/terms-of-use/",
        destination: "/policy/terms/",
        statusCode: 301,
      },
      {
        source: "/policy/privacy-policy/-0",
        destination: "/policy/privacy-policy/",
        statusCode: 301,
      },
      {
        source: "/policy/privacy-policy/-0/",
        destination: "/policy/privacy-policy/",
        statusCode: 301,
      },
      {
        source: "/policy/refund-policy/-0",
        destination: "/policy/refund-policy/",
        statusCode: 301,
      },
      {
        source: "/policy/refund-policy/-0/",
        destination: "/policy/refund-policy/",
        statusCode: 301,
      },
      {
        source: "/blog/is-marijuana-legal-in-oklahoma",
        destination: "/blog/omma-guidelines/is-marijuana-legal-in-oklahoma/",
        statusCode: 301,
      },
      {
        source: "/blog/is-marijuana-legal-in-oklahoma/",
        destination: "/blog/omma-guidelines/is-marijuana-legal-in-oklahoma/",
        statusCode: 301,
      },
      {
        source: "/blog/oklahoma-cannabis-laws",
        destination: "/blog/omma-guidelines/oklahoma-cannabis-laws/",
        statusCode: 301,
      },
      {
        source: "/blog/oklahoma-cannabis-laws/",
        destination: "/blog/omma-guidelines/oklahoma-cannabis-laws/",
        statusCode: 301,
      },
      ...legacyPolicyPaths.flatMap((slug) => [
        {
          source: `/${slug}`,
          destination: slug === "terms-of-use" ? "/policy/terms/" : `/policy/${slug}/`,
          permanent: true,
        },
        {
          source: `/${slug}/`,
          destination: slug === "terms-of-use" ? "/policy/terms/" : `/policy/${slug}/`,
          permanent: true,
        },
      ]),
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
