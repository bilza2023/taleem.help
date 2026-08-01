<script>
	import upload from "$lib/utils/upload";

	let file = null;
	let description = "";
	let alt = "";

	async function uploadImage() {

		if (!file) {

			alert("Please choose an image.");
			return;

		}

		const form = new FormData();

		form.append("file", file);
		form.append("description", description);
		form.append("alt", alt);

		try {

			await upload(
				"/media/image",
				form
			);

			alert("Image uploaded.");

			file = null;
			description = "";
			alt = "";

		}
		catch (error) {

			alert(error.message);

		}

	}
</script>

<h1>Images</h1>

<p>Upload a new image.</p>

<div>

	<label>

		Image

		<input
			type="file"
			accept="image/*"
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

<div>

	<label>

		Alt

		<input bind:value={alt} />

	</label>

</div>

<p>

	<button onclick={uploadImage}>
		Upload Image
	</button>

</p>