export async function fetchSyllabus(course) {

	const res =
		await fetch(
			`/data/syllabus/${course}.json`
		);

	if (!res.ok) {

		throw new Error(
			`Failed to load syllabus: ${course}`
		);
	}

	return await res.json();
}