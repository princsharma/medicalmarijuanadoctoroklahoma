import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function BlogPostCtaBanner() {
  return (
    <section className="w-full bg-[#FAF7F2] py-8 sm:py-10 lg:py-12 px-4 sm:px-6">
      <div className="max-w-[980px] mx-auto">
        <div
          className="w-full rounded-[22px] sm:rounded-[28px] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-11 text-center text-[#FAF7F2] shadow-[0px_6px_24px_rgba(14,59,46,0.15)] relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0E3B2E 0%, #164E3D 100%)" }}
        >
          <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
            <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#B8E89A] uppercase">
              Online Telehealth Evaluations
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#FAF7F2] leading-tight tracking-[-0.005em]">
              Need help with your Oklahoma MMJ card?
            </h2>

            <p className="text-[#FAF7F2]/90 text-sm sm:text-base font-medium leading-relaxed font-sans max-w-xl mx-auto">
              Connect with an Oklahoma-licensed physician online to discuss your health needs and get approved for your medical marijuana card in minutes.
            </p>

            <div className="pt-2 sm:pt-3 flex justify-center">
              <BookingButton className="h-auto gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0E3B2E] shadow-md transition-all hover:-translate-y-0.5 hover:bg-white/95 inline-flex items-center">
                Start your Evaluation <ArrowRight className="size-4" />
              </BookingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

