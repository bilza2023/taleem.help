
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
			await upload("/media/audio", form);
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

<style>
	:global(body) {
		margin: 0 !important;
		background: var(--theme-panel) !important;
		color: var(--theme-text) !important;
	}

	h1 {
		width: 90% !important;
		max-width: 720px !important;
		margin: 2rem auto 1rem !important;
		color: var(--theme-text) !important;
	}

	p {
		width: 90% !important;
		max-width: 720px !important;
		margin: 0 auto 1rem !important;
		color: var(--theme-text) !important;
	}

	div {
		width: 90% !important;
		max-width: 720px !important;
		margin: 0 auto 1rem !important;
		padding: 1rem !important;
		box-sizing: border-box !important;
		background: var(--theme-panel) !important;
		color: var(--theme-text) !important;
		border: 1px solid var(--theme-border) !important;
		border-radius: 10px !important;
	}

	label {
		display: flex !important;
		flex-direction: column !important;
		gap: .5rem !important;
		color: var(--theme-text) !important;
	}

	input,
	textarea {
		width: 100% !important;
		box-sizing: border-box !important;
		margin: 0 !important;
		padding: .7rem !important;
		background: var(--theme-panel) !important;
		color: var(--theme-text) !important;
		border: 1px solid var(--theme-border) !important;
		border-radius: 7px !important;
		font: inherit !important;
	}

	input[type="file"] {
		cursor: pointer;
	}

	input:focus,
	textarea:focus {
		border-color: var(--theme-accent) !important;
		outline: none !important;
	}

	textarea {
		min-height: 110px !important;
		resize: vertical;
	}

	button {
		display: block !important;
		width: 90% !important;
		max-width: 720px !important;
		margin: 1.25rem auto 2rem !important;
		padding: .75rem 1.25rem !important;
		background: var(--theme-accent) !important;
		color: var(--theme-text) !important;
		border: 1px solid var(--theme-accent) !important;
		border-radius: 8px !important;
		font-weight: 700 !important;
		cursor: pointer !important;
	}

	button:hover {
		opacity: .85 !important;
	}
</style>