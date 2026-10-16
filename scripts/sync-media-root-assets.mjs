import fs from "fs";
import path from "path";

const mediaDir = path.join(process.cwd(), "public", "media");
const publicDir = path.join(process.cwd(), "public");

if (!fs.existsSync(mediaDir)) {
  process.exit(0);
}

for (const file of fs.readdirSync(mediaDir)) {
  if (!/\.(?:webp|png|jpe?g|gif|ico)$/i.test(file)) continue;
  const src = path.join(mediaDir, file);
  if (!fs.statSync(src).isFile()) continue;
  fs.copyFileSync(src, path.join(publicDir, file));
}

/** Legacy share URLs still cached by social platforms. */
const legacyAliases = {
  "robert-saint-laurent-author-of-my-mmj-doctor.webp":
    "profile-image-of-robert-saint-laurent.webp",
};

for (const [alias, source] of Object.entries(legacyAliases)) {
  const src = path.join(mediaDir, source);
  if (!fs.existsSync(src)) continue;
  fs.copyFileSync(src, path.join(publicDir, alias));
}
