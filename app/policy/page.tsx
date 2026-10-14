import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { legalPages } from "@/lib/legal-pages";
import { buildMetadata, pages, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(pages.legal);

export default function PolicyHubPage() {
  return (
    <div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.legal)} />
      <SiteHeader />
      <PageBreadcrumb page="Legal Policies" currentPath={pages.legal.path} />
      <main id="main-content">
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-full border border-[#4C9A2A]/30 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.15em] text-[#2F7A18]">
                LEGAL, COMPLIANCE &amp; EDITORIAL
              </span>
              <h1 className="mt-4 font-heading text-3xl font-medium tracking-tight text-[#0E3B2E] sm:text-4xl">
                Policies &amp; Compliance
              </h1>
              <p className="mt-4 text-[#0E3B2E]/80">
                Review the documents that explain how we protect your information, deliver
                telehealth care, and operate Medical Marijuana Doctor Oklahoma.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {legalPages.map(({ label, href, description, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-[#0E3B2E]/15"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#0E3B2E]/5 text-[#0E3B2E] transition-colors group-hover:bg-[#0E3B2E] group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-base font-semibold text-[#0E3B2E]">{label}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#0E3B2E]/75">
                    {description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7A18]">
                    Read policy
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
