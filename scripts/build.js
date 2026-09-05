import { rm, mkdir, cp, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ejs from "ejs";

import menuData from "../data/menuData.js";

// ES modules do not provide __dirname, so derive the project root from this file.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const distDirectory = path.join(projectRoot, "dist");
const publicDirectory = path.join(projectRoot, "public");
const templatePath = path.join(projectRoot, "views", "index.ejs");

// Start from a clean output folder so removed assets never remain in a new build.
await rm(distDirectory, { recursive: true, force: true });
await mkdir(distDirectory, { recursive: true });

// Copy CSS, client-side JavaScript, images, and any future public assets as-is.
await cp(publicDirectory, distDirectory, { recursive: true });

// Render the same EJS template with the same data used by the Express home route.
const html = await ejs.renderFile(templatePath, {
  restaurantName: "PAPARIZZA",
  menuData
});

await writeFile(path.join(distDirectory, "index.html"), html, "utf8");

console.log("Static PAPARIZZA site built successfully in dist/.");
