<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/state";
	import { onMount } from "svelte";

	import apiFetch from "$lib/utils/fetch";

	let loading = true;

	onMount(async () => {

		if (page.url.pathname === "/teacher/signin") {

			loading = false;
			return;

		}

		try {

			await apiFetch(
				"GET",
				"/admin/verify"
			);

			loading = false;

		}
		catch {

			goto("/teacher/signin");

		}

	});

</script>

{#if loading}

	<p>Loading...</p>

{:else}

	<main>

		<slot />

	</main>

{/if}

<style>

main{

	max-width:1100px;

	margin:0 auto;

	padding:2rem;

	min-height:100vh;

}

</style>