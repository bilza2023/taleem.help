// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/server/library.js

import kernel from "taleem-kernel";

const VALID_TYPES = ["ARTICLE", "PLAYER"];

export async function createLibrary(data) {
	if (!VALID_TYPES.includes(data.type)) {
		const err = new Error(`Invalid type: ${data.type}`);
		err.status = 400;
		throw err;
	}

	return kernel.library.create(data);
}

export async function getLibrary(slug) {
	return kernel.library.get(slug, { includeUnpublished: true });
}

export async function listLibrary(filters) {
	return kernel.library.list(filters, { includeUnpublished: true });
}
export async function updateLibrary(slug, data) {
	const existing = await kernel.library.get(slug, { includeUnpublished: true });

	if (!existing) {
		const err = new Error(`Library item "${slug}" not found.`);
		err.status = 404;
		throw err;
	}

	return kernel.library.update(slug, data);
}

export async function deleteLibrary(slug) {
	const existing = await kernel.library.get(slug, { includeUnpublished: true });

	if (!existing) {
		const err = new Error(`Library item "${slug}" not found.`);
		err.status = 404;
		throw err;
	}

	return kernel.library.delete(slug);
}

export async function listLibraryByGroup(courseSlug, groupSlug) {
	return kernel.library.listByGroup(courseSlug, groupSlug, { includeUnpublished: true });
}