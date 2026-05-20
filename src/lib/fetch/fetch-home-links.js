export async function fetchHomeLinks() {

	const res =
		await fetch(
			"/data/home-links.json"
		);

	if (!res.ok) {

		throw new Error(
			"Failed to load home links"
		);
	}

	return await res.json();
}