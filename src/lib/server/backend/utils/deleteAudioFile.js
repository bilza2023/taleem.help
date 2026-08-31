// src/lib/server/utils/deleteAudioFile.js
import { deleteAssetFile } from "./deleteAssetFile.js";
import { config } from "$lib/config.js";
import path from "node:path";

export async function deleteAudioFile(slug) {
	return deleteAssetFile(path.join(config.contentDir, "audio"), slug);
}