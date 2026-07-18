<script>
	import { onMount } from "svelte";
	import HomeLinks from "$lib/components/HomeLinks.svelte";

	const SERVER = "http://142.93.218.121:9000";

	let home = $state(null);
	let error = $state("");

	onMount(async () => {
		try {
			const res = await fetch(`${SERVER}/home-links`);

			if (!res.ok) {
				throw new Error("Failed to load home links");
			}

			home = await res.json();

		} catch (err) {
			error = err.message;
		}
	});
</script>

<h1>Taleem</h1>

{#if error}

	<p>{error}</p>

{:else if !home}

	<p>Loading...</p>

{:else}

	<HomeLinks homeLinks={home.items} />

{/if}