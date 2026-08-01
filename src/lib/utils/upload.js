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

	const data = await response.json();

	if (!response.ok) {

		throw new Error(
			data.error || `HTTP ${response.status}`
		);

	}

	return data;

}