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
	:global(body) {
		margin: 0;
		background: var(--theme-panel);
		color: var(--theme-text);
	}

	h1 {
		width: min(92%, 1100px);
		margin: 2rem auto 1rem;
		color: var(--theme-text);
		font-size: 1.8rem;
	}

	p {
		width: min(92%, 1100px);
		margin: 0 auto 1.25rem;
	}

	a {
		color: var(--theme-accent);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	table {
		width: min(92%, 1100px);
		margin: 1.5rem auto 2rem;
		border-collapse: separate;
		border-spacing: 0;
		border: 1px solid var(--theme-border);
		border-radius: 10px;
		overflow: hidden;
		background: var(--theme-panel);
		color: var(--theme-text);
	}

	th,
	td {
		padding: .8rem 1rem;
		border-bottom: 1px solid var(--theme-border);
		text-align: left;
	}

	th {
		background: var(--theme-accent);
		color: var(--theme-text);
		font-weight: 700;
	}

	tr:last-child td {
		border-bottom: none;
	}

	tbody tr:hover {
		background: rgba(96, 165, 250, .08);
	}

	code {
		color: var(--theme-text);
		white-space: nowrap;
		font-family: monospace;
	}

	article {
		width: min(92%, 1100px);
		margin: 1.5rem auto;
		padding: 1rem;
		box-sizing: border-box;
		border: 1px solid var(--theme-border);
		border-radius: 10px;
		background: var(--theme-panel);
		color: var(--theme-text);
	}

	@media (max-width: 700px) {
		table {
			display: block;
			overflow-x: auto;
		}

		th,
		td {
			white-space: nowrap;
		}

		h1 {
			font-size: 1.5rem;
		}
	}
</style>