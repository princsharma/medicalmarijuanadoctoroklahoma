import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "410 Gone | Medical Marijuana Doctor Oklahoma",
  description: "This page has been permanently removed from Medical Marijuana Doctor Oklahoma.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/gone/",
  },
};

export default function GonePage() {
  return (
    <div className="flex min-h-full flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">410 GONE</p>
        <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
          This Page Has Been Removed
        </h1>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#0E3B2E]/85">
          The content at this URL is no longer available and will not return. It may have been
          permanently removed as part of a site update.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0E3B2E]/90"
          >
            <Home className="size-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/policy/privacy-policy/"
            className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/5"
          >
            View Policies
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
