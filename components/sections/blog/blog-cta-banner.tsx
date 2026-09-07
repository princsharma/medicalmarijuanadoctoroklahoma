import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function BlogCtaBanner() {
  return (
    <section className="bg-[#FAF8F5] px-4 pb-20 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#0E3B2E] via-[#144939] to-[#1A5944] px-8 py-12 sm:px-14 sm:py-16 lg:px-20 lg:py-20 text-white shadow-[0px_8px_30px_rgba(14,59,46,0.18)]">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#B8E89A] uppercase">
            Start Your Oklahoma MMJ Evaluation
          </span>

          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold tracking-tight leading-tight">
            Get Your Oklahoma Medical Marijuana Card 100% Online
          </h2>

          <p className="mt-4 text-base sm:text-lg lg:text-[20px] leading-relaxed text-white/85 max-w-3xl mx-auto">
            Connect with an Oklahoma-licensed doctor via confidential telehealth video in 15 minutes. Same-day appointments with a 100% refund guarantee if not approved.
          </p>

          <div className="mt-8 flex justify-center">
            <BookingButton className="h-auto gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0E3B2E] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95">
              Book Telehealth Consultation <ArrowRight className="size-4" />
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
}

