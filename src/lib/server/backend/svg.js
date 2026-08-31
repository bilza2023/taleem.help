import kernel from 'taleem-kernel';
import { requireAdmin } from './utils/requireAdmin.js';

export async function createSvg(data, token) {
	await requireAdmin(token);
	return kernel.svg.create(data);
}

export async function getSvg(slug) {
	return kernel.svg.get(slug);
}

export async function listSvg(filters) {
	return kernel.svg.list(filters);
}

export async function updateSvg(slug, data, token) {
	await requireAdmin(token);
	return kernel.svg.update(slug, data);
}

export async function deleteSvg(slug, token) {
	await requireAdmin(token);
	return kernel.svg.delete(slug);
}