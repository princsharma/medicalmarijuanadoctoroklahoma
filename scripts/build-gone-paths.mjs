import fs from "fs";
import path from "path";

const transcript = path.join(
  process.env.USERPROFILE,
  ".cursor/projects/c-Users-khush-OneDrive-Desktop-medical-marijuana-oklahoma/agent-transcripts/2caa2035-572b-4f7c-b74d-70e582c87bda/2caa2035-572b-4f7c-b74d-70e582c87bda.jsonl"
);

const line = fs
  .readFileSync(transcript, "utf8")
  .split(/\n/)
  .find((l) => l.includes("1-cent-bet-slot-games"));

const obj = JSON.parse(line);
const text = obj.message.content[0].text;
const urls = [...text.matchAll(/https?:\/\/medicalmarijuanadoctoroklahoma\.com\S*/g)].map(
  (m) => m[0].replace(/[",]+$/, "")
);

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
]);

const paths = new Set();
const pIds = new Set();
const skipped = [];

function withTrailingSlash(pathname) {
  if (!pathname || pathname === "/") return pathname || "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

for (const raw of urls) {
  let u;
  try {
    u = new URL(raw);
  } catch {
    skipped.push(raw);
    continue;
  }
  if (u.pathname.startsWith("/_next/")) {
    skipped.push(raw);
    continue;
  }

  const p = u.searchParams.get("p");
  if (p) {
    pIds.add(p);
    continue;
  }

  const normalized = withTrailingSlash(u.pathname);
  if (REDIRECT_PATHS.has(normalized)) {
    skipped.push(raw);
    continue;
  }
  paths.add(normalized);
}

const outDir = path.join(process.cwd(), "lib");
const data = {
  paths: [...paths].sort(),
  pIds: [...pIds].sort((a, b) => Number(a) - Number(b)),
};

fs.writeFileSync(path.join(outDir, "gone-urls.json"), JSON.stringify(data));

console.log({
  urls: urls.length,
  paths: data.paths.length,
  pIds: data.pIds.length,
  total: data.paths.length + data.pIds.length,
  skipped: skipped.length,
  skippedSample: skipped.slice(0, 6),
});
