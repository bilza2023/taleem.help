import fs from "fs";
import path from "path";

const DECKS_DIR = "/home/bilal-tariq/00--TALEEM/taleem-backoffice/static/content/decks";

export function load() {
  const files = fs.readdirSync(DECKS_DIR);

  const decks = files
    .filter((f) => f.endsWith(".json"))
    .map((file) => {
      const fullPath = path.join(DECKS_DIR, file);
      const raw = fs.readFileSync(fullPath, "utf-8");

      try {
        const json = JSON.parse(raw);

        return {
          name: json.name || file,
          slug: file.replace(".json", "") // 👈 important
        };
      } catch (e) {
        return null;
      }
    })
    .filter(Boolean);

  return { decks };
}