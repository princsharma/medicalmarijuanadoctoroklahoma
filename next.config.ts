import type { NextConfig } from "next";

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
  async redirects() {
    return [
      { source: "/legal", destination: "/policy/", permanent: true },
      { source: "/legal/", destination: "/policy/", permanent: true },
      {
        source: "/privacy-policy",
        destination: "/policy/privacy-policy/",
        permanent: true,
      },
      {
        source: "/privacy-policy/",
        destination: "/policy/privacy-policy/",
        permanent: true,
      },
      {
        source: "/terms-of-use",
        destination: "/policy/terms/",
        permanent: true,
      },
      {
        source: "/terms-of-use/",
        destination: "/policy/terms/",
        permanent: true,
      },
      {
        source: "/hipaa-compliance",
        destination: "/policy/hipaa-compliance/",
        permanent: true,
      },
      {
        source: "/hipaa-compliance/",
        destination: "/policy/hipaa-compliance/",
        permanent: true,
      },
      {
        source: "/consent-for-telehealth",
        destination: "/policy/consent-for-telehealth/",
        permanent: true,
      },
      {
        source: "/consent-for-telehealth/",
        destination: "/policy/consent-for-telehealth/",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/policy/refund-policy/",
        permanent: true,
      },
      {
        source: "/refund-policy/",
        destination: "/policy/refund-policy/",
        permanent: true,
      },
      {
        source: "/accessibility-statement",
        destination: "/policy/accessibility-statement/",
        permanent: true,
      },
      {
        source: "/accessibility-statement/",
        destination: "/policy/accessibility-statement/",
        permanent: true,
      },
      {
        source: "/editorial-policy",
        destination: "/policy/editorial-policy/",
        permanent: true,
      },
      {
        source: "/editorial-policy/",
        destination: "/policy/editorial-policy/",
        permanent: true,
      },
      {
        source: "/disclaimer",
        destination: "/policy/disclaimer/",
        permanent: true,
      },
      {
        source: "/disclaimer/",
        destination: "/policy/disclaimer/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
