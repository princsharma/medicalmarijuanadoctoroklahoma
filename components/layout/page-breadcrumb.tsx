import Link from "next/link";
import { Fragment } from "react";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, withTrailingSlash } from "@/lib/seo";

type Crumb = {
  label: string;
  href?: string;
};

type PageBreadcrumbProps = {
  page: string;
  /** Absolute path for the current page (used in BreadcrumbList schema). */
  currentPath?: string;
  /** Optional middle crumbs, e.g. [{ label: "Doctors", href: "/doctors/" }] */
  items?: Crumb[];
  /** When false, skip BreadcrumbList JSON-LD (e.g. page supplies its own @graph). */
  includeJsonLd?: boolean;
};

export function PageBreadcrumb({
  page,
  currentPath,
  items = [],
  includeJsonLd = true,
}: PageBreadcrumbProps) {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, ...items, { label: page }];

  const schema = breadcrumbSchema(
    crumbs.map((crumb, index) => {
      if (crumb.href) {
        return { name: crumb.label, path: withTrailingSlash(crumb.href) };
      }
      if (index === crumbs.length - 1 && currentPath) {
        return { name: crumb.label, path: withTrailingSlash(currentPath) };
      }
      return { name: crumb.label, path: "/" };
    })
  );

  return (
    <div className="relative overflow-hidden border-b border-[#0E3B2E]/8 bg-gradient-to-r from-[#EEF5E8] via-[#F6F5F0] to-[#F6F5F0]">
      {includeJsonLd ? <JsonLd data={schema} /> : null}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-8 h-28 w-28 rounded-full bg-[#8FD66B]/20 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#4C9A2A] via-[#8FD66B] to-[#4C9A2A]/40"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-4 sm:px-6">
        <Breadcrumb>
          <BreadcrumbList className="gap-2 text-sm sm:gap-2.5">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              const isHome = index === 0 && crumb.href === "/";

              return (
                <Fragment key={`${crumb.label}-${index}`}>
                  <BreadcrumbItem>
                    {isLast || !crumb.href ? (
                      <BreadcrumbPage className="inline-flex items-center rounded-full border border-[#0E3B2E]/10 bg-white/80 px-3 py-1 font-semibold text-[#0E3B2E] shadow-sm shadow-[#0E3B2E]/5 backdrop-blur-sm">
                        {crumb.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        render={<Link href={withTrailingSlash(crumb.href)} />}
                        className="group inline-flex items-center gap-1.5 font-medium text-[#2F7A18] transition-colors hover:text-[#0E3B2E]"
                      >
                        {isHome ? (
                          <span className="flex size-7 items-center justify-center rounded-lg bg-white text-[#0E3B2E] shadow-sm shadow-[#0E3B2E]/8 ring-1 ring-[#0E3B2E]/8 transition group-hover:bg-[#0E3B2E] group-hover:text-white">
                            <Home className="size-3.5" strokeWidth={2} aria-hidden />
                          </span>
                        ) : null}
                        <span className="underline-offset-4 group-hover:underline">
                          {crumb.label}
                        </span>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {isLast ? null : (
                    <BreadcrumbSeparator className="text-[#0E3B2E]/35 [&>svg]:size-3.5" />
                  )}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
