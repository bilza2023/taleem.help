
// /home/bilal-tariq/00--TALEEM/taleem.studio/src/routes/api/upload/+server.js

import { json } from "@sveltejs/kit";
import { uploadAsset } from "$lib/server/assets.js";

function getBearerToken(request) {
	const header = request.headers.get("authorization") || "";
	return header.startsWith("Bearer ") ? header.slice(7) : null;
}

export async function POST({ request }) {
	try {
		const token = getBearerToken(request);
		const form = await request.formData();
		const type = form.get("type");

		if (!type) {
			return json({ error: "Upload type is required" }, { status: 400 });
		}

		const result = await uploadAsset(type, form, token);

		return json(result, { status: 201 });

	} catch (error) {
		console.error(error);

		return json(
			{ error: error.message },
			{ status: error.status || 400 }
		);
	}
}