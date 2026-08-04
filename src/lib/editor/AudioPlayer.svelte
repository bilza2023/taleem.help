<!-- src/lib/editor/AudioPlayer.svelte -->

<script>

	import { onDestroy } from "svelte";
	import { Howl } from "howler";
	import { config } from "$lib/config";

	export let audio = "";
	export let runningTime = 0;

	let player = null;
	let duration = 0;
	let playing = false;
	let timer = null;

	$: loadAudio(audio);

	function loadAudio(filename) {

		if (!filename) return;

		if (player) {

			player.unload();

		}

		player = new Howl({

			src: [
				`${config.apiUrl}/content/audio/${filename}`
			],

			html5: true,

			onload() {

				duration = player.duration();

			},

			onend() {

				playing = false;
				runningTime = duration;

			}

		});

		runningTime = 0;
		playing = false;

	}

	function play() {

		if (!player) return;

		player.play();

		playing = true;

		startTimer();

	}

	function pause() {

		if (!player) return;

		player.pause();

		playing = false;

		stopTimer();

	}

	function stop() {

		if (!player) return;

		player.stop();

		playing = false;

		runningTime = 0;

		stopTimer();

	}

	function seek(event) {

		if (!player) return;

		const value = Number(event.target.value);

		player.seek(value);

		runningTime = value;

	}

	function startTimer() {

		stopTimer();

		timer = setInterval(() => {

			if (!player) return;

			runningTime = Number(player.seek());

		}, 100);

	}

	function stopTimer() {

		if (timer) {

			clearInterval(timer);

			timer = null;

		}

	}

	function format(seconds) {

		const m = Math.floor(seconds / 60);
		const s = Math.floor(seconds % 60);

		return `${m}:${String(s).padStart(2, "0")}`;

	}

	onDestroy(() => {

		stopTimer();

		if (player) {

			player.unload();

		}

	});

</script>
<div class="player">

	<div class="transport">

		<button class="icon" on:click={play}>▶</button>
		<button class="icon" on:click={pause}>❚❚</button>
		<button class="icon" on:click={stop}>◼</button>

	</div>

	<div class="time">

		{format(runningTime)}
		/
		{format(duration)}

	</div>

	<input

		class="timeline"

		type="range"

		min="0"

		max={duration}

		step="0.01"

		bind:value={runningTime}

		on:input={seek}

	/>

</div>