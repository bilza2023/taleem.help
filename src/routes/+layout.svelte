<script>
	import { page } from "$app/state";

	// import "@picocss/pico/css/pico.classless.min.css";
	// import "../app.css";

	import Navbar from "$lib/components/Navbar.svelte";
	import AdminNavbar from "$lib/components/AdminNavbar.svelte";

	let { children } = $props();
</script>

{#if page.url.pathname.startsWith("/teacher")}

	<AdminNavbar />

{:else if !page.url.pathname.startsWith("/player") && !page.url.pathname.startsWith("/present") }

	<Navbar />

{/if}

<main>

	{@render children()}

</main>

<style>

	main {

       padding: 0px;
	   margin: 0px;
	   background-color: rgb(13, 10, 22);
		width: 100%;

	}

</style>