import { BookingButton } from "@/components/booking-dialog";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] px-4 pt-12 pb-10 sm:px-6 sm:pt-16 sm:pb-14 lg:px-8 lg:pt-20 lg:pb-16">
      <div className="mx-auto max-w-5xl text-center">
        {/* Title */}
        <h1 className="font-heading text-3xl font-bold tracking-tight text-[#0E3B2E] sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.15]">
          Your Guide to Oklahoma <br className="hidden sm:inline" />
          Medical Marijuana
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5F6B6F] sm:text-lg">
          Expert physician guides, OMMA compliance rules, qualifying health conditions, and cannabis medical insights for Oklahoma patients.
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <BookingButton className="inline-flex h-[50px] items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0E3B2E] to-[#1A5944] pl-6 pr-2 text-base font-semibold text-white shadow-sm transition-all hover:opacity-95 hover:shadow-md">
            <span>Get Your OK MMJ Card</span>
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-[#0E3B2E] shadow-xs">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </BookingButton>

          <a
            href="#featured"
            className="inline-flex h-[50px] items-center gap-2 rounded-full border border-[#0E3B2E]/15 bg-white px-6 text-base font-semibold text-[#0E3B2E] shadow-xs transition-colors hover:bg-[#F6F5F0]"
          >
            Explore Guides
          </a>
        </div>
      </div>
    </section>
  );
}
