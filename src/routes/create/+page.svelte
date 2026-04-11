<script>
	let deckSlug = "";

	let imageFile;
	let audioFile;
	let audioSlug = "";

	// -------- CREATE DECK --------
	async function createDeck() {
		if (!deckSlug) return alert("Enter slug");

		const res = await fetch("/create?action=deck", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ slug: deckSlug })
		});

		alert(await res.text());
	}

	// -------- IMAGE --------
	async function uploadImage() {
		if (!imageFile) return alert("Select image");

		const form = new FormData();
		form.append("file", imageFile);

		const res = await fetch("/create?action=image", {
			method: "POST",
			body: form
		});

		alert(await res.text());
	}

	// -------- AUDIO --------
	async function uploadAudio() {
		if (!audioFile || !audioSlug) return alert("Missing audio/slug");

		const form = new FormData();
		form.append("file", audioFile);
		form.append("slug", audioSlug);

		const res = await fetch("/create?action=audio", {
			method: "POST",
			body: form
		});

		alert(await res.text());
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
</svelte:head>

<main>
	<h1>⚙️ Create Panel</h1>

	<h2>Create Deck</h2>
	<input placeholder="deck-slug" bind:value={deckSlug} />
	<button on:click={createDeck}>Create</button>

	<hr />

	<h2>Upload Image</h2>
	<input type="file" accept=".png,.jpg,.jpeg,.webp,.svg"
		on:change={(e) => imageFile = e.target.files[0]} />
	<button on:click={uploadImage}>Upload Image</button>

	<hr />

	<h2>Upload Audio</h2>
	<input type="file" accept=".mp3,.opus,.ogg"
		on:change={(e) => audioFile = e.target.files[0]} />

	<input placeholder="audio-slug" bind:value={audioSlug} />

	<button on:click={uploadAudio}>Upload Audio</button>
</main>