///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/utils/fetch.js

import { config } from "$lib/config";

export default async function apiFetch(method, path, body = null) {
	const options = {
		method,
		headers: {}
	};

	const token = localStorage.getItem("taleem-token");

	if (token) {
		options.headers.Authorization = `Bearer ${token}`;
	}

	if (body !== null) {
		options.headers["Content-Type"] = "application/json";
		options.body = JSON.stringify(body);
	}

	let response;

	try {
		response = await fetch(config.apiUrl  + path, options);
	} catch {
		throw new Error("Unable to contact Taleem Server.");
	}

	const contentType = response.headers.get("content-type") || "";

	let data = null;

	if (contentType.includes("application/json")) {
		data = await response.json();
	} else {
		data = await response.text();
	}

	if (!response.ok) {
		throw new Error(data?.message || data?.error || `HTTP ${response.status}`);
	}

	return data;
}