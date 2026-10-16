import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function NotFound() {
  return (
    <div className="flex min-h-full flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="font-heading text-6xl font-medium tracking-tight text-[#0E3B2E] sm:text-7xl lg:text-8xl">
          404 ERROR
        </p>
        <h1 className="mt-5 font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#0E3B2E]/85">
          The page you are looking for does not exist, may have been moved, or the URL may be
          incorrect. Use the links below to continue.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#124A3A]"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact-us/"
            className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/5"
          >
            Contact Us
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
