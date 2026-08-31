// /src/lib/taleem-specs/validation/validateDeckV2.js

import { zodDeckV2 } from "../schema/zodDeckV2.js";

export function validateDeckV2(deck) {

	const result = zodDeckV2.safeParse(deck);

	if (result.success) {
		return {
			ok: true,
			value: result.data
		};
	}

	return {
		ok: false,
		stage: "schema",
		errors: result.error.issues.map(issue => ({
			path: issue.path.join("."),
			message: issue.message,
			code: issue.code,
			expected: issue.expected,
			received: issue.received
		}))
	};

}