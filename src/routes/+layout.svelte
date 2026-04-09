<script>
	import { page } from '$app/state';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import TopBar from '$lib/components/TopBar.svelte';

	const isPlayer = $derived(page.url.pathname.startsWith('/player'));
</script>

{#if !isPlayer}
	<Navbar />
	<TopBar />
{/if}

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
	}
</style>