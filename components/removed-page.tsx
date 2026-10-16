import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BookingButton } from "@/components/booking-dialog";

export function RemovedPage() {
  return (
    <div className="flex min-h-full flex-col bg-[#F6F5F0]">
      <SiteHeader />
      <main
        id="main-content"
        className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center"
      >
        <p className="text-[11px] font-semibold tracking-[0.22em] text-[#2F7A18] uppercase">
          Error 410 • Gone
        </p>
        <Image
          src="/media/logo.webp"
          alt="Medical Marijuana Doctor Oklahoma"
          width={360}
          height={92}
          className="mt-6 h-16 w-auto sm:h-20 lg:h-24"
          style={{ width: "auto" }}
          priority
        />
        <h1 className="mt-8 max-w-4xl font-heading text-4xl font-medium tracking-tight text-[#0E3B2E] sm:text-5xl lg:text-6xl">
          This Page Has Been Permanently Removed
        </h1>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-[#0E3B2E]/85">
          The content you&apos;re looking for is no longer available and has been removed as part of
          our site update. Your path to an Oklahoma medical marijuana card is still right here.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <BookingButton className="h-auto rounded-full bg-[#0E3B2E] px-6 py-3 text-sm font-semibold text-white hover:bg-[#124A3A]">
            Start Your MMJ Consultation
          </BookingButton>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#0E3B2E]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/5"
          >
            Go to Homepage
          </Link>
        </div>
        <p className="mt-6 text-sm text-[#0E3B2E]/70">
          Quick evaluation • 100% online • HIPAA-compliant
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
