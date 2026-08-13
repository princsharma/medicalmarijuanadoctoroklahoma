"use client";

import { usePathname } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { logoSchema, organizationSchema, websiteSchema } from "@/lib/seo";

/** Global identity schema for routes that don't ship a full page @graph. */
export function SiteJsonLd() {
  const pathname = usePathname();
  const usesPageGraph =
    pathname === "/" ||
    pathname === "" ||
    pathname === "/contact-us" ||
    pathname === "/contact-us/" ||
    pathname === "/faq" ||
    pathname === "/faq/" ||
    pathname === "/about-us" ||
    pathname === "/about-us/";

  if (usesPageGraph) {
    // Contact/About graphs reference Website (+ logo); home/FAQ define their own.
    if (
      pathname === "/contact-us" ||
      pathname === "/contact-us/" ||
      pathname === "/about-us" ||
      pathname === "/about-us/"
    ) {
      return <JsonLd data={[logoSchema(), websiteSchema()]} />;
    }
    return null;
  }

  return <JsonLd data={[organizationSchema(), logoSchema(), websiteSchema()]} />;
}
