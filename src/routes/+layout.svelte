<script>
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();   // ✅ THIS LINE
	const isPlayer = $derived(page.url.pathname.startsWith('/player'));
</script>

{#if !isPlayer}

{/if}
<main>
	{@render children()}
</main>

<style>
	main {
		width: 100%;
	}
</style>