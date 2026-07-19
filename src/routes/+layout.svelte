<script>
	import { page } from '$app/state';
	import '../app.css';
	import "$lib/player/css/themes/dark.css";
	import "$lib/player/css/index.css";

	
	import Navbar from '$lib/components/Navbar.svelte';
	// import TopBar from '$lib/components/TopBar.svelte';

	let { children } = $props();   // ✅ THIS LINE
	const isPlayer = $derived(page.url.pathname.startsWith('/player'));
</script>

{#if !isPlayer}
	<Navbar />
	<!-- <TopBar /> -->
{/if}
<main>
	{@render children()}
</main>

<style>
	main {
		width: 100%;
	}
</style>