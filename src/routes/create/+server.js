import fs from "fs";
import path from "path";

const BASE = "/home/bilal-tariq/00--TALEEM/taleem-backoffice/static/content";

const DECK_DIR = path.join(BASE, "builder-decks");
const IMAGE_DIR = path.join(BASE, "images");
const AUDIO_DIR = path.join(BASE, "audio");

// helper
function exists(p) {
	return fs.existsSync(p);
}

export async function POST({ request, url }) {
	const action = url.searchParams.get("action");

	// ---------------- CREATE DECK ----------------
	if (action === "deck") {
		const { slug } = await request.json();

		if (!slug) {
			return new Response("Missing slug", { status: 400 });
		}

		const safeSlug = slug.trim().toLowerCase();
		const filePath = path.join(DECK_DIR, `${safeSlug}.js`);

		if (exists(filePath)) {
			return new Response("Already exists");
		}

		const content = `export default function buildDeck() {
  return {
    name: "${safeSlug}",
    deck: []
  };
}
`;

		fs.writeFileSync(filePath, content);

		return new Response("Created");
	}

	// ---------------- IMAGE UPLOAD ----------------
	if (action === "image") {
		const form = await request.formData();
		const file = form.get("file");

		if (!file) {
			return new Response("No file", { status: 400 });
		}

		const allowed = ["png", "jpg", "jpeg", "webp", "svg"];
		const ext = file.name.split(".").pop().toLowerCase();

		if (!allowed.includes(ext)) {
			return new Response("Invalid image type", { status: 400 });
		}

		const filePath = path.join(IMAGE_DIR, file.name);

		if (exists(filePath)) {
			return new Response("Already exists");
		}

		const buffer = Buffer.from(await file.arrayBuffer());
		fs.writeFileSync(filePath, buffer);

		return new Response("Uploaded");
	}

	// ---------------- AUDIO UPLOAD ----------------
	if (action === "audio") {
		const form = await request.formData();
		const file = form.get("file");
		const slug = form.get("slug");

		if (!file || !slug) {
			return new Response("Missing file or slug", { status: 400 });
		}

		const allowed = ["mp3", "opus", "ogg"];
		const ext = file.name.split(".").pop().toLowerCase();

		if (!allowed.includes(ext)) {
			return new Response("Invalid audio type", { status: 400 });
		}

		const safeSlug = slug.trim().toLowerCase();
		const fileName = `${safeSlug}.${ext}`;
		const filePath = path.join(AUDIO_DIR, fileName);

		if (exists(filePath)) {
			return new Response("Already exists");
		}

		const buffer = Buffer.from(await file.arrayBuffer());
		fs.writeFileSync(filePath, buffer);

		return new Response("Uploaded");
	}

	// ---------------- FALLBACK ----------------
	return new Response("Invalid action", { status: 400 });
}