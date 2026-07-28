<script>
	import { onMount } from "svelte";
	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import { config } from "$lib/config";
	import apiFetch from "$lib/utils/fetch";
	// import Tabs from "$lib/components/Tabs.svelte";

	let home = $state(null);
	let error = $state("");

	let selectedTab = $state("All");

	const filteredLinks = $derived.by(() => {
		if (!home) return [];

		if (selectedTab === "All") {
			return home.items;
		}
		
		// console.log("items ==> " , home.items);
		
		return home.items.filter(
			(item) => item.tag.toLowerCase() === selectedTab.toLowerCase()
		);
	});
//onMount	
onMount(async () => {
	try {
		const items = await apiFetch("GET", "/public/library");

		home = {
			items: items.map(item => ({
				...item,
				image: `/content/images/${item.thumbnail}`
			}))
		};
		console.log("home-items" , home.items)
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