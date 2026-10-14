import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Geist_Mono, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ConsultQueryOpener } from "@/components/booking-dialog";
import { JsonLd } from "@/components/seo/json-ld";
import {
  absoluteOgImageUrl,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  organizationSchema,
  pages,
} from "@/lib/seo";

const defaultOgImageUrl = absoluteOgImageUrl(DEFAULT_OG_IMAGE);

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: pages.home.title,
    absolute: pages.home.title,
  },
  description: pages.home.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Oklahoma medical marijuana doctor",
    "MMJ card Oklahoma",
    "medical marijuana evaluation",
    "OMMA card",
    "telehealth cannabis doctor Oklahoma",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: pages.home.title,
    description: pages.home.description,
    images: [
      {
        url: defaultOgImageUrl,
        secureUrl: defaultOgImageUrl,
        width: 800,
        height: 550,
        alt: SITE_NAME,
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pages.home.title,
    description: pages.home.description,
    images: [{ url: defaultOgImageUrl, alt: SITE_NAME }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/media/favicon.webp", sizes: "any", type: "image/webp" },
      { url: "/media/favicon-16x16.webp", sizes: "16x16", type: "image/webp" },
      { url: "/media/favicon-32x32.webp", sizes: "32x32", type: "image/webp" },
    ],
    apple: [{ url: "/media/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" }],
  },
  manifest: "/site.webmanifest",
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E3B2E",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistMono.variable,
        "font-sans",
        inter.variable,
        fraunces.variable
      )}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationSchema()} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#0E3B2E] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        {children}
        <Suspense fallback={null}>
          <ConsultQueryOpener />
        </Suspense>
      </body>
    </html>
  );
}
