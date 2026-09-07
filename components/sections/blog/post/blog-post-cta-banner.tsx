import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function BlogPostCtaBanner() {
  return (
    <section className="w-full bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div
          className="w-full rounded-[28px] sm:rounded-[36px] px-8 py-12 sm:px-14 sm:py-16 lg:px-20 lg:py-20 text-center text-[#FAF7F2] shadow-[0px_8px_30px_rgba(14,59,46,0.18)] relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
        >
          <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#B8E89A] uppercase">
              Online Telehealth Evaluations
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold text-[#FAF7F2] leading-tight sm:leading-[52px] lg:leading-[60px] tracking-[-0.0066em]">
              Need help with your Oklahoma MMJ card?
            </h2>

            <p className="text-[#FAF7F2]/90 text-base sm:text-lg lg:text-[20px] font-medium leading-[28px] sm:leading-[34px] font-sans max-w-3xl mx-auto">
              Connect with an Oklahoma-licensed physician online to discuss your health needs and get approved for your medical marijuana card in minutes.
            </p>

            <div className="pt-3 sm:pt-5 flex justify-center">
              <BookingButton className="h-auto gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#0E3B2E] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95">
                Start your Evaluation <ArrowRight className="size-4" />
              </BookingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

