import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Clock3,
  GraduationCap,
  IdCard,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { doctors, getDoctorBySlug } from "@/lib/doctors";
import { doctorProfileGraphSchema } from "@/lib/doctors-listing-schema";
import { JsonLd } from "@/components/seo/json-ld";
import { doctorMetadata, withTrailingSlash } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return { title: "Doctor Not Found" };
  }

  return doctorMetadata({
    slug: doctor.slug,
    name: doctor.name,
    credentials: doctor.credentials,
    bio: doctor.bio,
    image: doctor.image,
  });
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const lastName = doctor.name.split(" ").slice(-1)[0];
  const profilePath = withTrailingSlash(`/doctors/${doctor.slug}`);

  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={doctorProfileGraphSchema(doctor)} />
      <SiteHeader />
      <PageBreadcrumb
        page={doctor.name}
        currentPath={profilePath}
        items={[{ label: "Our Doctors", href: "/doctors/" }]}
        includeJsonLd={false}
      />
      <main id="main-content">
        <section className="px-6 pt-14 pb-16 sm:pt-20">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/doctors/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0E3B2E]/80 hover:text-[#0E3B2E]"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> Back to all doctors
            </Link>

            {/* Hero */}
            <div className="mt-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="relative h-80 overflow-hidden rounded-[2rem] shadow-xl shadow-black/10 sm:h-96">
                <Image
                  src={doctor.image}
                  alt={`${doctor.name}, ${doctor.credentials}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#2F7A18]">
                  {doctor.category.toUpperCase()}
                </p>
                <h1 className="mt-3 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                  Dr. {doctor.name}, {doctor.credentials}
                </h1>
                {doctor.headline ? (
                  <p className="mt-1 text-sm font-medium text-[#0E3B2E]/70">{doctor.headline}</p>
                ) : null}
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#0E3B2E]/80">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0E3B2E]/10 bg-white px-3 py-1.5">
                    <BadgeCheck className="size-4 text-[#2F7A18]" /> Licensed in Oklahoma
                  </span>
                  <span>Experience: {doctor.experience}</span>
                </div>

                <p className="mt-6 leading-relaxed text-[#0E3B2E]/85">
                  {doctor.description ?? doctor.bio}
                </p>

                <Button
                  render={<a href="#apply" />}
                  className="mt-9 h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
                >
                  Book a Consultation with Dr. {lastName} <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>

            {/* Medical Credentials */}
            {doctor.npi ? (
              <div className="mt-16 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#EAF1EA] text-[#2F7A18]">
                    <IdCard className="size-4.5" />
                  </span>
                  <h2 className="font-heading text-xl font-medium text-[#0E3B2E]">
                    Medical Credentials
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#0E3B2E]/70">
                  Credentials are publicly verifiable through the NPPES NPI Registry maintained by
                  the U.S. Department of Health &amp; Human Services.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-[#F6F5F0] px-4 py-3.5">
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/50">
                      NPI NUMBER
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0E3B2E]">{doctor.npi}</p>
                  </div>
                  <div className="rounded-xl bg-[#F6F5F0] px-4 py-3.5">
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/50">
                      STATUS
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-[#2F7A18]">
                      <span className="size-1.5 rounded-full bg-[#2F7A18]" /> Active
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#F6F5F0] px-4 py-3.5">
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-[#0E3B2E]/50">
                      LICENSED STATE
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#0E3B2E]">Oklahoma</p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Education & Credentials */}
            {doctor.educationHistory ? (
              <div className="mt-10 border-t border-black/5 pt-10">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[#EAF1EA] text-[#2F7A18]">
                    <GraduationCap className="size-4.5" />
                  </span>
                  <h2 className="font-heading text-xl font-medium text-[#0E3B2E]">
                    Education &amp; Credentials
                  </h2>
                </div>
                <p className="mt-3 text-sm text-[#0E3B2E]/70">
                  Verifiable credentials backing every clinical evaluation Dr. {lastName}{" "}
                  conducts.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {doctor.educationHistory.map((entry) => (
                    <div
                      key={entry.institution}
                      className="rounded-xl border border-black/5 bg-white p-4 transition-shadow hover:shadow-md"
                    >
                      <p className="text-sm font-semibold text-[#0E3B2E]">{entry.institution}</p>
                      <p className="mt-0.5 text-sm text-[#0E3B2E]/65">{entry.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* About */}
            <div className="mt-10 border-t border-black/5 pt-10">
              <h2 className="font-heading text-xl font-medium text-[#0E3B2E]">
                About Dr. {doctor.name}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#0E3B2E]/80">
                {doctor.about.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* My Role */}
            {doctor.roleParagraphs ? (
              <div className="mt-10 border-t border-black/5 pt-10">
                <h2 className="font-heading text-xl font-medium text-[#0E3B2E]">
                  My Role at Medical Marijuana Doctor Oklahoma
                </h2>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#0E3B2E]/80">
                  {doctor.roleParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Conditions Evaluated */}
            <div className="mt-10 border-t border-black/5 pt-10">
              <h2 className="font-heading text-xl font-medium text-[#0E3B2E]">
                Conditions Dr. {lastName} Evaluates
              </h2>
              {doctor.conditionsIntro ? (
                <p className="mt-2 text-sm leading-relaxed text-[#0E3B2E]/70">
                  {doctor.conditionsIntro}
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {doctor.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-[#EAF1EA] px-3.5 py-1.5 text-xs font-medium text-[#0E3B2E] transition-colors hover:bg-[#0E3B2E]/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            {doctor.consultationDetails ? (
              <div className="mt-10 border-t border-black/5 pt-10">
                <h2 className="font-heading text-xl font-medium text-[#0E3B2E]">
                  What to Expect in Your Consultation
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {doctor.consultationDetails.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-black/5 bg-white p-3.5 text-sm text-[#0E3B2E]/75"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#4C9A2A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Trust & Verification */}
            {doctor.trust ? (
              <div className="mt-10 rounded-[1.75rem] bg-[#0E3B2E] p-6 text-white sm:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-white/10 text-[#8FD66B]">
                    <ShieldCheck className="size-4.5" />
                  </span>
                  <h2 className="font-heading text-xl font-medium">Trust &amp; Verification</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Dr. {doctor.name} is a verified healthcare provider whose credentials are
                  publicly accessible through the federal NPPES registry.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-4">
                    <Clock3 className="mt-0.5 size-4 shrink-0 text-[#8FD66B]" />
                    <p className="text-sm text-white/80">{doctor.trust.yearsText}</p>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-4">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#8FD66B]" />
                    <p className="text-sm text-white/80">{doctor.trust.platformText}</p>
                  </div>
                </div>
                <p className="mt-5 text-xs text-white/50">{doctor.trust.lastVerified}</p>
              </div>
            ) : null}

            {/* FAQ */}
            {doctor.faqs ? (
              <div className="mt-16 border-t border-black/5 pt-10">
                <h2 className="font-heading text-xl font-medium text-[#0E3B2E]">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 text-sm text-[#0E3B2E]/60">
                  Specific to consultations with Dr. {lastName}. For general questions, see our
                  main FAQ.
                </p>
                <Accordion
                  defaultValue={[0]}
                  className="mt-5 flex flex-col gap-3 rounded-none border-none bg-transparent"
                >
                  {doctor.faqs.map((faq, index) => (
                    <AccordionItem
                      key={faq.question}
                      value={index}
                      className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-5 text-sm font-semibold text-[#0E3B2E] hover:no-underline sm:text-base [&_svg]:text-[#2F7A18]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 text-sm leading-relaxed text-[#0E3B2E]/75">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : null}

            {/* Bottom CTA */}
            <div className="mt-16 flex flex-col items-center gap-4 rounded-[1.75rem] border border-[#0E3B2E]/10 bg-[#EAF1EA] px-6 py-10 text-center sm:px-10">
              <h2 className="font-heading text-2xl font-medium text-[#0E3B2E]">
                Ready to Get Your Oklahoma MMJ Card?
              </h2>
              <p className="max-w-md text-sm text-[#0E3B2E]/70">
                Book your telehealth evaluation with Dr. {lastName} today and get a same-day
                certification if approved.
              </p>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-3">
                <Button
                  render={<a href="#apply" />}
                  className="h-auto gap-2 rounded-full bg-[#0E3B2E] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0E3B2E]/90"
                >
                  Book a Consultation <ArrowRight className="size-4" />
                </Button>
                <Link
                  href="/doctors/"
                  className="text-sm font-medium text-[#0E3B2E]/70 underline underline-offset-4 hover:text-[#0E3B2E]"
                >
                  Meet the rest of our team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
