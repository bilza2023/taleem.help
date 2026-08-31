
import kernel from 'taleem-kernel';
import { requireAdmin } from './utils/requireAdmin.js';
import { deleteAssetFile } from './utils/deleteAssetFile.js';
import {config} from "$lib/config.js";

export async function createImage(data, token) {
	await requireAdmin(token);
	return kernel.image.create(data);
}

export async function getImage(slug) {
	return kernel.image.get(slug);
}

export async function listImages(filters) {
	return kernel.image.list(filters);
}

export async function updateImage(slug, data, token) {
	await requireAdmin(token);
	return kernel.image.update(slug, data);
}

export async function deleteImage(slug, token) {
	await requireAdmin(token);
	await deleteAssetFile(config.imageDir, slug);
	return kernel.image.delete(slug);
}