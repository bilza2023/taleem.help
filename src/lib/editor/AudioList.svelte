<!-- src/lib/editor/AudioList.svelte -->

<script>

	import { onMount } from "svelte";
	import apiFetch from "$lib/utils/fetch";

	export let audio = "";
	export let onUse = () => {};

	let files = [];
	let selected = "";

	onMount(load);

	async function load() {

		try {

			files = await apiFetch(
				"GET",
				"/media/audio"
			);

			if (audio) {

				selected = audio;

			}
			else if (files.length) {

				selected = files[0].filename;

			}

		}
		catch (err) {

			console.error(err);

		}

	}

	function useAudio() {

		onUse(selected);

	}

</script>

<div class="audio-panel">

	<span>Current</span>

	<input
		class="current"
		value={audio || ""}
		readonly
	/>

	<span>Library</span>

	<select bind:value={selected}>

		{#each files as file}

			<option value={file.filename}>
				{file.filename}
			</option>

		{/each}

	</select>

	<button on:click={useAudio}>

		Use

	</button>

</div>

<style>

.audio-panel {

	display: flex;
	align-items: center;
	gap: 10px;

	padding: 8px 12px;
	margin-bottom: 14px;

	background: #161616;
	border: 1px solid #333;
	border-radius: 6px;

}

.audio-panel span {

	font-size: 13px;
	color: #bbb;
	white-space: nowrap;

}

.current {

	width: 220px;

}

select {

	width: 240px;

}

button {

	height: 34px;
	padding: 0 16px;
	white-space: nowrap;

}

</style>