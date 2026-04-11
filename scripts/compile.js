import fs from "fs";
import path from "path";

// =======================
// CONFIG
// =======================

const ROOT = "/home/bilal-tariq/00--TALEEM/taleem-backoffice";

const BUILD_DIR = path.join(ROOT, "static/content/build-decks");
const OUTPUT_DIR = path.join(ROOT, "static/content/decks");
const IMAGES_DIR = path.join(ROOT, "static/content/images");

// =======================
// HELPERS
// =======================

function isJS(file) {
  return file.endsWith(".js");
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractImages(obj) {
  const set = new Set();

  const walk = (o) => {
    if (typeof o === "string" && o.includes("/images/")) {
      const f = o.split("/images/")[1];
      if (f) set.add(f);
    } else if (o && typeof o === "object") {
      Object.values(o).forEach(walk);
    }
  };

  walk(obj);
  return [...set];
}

// =======================
// MAIN
// =======================

async function main() {
  console.log("\n🚀 COMPILE CLI\n");

  const files = fs.readdirSync(BUILD_DIR).filter(isJS);

  if (files.length === 0) {
    console.log("No decks found.");
    return;
  }

  const seenSlugs = new Set();

  for (const file of files) {
    const fullPath = path.join(BUILD_DIR, file);

    console.log(`\n➡️  ${file}`);

    try {
      const mod = await import(`file://${fullPath}`);
      const buildFn = mod.default;

      if (!buildFn) throw new Error("No default export");

      let result = buildFn();

      // builder instance → build()
      if (result && typeof result.build === "function") {
        result = result.build();
      }

      const deck = result;

      // =======================
      // VALIDATE NAME
      // =======================

      if (!deck.name) {
        throw new Error("Missing deck.name");
      }

      const slug = slugify(deck.name);

      if (!slug) {
        throw new Error("Invalid name → cannot generate slug");
      }

      if (seenSlugs.has(slug)) {
        throw new Error(`Duplicate slug: ${slug}`);
      }

      seenSlugs.add(slug);

      // =======================
      // VALIDATE IMAGES
      // =======================

      const images = extractImages(deck);

      for (const img of images) {
        const imgPath = path.join(IMAGES_DIR, img);

        if (!fs.existsSync(imgPath)) {
          throw new Error(`Missing image: ${img}`);
        }
      }

      // =======================
      // WRITE OUTPUT
      // =======================

      const outPath = path.join(OUTPUT_DIR, `${slug}.json`);

      fs.writeFileSync(outPath, JSON.stringify(deck, null, 2));

      console.log(`✅ ${slug}`);
    } catch (err) {
      console.log(`❌ ERROR in ${file}`);
      console.log(err.message);
      process.exit(1);
    }
  }

  console.log("\n✅ ALL DONE\n");
}

main();