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

		errors: result.error.issues

	};

}