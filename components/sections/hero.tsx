import Image from "next/image";
import { ArrowRight, Lock, ShieldCheck, Star, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/booking-dialog";

export function Hero() {
  const badges = [
    { icon: ShieldCheck, label: "HIPAA Compliant" },
    { icon: Lock, label: "100% Secure" },
    { icon: ZapIcon, label: "Instant Approval" },
    { icon: Star, label: "99% Approval Rate - Licensed OK Doctors" },
  ];

  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#BFE7B0] opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-32 h-96 w-96 rounded-full bg-[#0E3B2E]/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            Get Approved by an Oklahoma Medical Marijuana Doctor and Receive Your{" "}
            <span className="italic text-[#2F7A18]">Digital Card in Minutes!</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0E3B2E]/85">
            Easy online application, instant approval, and same-day access to legal cannabis in
            Oklahoma.
          </p>

          <div className="mt-9 flex flex-nowrap items-center gap-3 sm:gap-4">
            <BookingButton
              className="h-auto flex-1 gap-1.5 whitespace-nowrap rounded-full bg-[#0E3B2E] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90 sm:flex-none sm:gap-2 sm:px-7 sm:py-4"
            >
              Get Started <ArrowRight className="size-4" />
            </BookingButton>
            <Button
              variant="outline"
              render={<a href="#conditions" />}
              className="h-auto flex-1 gap-1.5 whitespace-nowrap rounded-full border-[#0E3B2E]/15 bg-white px-5 py-3.5 text-sm font-semibold text-[#0E3B2E] hover:bg-[#0E3B2E]/5 sm:flex-none sm:gap-2 sm:px-7 sm:py-4"
            >
              Check Eligibility
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-[#0E3B2E]/10 bg-white px-3.5 py-2 text-xs font-medium text-[#0E3B2E]/85"
              >
                <Icon className="size-3.5 text-[#2F7A18]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0E3B2E]/15">
            <Image
              src="/media/hero-section.webp"
              alt="Patient meeting with a physician over telemedicine video call"
              width={800}
              height={560}
              priority
              className="h-[420px] w-full object-cover sm:h-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
