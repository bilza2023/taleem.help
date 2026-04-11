import fs from "fs";
import path from "path";
import readline from "readline";

// =======================
// CONFIG
// =======================

const ROOT = "/home/bilal-tariq/00--TALEEM/taleem-backoffice";

const WORKBENCH = path.join(ROOT, "static/workbench-content");
const WORK_DECK = path.join(WORKBENCH, "the-deck.js");

const CONTENT = path.join(ROOT, "static/content");
const CONTENT_DECKS = path.join(CONTENT, "decks");
const CONTENT_IMAGES = path.join(CONTENT, "images");
const CONTENT_AUDIO = path.join(CONTENT, "audio");
const BUILD_DECKS = path.join(CONTENT, "build-decks");

// =======================
// EXTENSIONS
// =======================

const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".webp", ".svg"];
const AUDIO_EXT = [".mp3", ".opus"];

// =======================
// CLI
// =======================

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q) =>
  new Promise((resolve) => rl.question(q, (ans) => resolve(ans.trim())));

// =======================
// HELPERS
// =======================

function isImage(file) {
  return IMAGE_EXT.includes(path.extname(file).toLowerCase());
}

function isAudio(file) {
  return AUDIO_EXT.includes(path.extname(file).toLowerCase());
}

// =======================
// LOAD DECK
// =======================

async function loadDeck() {
  const mod = await import(`file://${WORK_DECK}`);
  return typeof mod.default === "function" ? mod.default() : mod.default;
}

// =======================
// MAIN
// =======================

async function main() {
  console.log("\n🚀 DONE CLI (STRICT PIPELINE)\n");

  const deck = await loadDeck();

  // =======================
  // SLUG RESOLUTION
  // =======================

  let slug = deck.slug;

  if (!slug) {
    slug = await ask("Enter slug: ");
  }

  if (!slug) {
    console.log("❌ Slug is required");
    process.exit(1);
  }

  deck.slug = slug;

  const files = fs.readdirSync(WORKBENCH);

  // =======================
  // TEST 1: AUDIO COUNT
  // =======================

  const audioFiles = files.filter(isAudio);

  if (audioFiles.length > 1) {
    console.log("\n❌ Multiple audio files found:");
    audioFiles.forEach((f) => console.log(" -", f));
    process.exit(1);
  }

  // =======================
  // TEST 2: SLUG EXISTS
  // =======================

  const deckPath = path.join(CONTENT_DECKS, `${slug}.json`);

  if (fs.existsSync(deckPath)) {
    console.log(`\n❌ Slug "${slug}" already exists`);
    console.log("Delete or rename manually.");
    process.exit(1);
  }

  // =======================
  // TEST 3: IMAGE CONFLICT
  // =======================

  const images = files.filter(isImage);

  for (let img of images) {
    if (img.startsWith("gen-")) continue;

    const dest = path.join(CONTENT_IMAGES, img);

    if (fs.existsSync(dest)) {
      console.log(`\n❌ Image conflict: ${img}`);
      process.exit(1);
    }
  }

  // =======================
  // TEST 4: AUDIO CONFLICT
  // =======================

  if (audioFiles.length === 1) {
    const ext = path.extname(audioFiles[0]);
    const dest = path.join(CONTENT_AUDIO, `${slug}${ext}`);

    if (fs.existsSync(dest)) {
      console.log(`\n❌ Audio conflict: ${slug}${ext}`);
      process.exit(1);
    }
  }

  console.log("✅ All checks passed\n");

  // =======================
  // ARCHIVE JS
  // =======================

  fs.copyFileSync(
    WORK_DECK,
    path.join(BUILD_DECKS, `${slug}.js`)
  );

  // =======================
  // WRITE JSON
  // =======================

  fs.writeFileSync(
    path.join(CONTENT_DECKS, `${slug}.json`),
    JSON.stringify(deck, null, 2)
  );

  // =======================
  // MOVE IMAGES
  // =======================

  let imgCount = 0;

  for (let img of images) {
    if (img.startsWith("gen-")) continue;

    const src = path.join(WORKBENCH, img);
    const dest = path.join(CONTENT_IMAGES, img);

    fs.copyFileSync(src, dest);
    imgCount++;
  }

  // =======================
  // MOVE AUDIO
  // =======================

  let audioMoved = false;

  if (audioFiles.length === 1) {
    const file = audioFiles[0];
    const ext = path.extname(file);

    fs.copyFileSync(
      path.join(WORKBENCH, file),
      path.join(CONTENT_AUDIO, `${slug}${ext}`)
    );

    audioMoved = true;
  }

  // =======================
  // MARK OK TO DELETE
  // =======================

  fs.writeFileSync(
    path.join(WORKBENCH, "ok-to-delete.txt"),
    "This workspace is safe to wipe.\n"
  );

  console.log("✅ DONE");
  console.log(`Deck: ${slug}`);
  console.log(`Images: ${imgCount}`);
  console.log(`Audio: ${audioMoved ? "yes" : "no"}`);
  console.log("🧹 ok-to-delete.txt created");

  rl.close();
}

main();