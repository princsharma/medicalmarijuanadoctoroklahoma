import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function BlogCta({ compactSpacing = false }: { compactSpacing?: boolean }) {
  return (
    <section
      className={`px-6 ${compactSpacing ? "pt-10 pb-12 sm:pt-12 sm:pb-14" : "pt-2 pb-16 sm:pb-20"}`}
    >
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#0E3B2E]/10 bg-[#EAF1EA] px-6 py-12 text-center sm:px-12 sm:py-14">
        <h2 className="font-heading text-2xl font-medium text-[#0E3B2E] sm:text-3xl">
          Ready to Get Your Oklahoma MMJ Card?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[#0E3B2E]/70">
          Connect with a licensed Oklahoma physician for a convenient online medical marijuana
          evaluation.
        </p>
        <div className="mt-8 flex justify-center">
          <BookingButton className="h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90">
            Get Your OK MMJ Card <ArrowRight className="size-4" aria-hidden="true" />
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
