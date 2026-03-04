
<script>
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	import Nav from '$lib/appComps/Nav.svelte';
	import '../app.css';
	import '$lib/styles/themes.css';

	$: hideNav = $page.url.pathname.startsWith('/courses/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="app">
	{#if !hideNav}
		<Nav />
	{/if}

	<slot />
</div>

<style>
	.app {
		min-height: 100vh;
		background: var(--backgroundColor);
		color: var(--baseTextColor);
	}
</style>