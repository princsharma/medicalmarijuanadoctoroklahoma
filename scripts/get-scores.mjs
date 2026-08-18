import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";

const routes = [
  { name: "Home Page", path: "" },
  { name: "About Us", path: "about-us/" },
  { name: "Contact Us", path: "contact-us/" },
  { name: "FAQ", path: "faq/" },
  { name: "Doctors Hub", path: "doctors/" },
  { name: "Dr. Cheryl Bugailiskis", path: "doctors/cheryl-bugailiskis/" },
  { name: "Dr. Joel Durinka", path: "doctors/joel-durinka/" },
  { name: "Dr. Johnathan Miller", path: "doctors/johnathan-miller/" },
  { name: "Dr. Ron B. Reese", path: "doctors/ron-b-reese/" },
  { name: "Dr. Sharon Olson", path: "doctors/sharon-olson/" },
  { name: "Contributors Hub", path: "contributors/" },
  { name: "Robert D. Saint Laurent", path: "contributors/robert-d-saint-laurent/" },
  { name: "Daalon B. Echols", path: "contributors/daalon-b-echols/" },
  { name: "Reviews", path: "reviews/" },
  { name: "410 Gone", path: "gone/" },
  { name: "Policy Hub", path: "policy/" },
  { name: "Accessibility Statement", path: "policy/accessibility-statement/" },
  { name: "Consent for Telehealth", path: "policy/consent-for-telehealth/" },
  { name: "Disclaimer", path: "policy/disclaimer/" },
  { name: "Editorial Policy", path: "policy/editorial-policy/" },
  { name: "HIPAA Compliance", path: "policy/hipaa-compliance/" },
  { name: "Privacy Policy", path: "policy/privacy-policy/" },
  { name: "Refund Policy", path: "policy/refund-policy/" },
  { name: "Terms of Use", path: "policy/terms/" },
];

const baseUrl = process.env.BASE_URL || "http://localhost:3005/";
const outDir = "./lh-score-report";
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log("==========================================================================");
console.log("         LIGHTHOUSE PERFORMANCE AUDIT REPORT (DESKTOP & MOBILE)");
console.log("==========================================================================\n");

const scorecard = [];

for (const route of routes) {
  const url = `${baseUrl}${route.path}`;
  const slug = route.path.replace(/\//g, "-").replace(/-$/, "") || "home";

  let desktopScore = "-";
  let mobileScore = "-";

  // Desktop Run
  try {
    const desktopOut = path.join(outDir, `${slug}-desktop.json`);
    execFileSync(
      "npx.cmd",
      [
        "-y",
        "lighthouse",
        url,
        "--only-categories=performance",
        "--preset=desktop",
        "--output=json",
        `--output-path=${desktopOut}`,
        "--chrome-flags=--headless --no-sandbox --disable-gpu --disable-dev-shm-usage",
      ],
      { stdio: "ignore", timeout: 90000, shell: true }
    );
    if (fs.existsSync(desktopOut)) {
      const d = JSON.parse(fs.readFileSync(desktopOut, "utf8"));
      desktopScore = Math.round((d.categories?.performance?.score || 0) * 100);
    }
  } catch (e) {
    desktopScore = "ERR";
  }

  // Mobile Run
  try {
    const mobileOut = path.join(outDir, `${slug}-mobile.json`);
    execFileSync(
      "npx.cmd",
      [
        "-y",
        "lighthouse",
        url,
        "--only-categories=performance",
        "--output=json",
        `--output-path=${mobileOut}`,
        "--chrome-flags=--headless --no-sandbox --disable-gpu --disable-dev-shm-usage",
      ],
      { stdio: "ignore", timeout: 90000, shell: true }
    );
    if (fs.existsSync(mobileOut)) {
      const d = JSON.parse(fs.readFileSync(mobileOut, "utf8"));
      mobileScore = Math.round((d.categories?.performance?.score || 0) * 100);
    }
  } catch (e) {
    mobileScore = "ERR";
  }

  const row = {
    Page: route.name,
    URL: `/${route.path}`,
    "Desktop Score": typeof desktopScore === "number" ? (desktopScore >= 95 ? `✅ ${desktopScore}` : `❌ ${desktopScore}`) : desktopScore,
    "Mobile Score": typeof mobileScore === "number" ? (mobileScore >= 95 ? `✅ ${mobileScore}` : `❌ ${mobileScore}`) : mobileScore,
  };
  scorecard.push(row);

  console.log(`[${String(desktopScore).padStart(3)} Desktop | ${String(mobileScore).padStart(3)} Mobile] ${route.name.padEnd(30)} (/${route.path})`);
}

console.log("\n========================== SUMMARY SCORECARD ==========================");
console.table(scorecard);

const totalPages = routes.length;
const desktop95 = scorecard.filter(r => String(r["Desktop Score"]).includes("✅")).length;
const mobile95 = scorecard.filter(r => String(r["Mobile Score"]).includes("✅")).length;
console.log(`\nDesktop 95+: ${desktop95}/${totalPages}`);
console.log(`Mobile  95+: ${mobile95}/${totalPages}`);
