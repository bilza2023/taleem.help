
// /src/lib/editor/js/finalizeDeckV2.js

import { patchDeckV2 } from "./patchDeckV2.js";
import { validateDeckV2 } from "$lib/taleem-specs/validation/validateDeckV2.js";
import { validateTimelineV2 } from "$lib/taleem-specs/validation/validateTimelineV2.js";

export function finalizeDeckV2(presentation) {
//  debugger;
	const patched = patchDeckV2(presentation);
console.log(JSON.stringify(patched, null, 2));
	const schema = validateDeckV2(patched);

	if (!schema.ok) {

		return {
			ok: false,
			stage: "schema",
			errors: schema.errors
		};

	}

	const playback = validateTimelineV2(patched);

	if (!playback.ok) {

		return {
			ok: false,
			stage: "playback",
			errors: playback.errors
		};

	}

	return {
		ok: true,
		presentation: patched
	};

}