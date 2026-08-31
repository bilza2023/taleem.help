// /src/lib/taleem-specs/create/createPresentationV2.js

import {
	DeckVersion,
	BackgroundDefaults
} from "../enums";

export function createPresentationV2() {

	return {

		version: DeckVersion.V2,

		audio: null,

		background: {
			...BackgroundDefaults
		},

		deck: []

	};

}