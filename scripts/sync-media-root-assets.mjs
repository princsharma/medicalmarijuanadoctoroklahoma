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
