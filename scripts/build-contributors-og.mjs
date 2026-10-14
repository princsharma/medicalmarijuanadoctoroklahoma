import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const media = path.join(root, "public", "media");
const sourcePath = path.join(media, "contributors-team-social-og-source.png");
const outPath = path.join(media, "contributors-team-social-og.webp");

/** Open Graph standard size; image is only cropped/scaled — no text or overlays. */
const WIDTH = 1200;
const HEIGHT = 630;

if (!fs.existsSync(sourcePath)) {
  console.error(
    `Missing source photo. Add it at:\n  ${sourcePath}\nThen run: node scripts/build-contributors-og.mjs`,
  );
  process.exit(1);
}

await sharp(sourcePath)
  .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
  .webp({ quality: 92 })
  .toFile(outPath);

console.log("Wrote", outPath);
