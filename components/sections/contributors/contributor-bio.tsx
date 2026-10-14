import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Mail,
  PenLine,
  ShieldCheck,
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { ContributorPortrait } from "@/components/sections/contributors/contributor-portrait";
import { ReviewsCta } from "@/components/sections/reviews/reviews-cta";
import type { Contributor } from "@/lib/contributors";
import { contributors } from "@/lib/contributors";
import { pages, withTrailingSlash } from "@/lib/seo";

export function ContributorBio({ person }: { person: Contributor }) {
  const other = contributors.find((contributor) => contributor.slug !== person.slug);
  const firstName = person.name.split(" ")[0];

  return (
    <>
      <section className="px-6 pt-14 pb-12 sm:pt-16 sm:pb-16">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[300px_1fr] lg:items-start lg:gap-14">
          <div className="mx-auto w-full max-w-[300px]">
            <ContributorPortrait person={person} priority />
            <p className="mt-4 text-center text-xs font-semibold tracking-[0.16em] text-[#2F7A18] uppercase">
              {person.role}
            </p>
          </div>

          <div>
            <Link
              href={pages.contributors.path}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2F7A18] transition hover:text-[#0E3B2E]"
            >
              <ArrowLeft className="size-4" />
              All contributors
            </Link>
            <h1 className="mt-5 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
              {person.name}
              <span className="text-[#0E3B2E]/70">, {person.credentials}</span>
            </h1>
            <p className="mt-3 text-sm font-semibold tracking-wide text-[#2F7A18]">
              {person.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0E3B2E]/85">
              {person.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0E3B2E]/10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-3xl">
              Author at a Glance
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/80">{person.glanceIntro}</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {person.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#0E3B2E]/8 bg-[#F6F5F0] px-5 py-5"
              >
                <p className="text-[11px] font-semibold tracking-[0.14em] text-[#2F7A18] uppercase">
                  {stat.label}
                </p>
                <p className="mt-2 font-heading text-2xl font-medium text-[#0E3B2E]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#0E3B2E]/70">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-3xl">
            About {firstName}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-[#0E3B2E]/85">
            {person.about.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-2 border-[#2F7A18] pl-5">
            <p className="font-heading text-lg leading-relaxed text-[#0E3B2E] italic">
              &ldquo;{person.quote}&rdquo;
            </p>
            <footer className="mt-3 text-sm font-semibold text-[#0E3B2E]/80">
              — {person.name}, {person.credentials}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="border-y border-[#0E3B2E]/10 bg-white px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-3xl">
              Professional Background
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/80">
              {person.backgroundIntro}
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#0E3B2E]/8 bg-[#F6F5F0] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#0E3B2E]/5 text-[#0E3B2E]">
                  <GraduationCap className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0E3B2E]">Education</h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#0E3B2E]/85">
                {person.education.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2F7A18]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#0E3B2E]/8 bg-[#F6F5F0] p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#0E3B2E]/5 text-[#0E3B2E]">
                  <PenLine className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0E3B2E]">Experience</h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#0E3B2E]/85">
                {person.experience.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#2F7A18]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] sm:text-3xl">
            Contact &amp; Verified Profiles
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0E3B2E]/80">
            {person.contactIntro}
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#0E3B2E]/8 bg-white p-6">
              <h3 className="text-base font-semibold text-[#0E3B2E]">Direct Contact</h3>
              <p className="mt-1 text-xs text-[#0E3B2E]/65">
                {person.email
                  ? "Domain-based email and professional inquiry channels."
                  : "Professional inquiry channels."}
              </p>
              <ul className="mt-5 space-y-4 text-sm text-[#0E3B2E]/85">
                <li className="flex items-start gap-3">
                  <LinkedinIcon className="mt-0.5 size-5 shrink-0 text-[#2F7A18]" />
                  <div>
                    <p className="font-semibold text-[#0E3B2E]">LinkedIn DM</p>
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2F7A18] underline-offset-2 hover:underline"
                    >
                      {person.linkedinName}
                    </a>
                  </div>
                </li>
                {person.email ? (
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 shrink-0 text-[#2F7A18]" />
                    <div>
                      <p className="font-semibold text-[#0E3B2E]">Email</p>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-[#2F7A18] underline-offset-2 hover:underline"
                      >
                        {person.email}
                      </a>
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#0E3B2E]/8 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#0E3B2E]/5 text-[#0E3B2E]">
                  <ShieldCheck className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0E3B2E]">Verified Profiles</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#0E3B2E]/80">
                {person.verifiedProfiles.map((profile, index) => (
                  <span key={profile.href}>
                    {index > 0 ? <span className="text-[#0E3B2E]/50"> • </span> : null}
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#2F7A18] underline-offset-2 hover:underline"
                    >
                      {profile.label}
                    </a>
                  </span>
                ))}
              </p>
              <p className="mt-3 text-xs text-[#0E3B2E]/65">
                Profile last verified {person.verifiedDate}
              </p>
            </div>
          </div>

          {other ? (
            <div className="mt-10 border-t border-[#0E3B2E]/10 pt-8">
              <p className="text-sm text-[#0E3B2E]/70">Also on our content team</p>
              <Link
                href={withTrailingSlash(`/contributors/${other.slug}`)}
                className="mt-2 inline-flex items-center gap-1.5 font-heading text-xl font-medium text-[#0E3B2E] transition hover:text-[#2F7A18]"
              >
                {other.name}, {other.credentials}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <ReviewsCta />
    </>
  );
}
