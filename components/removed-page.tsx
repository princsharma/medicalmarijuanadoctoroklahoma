import { Info } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function RemovedPage() {
  return (
    <main
      id="main-content"
      className="relative flex min-h-full flex-1 flex-col items-center justify-center overflow-hidden bg-[#E7F3E4] px-6 py-20 text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
        <Info className="size-4" aria-hidden="true" />
        Page No Longer Available • Error 410
      </div>
      <h1 className="mt-8 max-w-4xl font-heading text-4xl font-medium tracking-tight text-[#1F2933] sm:text-5xl">
        This Page Has Been Permanently Removed
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#1F2933]/75 sm:text-lg">
        The content you&apos;re looking for is no longer available and has been removed as part of
        our update, but your path to relief is still right here.
      </p>
      <p className="mt-4 text-base font-semibold text-[#1F2933] sm:text-lg">
        Let&apos;s guide you back to the medical marijuana support you&apos;re looking for.
      </p>
      <BookingButton className="mt-7 h-auto rounded-lg bg-[#1F8A3B] px-6 py-3 text-sm font-bold tracking-wide text-white uppercase hover:bg-[#187432]">
        Start Your MMJ Consultation
      </BookingButton>
      <p className="mt-5 text-sm text-[#1F2933]/70">
        • Quick evaluation • 100% online • HIPAA-compliant
      </p>
      <CannabisLeaf />
    </main>
  );
}

function CannabisLeaf() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 140"
      className="pointer-events-none mt-8 h-24 w-24 text-[#3CB043] sm:absolute sm:top-[58%] sm:right-[6%] sm:mt-0 sm:h-36 sm:w-36 sm:-translate-y-1/2"
    >
      <g fill="currentColor" transform="translate(60 72)">
        <ellipse cx="0" cy="-34" rx="11" ry="32" />
        <ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(28)" />
        <ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(-28)" />
        <ellipse cx="0" cy="-16" rx="9" ry="24" transform="rotate(56)" />
        <ellipse cx="0" cy="-16" rx="9" ry="24" transform="rotate(-56)" />
        <ellipse cx="0" cy="-8" rx="8" ry="18" transform="rotate(84)" />
        <ellipse cx="0" cy="-8" rx="8" ry="18" transform="rotate(-84)" />
        <rect x="-2.5" y="2" width="5" height="34" rx="2.5" />
      </g>
    </svg>
  );
}
