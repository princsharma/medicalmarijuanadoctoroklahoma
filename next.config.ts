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
  async rewrites() {
    return legacyMediaRewrites;
  },
  async redirects() {
    const homepageRedirects = [
      "services-and-benefits",
      "medical-marijuana-card",
      "how-easy-is-it-to-get-a-medical-card-in-oklahoma",
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
        source: "/policy/terms",
        destination: "/policy/terms-of-use/",
        statusCode: 301,
      },
      {
        source: "/policy/terms/",
        destination: "/policy/terms-of-use/",
        statusCode: 301,
      },
      ...legacyPolicyPaths.flatMap((slug) => [
        {
          source: `/${slug}`,
          destination: `/policy/${slug}/`,
          permanent: true,
        },
        {
          source: `/${slug}/`,
          destination: `/policy/${slug}/`,
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
