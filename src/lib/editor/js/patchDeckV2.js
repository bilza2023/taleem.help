
// /src/lib/taleem-specs/patch/patchDeckV2.js

import {DeckVersion,BackgroundDefaults} from "../../taleem-specs/enums";

export function patchDeckV2(presentation) {

    presentation ??= {};
	return {

		version:
			presentation.version ??
			DeckVersion.V2,

		name:
			presentation.name,

		background: {

			...BackgroundDefaults,

			...(presentation.background ?? {})

		},

		audio:
			presentation.audio,

		deck:
			presentation.deck ?? []

	};

}