

import apiFetch from "$lib/utils/fetch";

export async function getLibrary(slug) {
	return apiFetch("GET", `/library/${slug}`);
}