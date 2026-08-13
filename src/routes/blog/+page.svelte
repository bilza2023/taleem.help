<script>
	///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/blog/+page.svelte

	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import apiFetch from "$lib/utils/fetch";
	import { onMount } from "svelte";
	import SubNav from "$lib/components/SubNav.svelte";
	let active = $state("blog");
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

<SubNav active={active} />

{#if error}

	<p>{error}</p>

{:else if !home}

	<p>Loading...</p>

{:else}

	<div class="container">

		<HomeLinks homeLinks={home.items} />

	</div>

{/if}

