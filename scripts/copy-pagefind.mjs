import { cpSync, existsSync } from "node:fs";

if (existsSync("dist/pagefind")) {
  cpSync("dist/pagefind", "public/pagefind", { recursive: true });
}
