import fs from "fs";
import path from "path";

// =======================
// CONFIG
// =======================

const ROOT = "/home/bilal-tariq/00--TALEEM/taleem-backoffice";

const WORKBENCH = path.join(ROOT, "static/workbench-content");
const FLAG = "ok-to-delete.txt";
const DECK_FILE = "the-deck.js";

// =======================
// MAIN
// =======================

function main() {
  console.log("\n🧹 WIPE CLI\n");

  const flagPath = path.join(WORKBENCH, FLAG);

  // =======================
  // SAFETY CHECK
  // =======================

  if (!fs.existsSync(flagPath)) {
    console.log("❌ ok-to-delete.txt not found");
    console.log("Run done.js first.");
    process.exit(1);
  }

  console.log("✅ Safe to wipe\n");

  const files = fs.readdirSync(WORKBENCH);

  let deleted = 0;
  let skipped = 0;

  for (let file of files) {
    const filePath = path.join(WORKBENCH, file);

    // =======================
    // SKIP RULES
    // =======================

    if (file === FLAG) continue; // delete later
    if (file === DECK_FILE) {
      skipped++;
      continue;
    }

    if (file.startsWith("gen-")) {
      skipped++;
      continue;
    }

    // =======================
    // DELETE
    // =======================

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(filePath);
    }

    deleted++;
  }

  // =======================
  // DELETE FLAG LAST
  // =======================

  fs.unlinkSync(flagPath);

  console.log("✅ WIPE COMPLETE");
  console.log(`Deleted: ${deleted}`);
  console.log(`Kept (gen-* + deck): ${skipped}`);
}

main();