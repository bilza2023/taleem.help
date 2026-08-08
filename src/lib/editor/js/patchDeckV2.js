
///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/editor/js/patchDeckV2.js

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