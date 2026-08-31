// /home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/server/server.js

import { backend } from "./backend";

export async function request({ method, module, data, token }) {
	// console.log("server.request():", { module, method, data, token });

	if (!backend[module]) {
		const err = new Error(`Unknown module: ${module}`);
		err.status = 404;
		throw err;
	}

	const handler = backend[module][method];

	if (!handler) {
		const err = new Error(`Method not implemented: ${module}.${method}`);
		err.status = 404;
		throw err;
	}

	return await handler(data, token);
}