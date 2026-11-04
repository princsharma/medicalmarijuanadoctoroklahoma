import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { blogCategoryLivePaths } from "@/lib/blog-categories";
import { isGoneRequest } from "@/lib/gone";

const LIVE_PATHS = new Set([
  "/",
  "/about-us/",
  "/contact-us/",
  "/doctors/",
  "/faq/",
  "/blog/",
  "/reviews/",
  "/policy/",
  "/policy/privacy-policy/",
  "/policy/terms/",
  "/policy/terms-of-use/",
  "/policy/hipaa-compliance/",
  "/policy/consent-for-telehealth/",
  "/policy/refund-policy/",
  "/policy/accessibility-statement/",
  "/policy/editorial-policy/",
  "/policy/disclaimer/",
  "/contributors/",
  "/doctors/joel-durinka/",
  "/doctors/johnathan-miller/",
  "/doctors/kevin-kargman/",
  "/doctors/lewis-jassey/",
  "/contributors/robert-d-saint-laurent/",
  "/contributors/daalon-b-echols/",
  "/blog/omma-guidelines/is-marijuana-legal-in-oklahoma/",
  "/blog/omma-guidelines/oklahoma-cannabis-laws/",
  ...blogCategoryLivePaths,
]);

/** Existing permanent redirects. These must reach Next.js instead of the 410 page. */
const REDIRECT_PATHS = new Set([
  "/legal/",
  "/privacy-policy/",
  "/terms-of-use/",
  "/hipaa-compliance/",
  "/consent-for-telehealth/",
  "/refund-policy/",
  "/accessibility-statement/",
  "/editorial-policy/",
  "/disclaimer/",
  "/policy/terms-of-use/",
  "/policy/privacy-policy/-0/",
  "/policy/refund-policy/-0/",
  "/services-and-benefits/",
  "/medical-marijuana-card/",
  "/our-locations/",
  "/oklahoma-medical-marijuana-card-renewal-online/",
  "/blog/is-marijuana-legal-in-oklahoma/",
  "/blog/oklahoma-cannabis-laws/",
]);

function withTrailingSlash(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function goneResponse(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/gone/";
  url.search = "";
  const response = NextResponse.rewrite(url, { status: 410, statusText: "Gone" });
  response.headers.set("x-robots-tag", "noindex, nofollow");
  response.headers.set("Cache-Control", "no-store");
  return response;
}

export function middleware(request: NextRequest) {
  const pathname = withTrailingSlash(request.nextUrl.pathname);

  if (pathname === "/gone/") {
    return goneResponse(request);
  }

  if (LIVE_PATHS.has(pathname) || REDIRECT_PATHS.has(pathname)) {
    if (isGoneRequest(pathname, request.nextUrl.searchParams) && pathname === "/") {
      return goneResponse(request);
    }
    return NextResponse.next();
  }

  if (isGoneRequest(pathname, request.nextUrl.searchParams)) {
    return goneResponse(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|media/|favicon.ico|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|html|woff2?)$).*)",
  ],
};
