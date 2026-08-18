import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";

const pages = [
  "",
  "about-us/",
  "contact-us/",
  "faq/",
  "doctors/",
  "doctors/cheryl-bugailiskis/",
  "doctors/joel-durinka/",
  "doctors/johnathan-miller/",
  "doctors/ron-b-reese/",
  "doctors/sharon-olson/",
  "contributors/",
  "contributors/robert-d-saint-laurent/",
  "contributors/daalon-b-echols/",
  "gone/",
  "reviews/",
  "policy/",
  "policy/accessibility-statement/",
  "policy/consent-for-telehealth/",
  "policy/disclaimer/",
  "policy/editorial-policy/",
  "policy/hipaa-compliance/",
  "policy/privacy-policy/",
  "policy/refund-policy/",
  "policy/terms/",
];

const baseUrl = process.env.BASE_URL || "http://localhost:3005/";
const results = [];
const outDir = "./lh-results";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log(`=== Starting Lighthouse Audits (${pages.length} pages x 2 presets = ${pages.length * 2} audits) ===\n`);

for (const p of pages) {
  const url = `${baseUrl}${p}`;
  const slug = p.replace(/\//g, "-").replace(/-$/, "") || "home";

  for (const preset of ["desktop", "mobile"]) {
    const isDesktop = preset === "desktop";
    const outPath = path.join(outDir, `${slug}-${preset}.json`);
    const args = [
      "-y",
      "lighthouse",
      url,
      "--only-categories=performance",
      "--output=json",
      `--output-path=${outPath}`,
      '--chrome-flags=--headless --no-sandbox --disable-gpu --disable-dev-shm-usage',
    ];

    if (isDesktop) {
      args.push("--preset=desktop");
    }

    let success = false;
    let attempts = 0;
    while (!success && attempts < 2) {
      attempts++;
      try {
        execFileSync("npx.cmd", args, { stdio: "ignore", timeout: 90000, shell: true });
        if (fs.existsSync(outPath)) {
          const data = JSON.parse(fs.readFileSync(outPath, "utf8"));
          const score = Math.round((data.categories?.performance?.score || 0) * 100);
          const fcp = data.audits?.["first-contentful-paint"]?.displayValue || "-";
          const lcp = data.audits?.["largest-contentful-paint"]?.displayValue || "-";
          const tbt = data.audits?.["total-blocking-time"]?.displayValue || "-";
          const cls = data.audits?.["cumulative-layout-shift"]?.displayValue || "-";
          const pass = score >= 95 ? "PASS" : "FAIL";

          results.push({ slug, preset, score, pass, fcp, lcp, tbt, cls });
          console.log(
            `[${pass}] [${preset.toUpperCase().padEnd(7)}] ${slug.padEnd(35)} Score: ${String(score).padStart(3)} | FCP: ${fcp} | LCP: ${lcp} | TBT: ${tbt} | CLS: ${cls}`
          );
          success = true;
        }
      } catch (err) {
        if (attempts >= 2) {
          console.error(`[ERROR] ${slug} (${preset}):`, err.message);
          results.push({ slug, preset, score: 0, pass: "ERR", fcp: "-", lcp: "-", tbt: "-", cls: "-" });
        }
      }
    }
  }
}

console.log("\n=================== FINAL SUMMARY ===================");
console.table(results);
const total = results.length;
const passing = results.filter((r) => r.score >= 95).length;
console.log(`\nResults: ${passing}/${total} audits scored 95+`);

