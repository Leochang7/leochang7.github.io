import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, normalize } from "node:path";

const distDir = "dist";
const htmlFiles = [];

function collectHtml(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      collectHtml(path);
    } else if (path.endsWith(".html")) {
      htmlFiles.push(path);
    }
  }
}

function targetExists(url) {
  const cleanUrl = url.split("#")[0].split("?")[0];
  if (!cleanUrl || cleanUrl.startsWith("http") || cleanUrl.startsWith("mailto:")) {
    return true;
  }

  const relative = decodeURIComponent(cleanUrl).replace(/^\/+/, "");
  const candidates = [
    join(distDir, relative),
    join(distDir, relative, "index.html"),
  ];

  return candidates.some((candidate) => existsSync(normalize(candidate)));
}

collectHtml(distDir);

const missing = [];
const linkPattern = /\b(?:href|src)="([^"]+)"/g;

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const match of html.matchAll(linkPattern)) {
    const url = match[1];
    if (!targetExists(url)) {
      missing.push(`${file}: ${url}`);
    }
  }
}

if (missing.length > 0) {
  console.error("Missing internal links:");
  console.error(missing.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files. No missing internal links.`);
