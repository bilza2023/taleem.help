<script>

	import { onMount } from "svelte";

	import apiFetch from "$lib/utils/fetch";

	let audios = [];
	let loading = true;
	let error = "";

	onMount(load);

	async function load() {

		try {

			audios = await apiFetch(
				"GET",
				"/media/audio"
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

	<title>Audio</title>

</svelte:head>

<h1>

	Audio

</h1>

<p>

	<a href="/teacher/media/audio">

		Upload another audio file

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

{:else if audios.length === 0}

	<article>

		No audio files uploaded.

	</article>

{:else}

	<table>

		<thead>

			<tr>

				<th>Filename</th>
				<th>Description</th>
				<th>Open</th>

			</tr>

		</thead>

		<tbody>

			{#each audios as audio}

				<tr>

					<td>

						<code>{audio.filename}</code>

					</td>

					<td>

						{audio.description}

					</td>

					<td>

						<a
							href={`https://taleem.help/api/content/audio/${audio.filename}`}
							target="_blank"
							rel="noopener"
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