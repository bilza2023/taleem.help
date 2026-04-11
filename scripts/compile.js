import fs from "fs";
import path from "path";

// =======================
// CONFIG
// =======================

const ROOT = "/home/bilal-tariq/00--TALEEM/taleem-backoffice";

const INPUT_DIR = path.join(ROOT, "static/content/builder-decks");
const OUTPUT_DIR = path.join(ROOT, "static/content/decks");

// =======================
// MAIN
// =======================

async function main() {
	console.log("\n🚀 COMPILE CLI\n");

	// safety
	if (!fs.existsSync(INPUT_DIR)) {
		console.log("❌ INPUT DIR NOT FOUND:", INPUT_DIR);
		process.exit(1);
	}

	const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith(".js"));

	if (files.length === 0) {
		console.log("No builder files found.");
		return;
	}

	for (const file of files) {
		const fullPath = path.join(INPUT_DIR, file);
		const slug = file.replace(".js", "");

		console.log(`\n➡️  ${file}`);

		try {
			const mod = await import(`file://${fullPath}`);
			const buildFn = mod.default;

			if (!buildFn) throw new Error("No default export");

			let result = buildFn();

			// support builder pattern
			if (result && typeof result.build === "function") {
				result = result.build();
			}

			const deck = result;

			// optional safety
			if (!deck || typeof deck !== "object") {
				throw new Error("Invalid deck output");
			}

			// ensure name exists
			deck.name = deck.name || slug;

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