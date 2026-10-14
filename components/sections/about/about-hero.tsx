import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/booking-dialog";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-16 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-[#BFE7B0] opacity-40 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <h1 className="font-heading text-4xl leading-[1.1] font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
            About Medical Marijuana Doctor Oklahoma
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#0E3B2E]/85">
            Medical Marijuana Doctor Oklahoma connects Oklahoma patients with state-licensed
            physicians for medical marijuana evaluations, entirely by telehealth. We built this
            site specifically for Oklahoma, because the state&apos;s application process through
            the Oklahoma Medical Marijuana Authority (OMMA) has its own rules and forms, and
            patients here deserve a service built around that, not a generic national one.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <BookingButton
              className="h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
            >
              Apply Now <ArrowRight className="size-4" />
            </BookingButton>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#0E3B2E]/15">
          <Image
            src="/media/aboutus-hero-section.webp"
            alt="Oklahoma male and female medical professionals"
            width={800}
            height={640}
            priority
            className="h-[420px] w-full object-cover sm:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
