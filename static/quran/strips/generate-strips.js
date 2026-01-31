import fs from "fs";
import path from "path";
import { createCanvas, registerFont } from "canvas";
import sharp from "sharp";
import { fileURLToPath } from "url";

/* =====================
   FIXED PATH BASE
   ===================== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
 Script lives in:
 ui/static/quran/strips/
*/
const ROOT = __dirname;

/* =====================
   CONFIG (LOCKED)
   ===================== */
const AYAH_PER_STRIP = 6;

const TILE_SIZE = 64;
const SCENE_TILES_W = 40;
const SCENE_TILES_H = 20;

const SCENE_WIDTH_PX = SCENE_TILES_W * TILE_SIZE;   // 2560
const SCENE_HEIGHT_PX = SCENE_TILES_H * TILE_SIZE;  // 1280

// Text layout (top half)
const TEXT_Y = 160;
const TEXT_MARGIN_X = 120;

// Style
const FONT_SIZE = 64;
const TEXT_COLOR = "#000000";

/* =====================
   PATHS
   ===================== */
const QURAN_PATH = path.join(ROOT, "quran.json");
const OUTPUT_ROOT = path.join(ROOT, "output");

const FONT_REGULAR = path.join(ROOT, "fonts", "Amiri-Regular.ttf");
const FONT_BOLD = path.join(ROOT, "fonts", "Amiri-Bold.ttf");

/* =====================
   REGISTER FONTS
   ===================== */
registerFont(FONT_REGULAR, { family: "Amiri", weight: "normal" });
registerFont(FONT_BOLD, { family: "Amiri", weight: "bold" });

/* =====================
   LOAD QURAN
   ===================== */
const quran = JSON.parse(fs.readFileSync(QURAN_PATH, "utf8"));
fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

/* =====================
   MAIN
   ===================== */
for (const surah of quran) {
  const surahId = String(surah.id).padStart(3, "0");
  const verses = surah.verses;

  const surahDir = path.join(OUTPUT_ROOT, surahId);
  fs.mkdirSync(surahDir, { recursive: true });

  let stripIndex = 1;

  for (let i = 0; i < verses.length; i += AYAH_PER_STRIP) {
    const chunk = verses.slice(i, i + AYAH_PER_STRIP);

    const canvasWidth = SCENE_WIDTH_PX * chunk.length;
    const canvas = createCanvas(canvasWidth, SCENE_HEIGHT_PX);
    const ctx = canvas.getContext("2d");

    /* 
      IMPORTANT:
      No background drawing.
      Canvas is transparent by default.
    */

    // Text setup
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = `${FONT_SIZE}px Amiri`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.direction = "rtl";

    // Draw ayahs
    chunk.forEach((v, index) => {
      const baseX = index * SCENE_WIDTH_PX;
      const centerX = baseX + SCENE_WIDTH_PX / 2;

      ctx.fillText(
        `${v.id}. ${v.text}`,
        centerX,
        TEXT_Y,
        SCENE_WIDTH_PX - TEXT_MARGIN_X * 2
      );

      // Separator line (opaque)
      ctx.fillRect(
        baseX + SCENE_WIDTH_PX - 2,
        0,
        2,
        SCENE_HEIGHT_PX
      );
    });

    // Export WEBP (alpha preserved)
    const pngBuffer = canvas.toBuffer("image/png");

    const outFile = path.join(
      surahDir,
      `${surahId}-${String(stripIndex).padStart(2, "0")}.webp`
    );

    await sharp(pngBuffer)
      .webp({ quality: 92 })
      .toFile(outFile);

    stripIndex++;
  }
}

console.log("✅ TRANSPARENT WEBP Quran strips generated successfully");
