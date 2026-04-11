import fs from "fs";
import path from "path";

const BASE_DIR =
  "/home/bilal-tariq/00--TALEEM/taleem-backoffice/static/content/builder-decks";

// get slug from CLI
const slug = process.argv[2];

if (!slug) {
  console.log("❌ Please provide a slug");
  process.exit(1);
}

// sanitize (basic)
const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-_]/g, "");

// file path
const filePath = path.join(BASE_DIR, `${cleanSlug}.js`);

// check if exists
if (fs.existsSync(filePath)) {
  console.log("⚠️ Deck already exists:", cleanSlug);
  process.exit(1);
}

// dummy template
const content = `import Builder from "taleem-builder";

export default function build() {
  const b = new Builder();

  b.meta({ name: "${cleanSlug}" });

  b.background()
    .color("#111111")
    .image(null)
    .opacity(0.3);

  b.end(50);

  return b.build();
}
`;

// write file
fs.writeFileSync(filePath, content);

console.log("✅ Deck created:", cleanSlug);