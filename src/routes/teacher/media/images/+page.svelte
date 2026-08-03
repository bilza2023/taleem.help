<script>

	import { onMount } from "svelte";

	import apiFetch from "$lib/utils/fetch";

	let images = [];
	let loading = true;
	let error = "";

	onMount(load);

	async function load() {

		try {

			images = await apiFetch(
				"GET",
				"/media/image"
			);

		}
		catch (err) {

			error = err.message;

		}
		finally {

			loading = false;

		}

	}

</script>

<svelte:head>

	<title>Images</title>

</svelte:head>

<h1>

	Images

</h1>

<p>

	<a href="/teacher/media/image">

		Upload another image

	</a>

</p>

{#if loading}

	<p>

		Loading...

	</p>

{:else if error}

	<article>

		{error}

	</article>

{:else if images.length === 0}

	<article>

		No images uploaded.

	</article>

{:else}

	<table>

		<thead>

			<tr>

				<th>Filename</th>
				<th>Description</th>
				<th>Alt</th>
				<th>Open</th>

			</tr>

		</thead>

		<tbody>

			{#each images as image}

				<tr>

					<td>

						<code>{image.filename}</code>

					</td>

					<td>

						{image.description}

					</td>

					<td>

						{image.alt}

					</td>

					<td>

						<a
							href={`https://taleem.help/api/content/images/${image.filename}`}
						>

							Open

						</a>

					</td>

				</tr>

			{/each}

		</tbody>

	</table>

{/if}

<style>

	table {

		width: 100%;

	}

	th {

		text-align: left;

	}

	code {

		white-space: nowrap;

	}

</style>