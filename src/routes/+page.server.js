import fs from "fs";
import path from "path";

const DECKS_DIR = "/home/bilal-tariq/00--TALEEM/taleem-backoffice/static/content/decks";

export function load() {
	// safety
	if (!fs.existsSync(DECKS_DIR)) {
		return { decks: [] };
	}

	const files = fs.readdirSync(DECKS_DIR);

	const decks = files
		.filter((f) => f.endsWith(".json"))
		.map((file) => {
			const slug = file.replace(".json", "");

			return {
				name: slug,
				slug: slug
			};
		});

	return { decks };
}