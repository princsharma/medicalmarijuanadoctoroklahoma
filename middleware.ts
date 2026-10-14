import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

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
  "/policy/terms-of-use/",
  "/policy/hipaa-compliance/",
  "/policy/consent-for-telehealth/",
  "/policy/refund-policy/",
  "/policy/accessibility-statement/",
  "/policy/editorial-policy/",
  "/policy/disclaimer/",
  "/contributors/",
  "/doctors/cheryl-bugailiskis/",
  "/doctors/joel-durinka/",
  "/doctors/johnathan-miller/",
  "/doctors/kevin-kargman/",
  "/doctors/lewis-jassey/",
  "/contributors/robert-d-saint-laurent/",
  "/contributors/daalon-b-echols/",
  "/blog/is-marijuana-legal-in-oklahoma/",
  "/blog/oklahoma-cannabis-laws/",
  "/gone/",
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
  "/policy/terms/",
  "/services-and-benefits/",
  "/medical-marijuana-card/",
  "/how-easy-is-it-to-get-a-medical-card-in-oklahoma/",
  "/our-locations/",
  "/oklahoma-medical-marijuana-card-renewal-online/",
]);

function withTrailingSlash(pathname: string) {
  if (pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function goneResponse() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>410 Gone | Medical Marijuana Doctor Oklahoma</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem 1.5rem;
      text-align: center;
      background: #E7F3E4;
      color: #1F2933;
      font-family: Inter, system-ui, sans-serif;
    }
    main { position: relative; width: min(100%, 52rem); }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      border-radius: 999px;
      background: #F5A623;
      color: #fff;
      font-size: 0.9rem;
      font-weight: 700;
      padding: 0.4rem 0.95rem;
    }
    h1 {
      margin: 1.75rem 0 0;
      font-family: Fraunces, Georgia, serif;
      font-size: clamp(2rem, 5vw, 3.15rem);
      font-weight: 500;
      letter-spacing: -0.03em;
      line-height: 1.15;
    }
    .copy { margin: 1.15rem auto 0; max-width: 40rem; font-size: 1.05rem; line-height: 1.6; color: rgba(31, 41, 51, 0.75); }
    .guide { margin: 1rem 0 0; font-size: 1.05rem; font-weight: 700; }
    .cta {
      display: inline-flex;
      margin-top: 1.6rem;
      border-radius: 0.55rem;
      background: #1F8A3B;
      color: #fff;
      font-size: 0.85rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
      padding: 0.85rem 1.35rem;
    }
    .cta:hover { background: #187432; }
    .meta { margin: 1.15rem 0 0; font-size: 0.9rem; color: rgba(31, 41, 51, 0.7); }
    .leaf { width: 7.5rem; height: 7.5rem; margin: 1.75rem auto 0; display: block; color: #3CB043; }
    @media (min-width: 800px) {
      .leaf { position: absolute; right: 0; top: 58%; margin: 0; transform: translateY(-20%); }
    }
  </style>
</head>
<body>
  <main>
    <div class="badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle>
        <path d="M12 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
        <circle cx="12" cy="8" r="1" fill="currentColor"></circle>
      </svg>
      Page No Longer Available • Error 410
    </div>
    <h1>This Page Has Been Permanently Removed</h1>
    <p class="copy">The content you're looking for is no longer available and has been removed as part of our update, but your path to relief is still right here.</p>
    <p class="guide">Let's guide you back to the medical marijuana support you're looking for.</p>
    <a class="cta" href="/?consult=1">Start Your MMJ Consultation</a>
    <p class="meta">• Quick evaluation • 100% online • HIPAA-compliant</p>
    <svg class="leaf" viewBox="0 0 120 140" aria-hidden="true">
      <g fill="currentColor" transform="translate(60 72)">
        <ellipse cx="0" cy="-34" rx="11" ry="32"></ellipse>
        <ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(28)"></ellipse>
        <ellipse cx="0" cy="-26" rx="10" ry="28" transform="rotate(-28)"></ellipse>
        <ellipse cx="0" cy="-16" rx="9" ry="24" transform="rotate(56)"></ellipse>
        <ellipse cx="0" cy="-16" rx="9" ry="24" transform="rotate(-56)"></ellipse>
        <ellipse cx="0" cy="-8" rx="8" ry="18" transform="rotate(84)"></ellipse>
        <ellipse cx="0" cy="-8" rx="8" ry="18" transform="rotate(-84)"></ellipse>
        <rect x="-2.5" y="2" width="5" height="34" rx="2.5"></rect>
      </g>
    </svg>
  </main>
</body>
</html>`;

  return new NextResponse(html, {
    status: 410,
    statusText: "Gone",
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.searchParams.has("p")) {
    return goneResponse();
  }

  const pathname = withTrailingSlash(request.nextUrl.pathname);
  if (LIVE_PATHS.has(pathname) || REDIRECT_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  return goneResponse();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|media/|favicon.ico|site.webmanifest|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt|xml|woff2?)$).*)",
  ],
};
