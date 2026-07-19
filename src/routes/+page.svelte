<script>
	import { onMount } from "svelte";
	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import { config } from "$lib/config";
	// import Tabs from "$lib/components/Tabs.svelte";

	let home = $state(null);
	let error = $state("");

	let selectedTab = $state("All");

	const filteredLinks = $derived.by(() => {
		if (!home) return [];

		if (selectedTab === "All") {
			return home.items;
		}

		return home.items.filter(
			(item) => item.tag.toLowerCase() === selectedTab.toLowerCase()
		);
	});

	onMount(async () => {
		try {
			const res = await fetch(`${config.apiUrl}/home-links`);

			if (!res.ok) {
				throw new Error("Failed to load home links");
			}

			home = await res.json();

		} catch (err) {
			error = err.message;
		}
	});
</script>
<style>
	.container {
		padding: 10px;
		margin:10px;
	}
</style>

{#if error}

	<p>{error}</p>

{:else if !home}

	<p>Loading...</p>

{:else}
<div class="container">
	<HomeLinks homeLinks={filteredLinks} />

</div>

{/if}