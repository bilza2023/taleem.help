///home/bilal-tariq/00--TALEEM/taleem.studio/src/routes/player/js/getTimer.js
import {config} from "$lib/config.js";
import { createAudioTimer } from "./createAudioTimer.js";
import { createSilentTimer } from "./createSilentTimer.js";

const AUDIO_BASE = `${config.basePath}/content/audio/`;

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