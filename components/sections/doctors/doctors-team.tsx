"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/doctors";

const categories = ["All", "Family Medicine", "General Medicine", "Pediatrics"];

export function DoctorsTeam() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? doctors : doctors.filter((doc) => doc.category === active);

  return (
    <section id="team" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">OUR TEAM</p>
          <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
            Our Board-Certified Doctors Team
          </h2>
          <p className="mt-4 text-[#0E3B2E]/80">
            State-licensed MMJ doctors specialized in medical cannabis evaluations and patient
            care. Committed to excellence, they provide personalized, confidential, and
            compassionate evaluations to help you access medical marijuana.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                active === category
                  ? "border-[#0E3B2E] bg-[#0E3B2E] text-white"
                  : "border-[#0E3B2E]/15 bg-white text-[#0E3B2E]/85 hover:bg-[#0E3B2E]/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
          {filtered.map((doctor) => (
            <div
              key={doctor.name}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full shrink-0 bg-[#EAF1EA]">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.credentials}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-lg font-medium text-[#0E3B2E]">{doctor.name}</h3>
                <p className="mt-1 text-xs font-semibold tracking-wide text-[#2F7A18]">
                  Licensed OK &middot; {doctor.credentials}
                </p>
                <p className="mt-1 text-xs text-[#0E3B2E]/85">Experience: {doctor.experience}</p>
                <p className="mt-3 min-h-[4.5rem] flex-1 text-sm leading-relaxed text-[#0E3B2E]/85">
                  {doctor.bio}
                </p>
                <Button
                  render={<Link href={`/doctors/${doctor.slug}/`} />}
                  className="mt-5 h-auto w-full gap-2 rounded-full bg-[#0E3B2E] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
                >
                  View Profile <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
