import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { ContributorBio } from "@/components/sections/contributors/contributor-bio";
import { JsonLd } from "@/components/seo/json-ld";
import { contributorProfileGraphSchema } from "@/lib/contributor-schema";
import {
  contributorSocialOgImage,
  contributors,
  getContributor,
} from "@/lib/contributors";
import {
  buildMetadata,
  clampMetaDescription,
  clampMetaTitle,
  pages,
  withTrailingSlash,
} from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return contributors.map((contributor) => ({ slug: contributor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getContributor(slug);
  if (!person) return {};

  const title = clampMetaTitle(`${person.name} | Medical Content Team`);
  const description = clampMetaDescription(person.shortBio);

  return buildMetadata({
    path: withTrailingSlash(`/contributors/${person.slug}`),
    title,
    description,
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    changeFrequency: "monthly",
    priority: 0.6,
    ogType: "article",
    ogImage: contributorSocialOgImage(person),
  });
}

export default async function ContributorBioPage({ params }: PageProps) {
  const { slug } = await params;
  const person = getContributor(slug);
  if (!person) notFound();

  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={contributorProfileGraphSchema(person)} />
      <SiteHeader />
      <PageBreadcrumb
        page={person.name}
        currentPath={withTrailingSlash(`/contributors/${person.slug}`)}
        items={[{ label: "Contributors", href: pages.contributors.path }]}
        includeJsonLd={false}
      />
      <main id="main-content">
        <ContributorBio person={person} />
      </main>
      <SiteFooter />
    </div>
  );
}
