// src/lib/send/index.js

import { config } from "$lib/config.js";

const ENDPOINT = `${config.basePath}/api/server`;

function getToken() {
	return localStorage.getItem("taleem-token");
}

export async function send(module, method, data = {}) {
	const token = getToken();

	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...(token ? { Authorization: `Bearer ${token}` } : {})
		},
		body: JSON.stringify({ module, method, data })
	};

	let response;

	try {
		response = await fetch(ENDPOINT, options);
	} catch {
		throw new Error("Unable to contact Taleem Server.");
	}

	const contentType = response.headers.get("content-type") || "";
	const result = contentType.includes("application/json")
		? await response.json()
		: await response.text();

	if (!response.ok) {
		throw new Error(result?.error || result?.message || `HTTP ${response.status}`);
	}

	return result;
}