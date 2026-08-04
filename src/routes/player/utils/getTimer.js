// getTimer.js

import { createAudioTimer } from "./createAudioTimer.js";
import { createSilentTimer } from "./createSilentTimer.js";

const AUDIO_BASE =
	"/static-presentations/audio/";

export async function getTimer(
	audioFileName,
	Howl
) {

	if (!audioFileName) {
		return createSilentTimer();
	}

	return createAudioTimer({

		url:
			AUDIO_BASE + audioFileName,

		Howl

	});

}