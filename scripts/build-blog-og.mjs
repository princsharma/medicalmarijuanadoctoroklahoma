import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const media = path.join(root, "public", "media");
const outPath = path.join(media, "blog-guides-social-og.webp");

function firstExisting(...paths) {
  for (const p of paths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const sourcePath =
  firstExisting(
    path.join(media, "blog-guides-social-og-source.png"),
    path.join(media, "contributors-team-social-og-source.png"),
  ) ?? path.join(media, "homepage-whatis-section.webp");

const WIDTH = 1200;
const HEIGHT = 630;

if (!fs.existsSync(sourcePath)) {
  console.error(
    `Missing source. Add public/media/blog-guides-social-og-source.png`,
  );
  process.exit(1);
}

const isWritingPhoto = sourcePath.endsWith(".png");
const position = isWritingPhoto ? "right" : "centre";

/** Scale/crop only — no overlays. PNG uses a different crop than contributors OG. */
await sharp(sourcePath)
  .resize(WIDTH, HEIGHT, { fit: "cover", position })
  .webp({ quality: 92 })
  .toFile(outPath);

console.log("Wrote", outPath, "from", path.basename(sourcePath));
