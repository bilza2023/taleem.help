<script>
	import upload from "$lib/utils/upload";

	let file = null;
	let description = "";

	async function uploadAudio() {

		if (!file) {

			alert("Please choose an audio file.");
			return;

		}

		const form = new FormData();

		form.append("file", file);
		form.append("description", description);

		try {

			await upload(
				"/media/audio",
				form
			);

			alert("Audio uploaded.");

			file = null;
			description = "";

		}
		catch (error) {

			alert(error.message);

		}

	}
</script>

<h1>Audio</h1>

<p>Upload a new audio file.</p>

<div>

	<label>

		Audio

		<input
			type="file"
			accept="audio/*"
			onchange={(e) => file = e.currentTarget.files?.[0] ?? null}
		/>

	</label>

</div>

<div>

	<label>

		Description

		<textarea bind:value={description}></textarea>

	</label>

</div>

<p>

	<button onclick={uploadAudio}>
		Upload Audio
	</button>

</p>