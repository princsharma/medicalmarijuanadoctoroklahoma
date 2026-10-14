import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { ContributorPortrait } from "@/components/sections/contributors/contributor-portrait";
import { JsonLd } from "@/components/seo/json-ld";
import { contributorsListingGraphSchema } from "@/lib/contributors-listing-schema";
import { contributorSocialOgImage, contributors } from "@/lib/contributors";
import {
  absoluteOgImageUrl,
  buildMetadata,
  pages,
  withTrailingSlash,
} from "@/lib/seo";

const contributorsOgImages = contributors.map((person) => {
  const path = contributorSocialOgImage(person);
  const url = absoluteOgImageUrl(path);
  return {
    url,
    secureUrl: url,
    width: 800,
    height: 800,
    alt: `${person.name}, ${person.credentials}`,
    type: "image/webp" as const,
  };
});

const contributorsMetadataBase = buildMetadata(pages.contributors);

export const metadata: Metadata = {
  ...contributorsMetadataBase,
  openGraph: contributorsMetadataBase.openGraph
    ? { ...contributorsMetadataBase.openGraph, images: contributorsOgImages }
    : undefined,
  twitter: contributorsMetadataBase.twitter
    ? {
        ...contributorsMetadataBase.twitter,
        images: contributorsOgImages.map((image) => ({
          url: image.url,
          alt: image.alt,
        })),
      }
    : undefined,
};

export default function ContributorsPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={contributorsListingGraphSchema()} />
      <SiteHeader />
      <PageBreadcrumb
        page="Contributors"
        currentPath={pages.contributors.path}
        includeJsonLd={false}
      />
      <main id="main-content">
        <section className="px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#2F7A18] uppercase">
              Contributors
            </p>
            <h1 className="mt-4 font-heading text-4xl font-medium tracking-tight text-[#0E3B2E] sm:text-5xl">
              Our Medical Content Team
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#0E3B2E]/85 sm:text-lg">
              Every article on Medical Marijuana Doctor Oklahoma is written and reviewed by real
              people with real credentials—not generated automatically. A medical writer drafts
              clear patient-focused content, then a board-certified physician reviews it for
              clinical accuracy before publication.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16 sm:pb-20">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Meet the Team
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-[#0E3B2E]/20" />
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
              {contributors.map((person) => (
                <article
                  key={person.slug}
                  className="group flex h-full flex-col items-center rounded-[2rem] border border-[#0E3B2E]/8 bg-white px-6 py-8 text-center shadow-sm"
                >
                  <Link
                    href={withTrailingSlash(`/contributors/${person.slug}`)}
                    className="block w-full max-w-sm"
                  >
                    <ContributorPortrait
                      person={person}
                      shape="circle"
                      className="mx-auto transition-transform duration-300 group-hover:-translate-y-1"
                    />
                    <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight text-[#0E3B2E] transition-colors group-hover:text-[#2F7A18]">
                      {person.name}
                      {person.credentials ? (
                        <span className="text-[#0E3B2E]/70">, {person.credentials}</span>
                      ) : null}
                    </h3>
                  </Link>
                  <p className="mt-2 text-xs font-semibold tracking-[0.18em] text-[#2F7A18] uppercase">
                    {person.role}
                  </p>
                  <p className="mt-4 max-w-sm flex-1 text-sm leading-relaxed text-[#0E3B2E]/80">
                    {person.shortBio}
                  </p>
                  <Link
                    href={withTrailingSlash(`/contributors/${person.slug}`)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0E3B2E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0E3B2E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#124A3A]"
                  >
                    {person.bioCta}
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto max-w-3xl border-t border-[#0E3B2E]/10 pt-10 text-center">
            <p className="text-sm leading-relaxed text-[#0E3B2E]/75">
              Want to know how we research and fact-check our articles?{" "}
              <Link
                href={pages.editorial.path}
                className="font-semibold text-[#2F7A18] underline-offset-2 hover:underline"
              >
                Read our Editorial Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
