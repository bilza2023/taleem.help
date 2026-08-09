<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/+page.svelte

	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import Subnav from "$lib/components/Subnav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import apiFetch from "$lib/utils/fetch";
	import { page } from "$app/state";

	let home = $state(null);
	let error = $state("");
	let active = $state("all");

async function loadLibrary(query = {}, id = "all") {

	active = id;

	try {

		error = "";

		const params = new URLSearchParams(query);

		let url = "/public/library";

		if (params.toString()) {

			url += `?${params.toString()}`;

		}

		const items = await apiFetch("GET", url);

		// --------------------------------------------------
		// latest first.
		// --------------------------------------------------
		items.sort((a, b) =>
			new Date(b.createdAt) - new Date(a.createdAt)
		);
		// oldest first
		// items.sort((a, b) =>
		// 	new Date(a.createdAt) - new Date(b.createdAt)
		// );
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

	$effect(() => {

		const course = page.url.searchParams.get("course");
		const access = page.url.searchParams.get("access");
		const sort = page.url.searchParams.get("sort");

		if (course) {

			loadLibrary({ course, sort }, course);

		}
		else if (access) {

			loadLibrary(
				{ access, sort },
				access === "OPEN" ? "free" : "premium"
			);

		}
		else {

			loadLibrary(
				sort ? { sort } : {},
				"all"
			);

		}

	});
</script>

<Subnav active={active} />

{#if error}

	<p>{error}</p>

{:else if !home}

	<p>Loading...</p>

{:else}

	<div class="container">

		<HomeLinks homeLinks={home.items} />

	</div>

	<br/>
	<br/>
<Footer />
{/if}


<style>
:global(html),
:global(body){
    margin:0;
    padding:0;
}
	.container {
		padding: 0px;
		margin: 0px;
		min-height: 100vh;
	}

</style>
