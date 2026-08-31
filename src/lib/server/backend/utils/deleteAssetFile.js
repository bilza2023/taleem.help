// src/lib/server/utils/deleteAssetFile.js
import { unlink } from "node:fs/promises";
import path from "node:path";

export async function deleteAssetFile(dir, slug) {
	const filePath = path.resolve(dir, slug);

	try {
		await unlink(filePath);
	} catch (err) {
		if (err.code !== "ENOENT") {
			throw err; // real error (permissions etc.) — don't swallow
		}
		// ENOENT: file already gone — not fatal, DB delete should still proceed
	}
}