// /home/bilal-tariq/00--TALEEM/taleem.studio/src/routes/api/server/+server.js

import { json } from "@sveltejs/kit";
import { request as serverRequest } from "$lib/server/server.js";

function getBearerToken(request) {
	const header = request.headers.get("authorization") || "";
	return header.startsWith("Bearer ") ? header.slice(7) : null;
}

export async function GET({ request, url }) {
	const module = url.searchParams.get("module");
	const data = JSON.parse(url.searchParams.get("data") || "{}");
	const token = getBearerToken(request);

	// console.log("api/server GET:", { module, data, token });

	return json(await serverRequest({
		method: request.method,
		module,
		data,
		token
	}));
}

export async function POST({ request }) {
	const body = await request.json();
	const token = getBearerToken(request);

	// console.log("api/server POST:", { ...body, token });

	return json(await serverRequest({
		method: request.method,
		...body,
		token
	}));
}

export async function PUT({ request }) {
	const body = await request.json();
	const token = getBearerToken(request);

	return json(await serverRequest({
		method: request.method,
		...body,
		token
	}));
}

export async function PATCH({ request }) {
	const body = await request.json();
	const token = getBearerToken(request);

	return json(await serverRequest({
		method: request.method,
		...body,
		token
	}));
}

export async function DELETE({ request }) {
	const body = await request.json();
	const token = getBearerToken(request);

	return json(await serverRequest({
		method: request.method,
		...body,
		token
	}));
}