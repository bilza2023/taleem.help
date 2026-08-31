///home/bilal-tariq/00--TALEEM/taleem.studio/src/routes/content/[...path]/+server.js
import { error } from "@sveltejs/kit";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { config } from "$lib/config.js";

const CONTENT_DIR = config.contentDir;

const TYPES = {
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp",
	".gif": "image/gif",
	".svg": "image/svg+xml",
	".mp3": "audio/mpeg",
	".wav": "audio/wav",
	".opus": "audio/ogg",
	".ogg": "audio/ogg"
};

export async function GET({ params }) {
	const relativePath = params.path;
// console.log("content route hit:", { relativePath, CONTENT_DIR, resolved: path.resolve(CONTENT_DIR) });
	if (!relativePath) {
		throw error(404, "File not found");
	}

	const contentRoot = path.resolve(CONTENT_DIR);
	const filePath = path.resolve(contentRoot, relativePath);

	// Prevent ../ from escaping content/
	if (!filePath.startsWith(contentRoot + path.sep)) {
		throw error(403, "Forbidden");
	}

	try {
		const data = await readFile(filePath);
		const ext = path.extname(filePath).toLowerCase();

		return new Response(data, {
			headers: {
				"Content-Type": TYPES[ext] || "application/octet-stream",
				"Cache-Control": "no-cache"
			}
		});
	} catch {
		throw error(404, "File not found");
	}
}