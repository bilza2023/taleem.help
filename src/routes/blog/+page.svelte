<script>
	///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/blog/+page.svelte

	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import apiFetch from "$lib/utils/fetch";
	import { onMount } from "svelte";

	let home = $state(null);
	let error = $state("");

	async function loadLibrary() {

		try {

			error = "";

			const items = await apiFetch(
				"GET",
				"/public/library?course=blog&sort=sortOrder"
			);

			home = {
				items: items.map(item => ({
					...item,
					image: `/content/images/${item.thumbnail}`
				}))
			};

		}
		catch (err) {

			error = err.message;

		}

	}

	onMount(loadLibrary);

</script>

<style>

	.wrapper {
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;

		padding: .35rem 0;
		margin-bottom: 1rem;

		scrollbar-width: none;
	}

	.wrapper::-webkit-scrollbar {
		display: none;
	}

	.row {
		display: inline-flex;
		gap: .55rem;
	}

	.pill {
		position: relative;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		padding: .45rem .9rem;

		border-radius: 10px;

		font-size: .9rem;
		font-weight: 500;

		background: var(--pico-card-background-color);
		color: var(--pico-color);
		text-decoration: none;

		transition:
			background-color .15s,
			transform .15s;
	}

	.pill:hover {
		background: var(--pico-card-sectioning-background-color);
		transform: translateY(-1px);
	}

	.pill:visited {
		color: var(--pico-color);
	}

	.container {
		padding: 10px;
		margin: 10px;
	}

</style>
<div class="wrapper">

	<div class="row">

		<a
			class="pill"
			href="/"
			data-sveltekit-preload-data
		>
			Home
		</a>

		<a
			class="pill"
			href="/courses"
			data-sveltekit-preload-data
		>
			Courses
		</a>

	</div>

</div>

{#if error}

	<p>{error}</p>

{:else if !home}

	<p>Loading...</p>

{:else}

	<div class="container">

		<HomeLinks homeLinks={home.items} />

	</div>

{/if}