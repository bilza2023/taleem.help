// getTimer.js
import {config} from "$lib/config.js";
import { createAudioTimer } from "./createAudioTimer.js";
import { createSilentTimer } from "./createSilentTimer.js";

const AUDIO_BASE = `${config.apiUrl}/content/audio/`;

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