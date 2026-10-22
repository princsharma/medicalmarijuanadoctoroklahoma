import Image from "next/image";
import { ArrowRight, BadgeCheck, Home as HomeIcon, Leaf, MapPin, Repeat, ShieldCheck, Sprout, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/booking-dialog";

export function WhatIsCard() {
  const benefits = [
    { icon: ShieldCheck, title: "Legal Protection", description: "Provides safe, legal access to medical marijuana use." },
    { icon: HomeIcon, title: "Dispensary Access", description: "Purchase cannabis products from licensed Oklahoma dispensaries." },
    { icon: Leaf, title: "Higher Possession", description: "Allows carrying more cannabis than recreational limits." },
    { icon: BadgeCheck, title: "Lower Age", description: "Eligible patients under 21 can legally access cannabis." },
    { icon: Sprout, title: "Cultivation Rights", description: "Grow your own plants as permitted by OMMA." },
    { icon: Stethoscope, title: "Medical Guidance", description: "Get dosage advice from licensed Oklahoma MMJ doctors." },
    { icon: MapPin, title: "Statewide Validity", description: "Use your card anywhere within Oklahoma legally." },
    { icon: Repeat, title: "Renewal Convenience", description: "Simple renewal process ensures uninterrupted access." },
  ];

  return (
    <section id="apply" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">GET STARTED</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:whitespace-nowrap sm:text-4xl">
            What is An Oklahoma Medical Marijuana Card?
          </h2>
          <p className="mt-4 text-[#0E3B2E]/80">
          A Medical Marijuana Card in Oklahoma gives you legal protection and access to cannabis for therapeutic purposes. With your card, you can legally consume, possess, and cultivate medical marijuana as recommended by licensed physicians
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] shadow-xl shadow-[#0E3B2E]/10 lg:col-span-5 lg:min-h-0">
            <Image
              src="/homepage-whatis-section.webp"
              alt="Patient purchasing cannabis products at a licensed Oklahoma dispensary"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B2E]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#C9E9BE] text-[#0E3B2E]">
                <HomeIcon className="size-4" />
              </div>
              <p className="text-sm font-medium text-[#0E3B2E]">
                Licensed dispensary access statewide
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#C9E9BE] text-[#0E3B2E]">
                  <Icon className="size-4.5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[#0E3B2E]">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#0E3B2E]/80">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-5 rounded-[2rem] bg-[#0E3B2E] px-10 py-10 text-center sm:flex-row sm:gap-8 sm:text-left">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#B8E89A]">ONE-TIME FEE</p>
              <p className="font-heading text-4xl font-medium text-white">$149</p>
            </div>
            <BookingButton
              className="h-auto gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0E3B2E] shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white/90"
            >
              Apply Your Card at $149 <ArrowRight className="size-4" />
            </BookingButton>
          </div>
        </div>
      </div>
    </section>
  );
}
