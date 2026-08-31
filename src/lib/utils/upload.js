import { config } from "$lib/config";

export default async function upload(path, form) {

	const token = localStorage.getItem("taleem-token");

	const response = await fetch(
		config.apiUrl + path,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: form
		}
	);

	const text = await response.text();

	let data;

	try {
		data = JSON.parse(text);
	}
	catch {
		throw new Error(
			`Server returned non-JSON response (${response.status}): ${text.slice(0, 200)}`
		);
	}

	if (!response.ok) {
		throw new Error(
			data.error || `HTTP ${response.status}`
		);
	}

	return data;
}