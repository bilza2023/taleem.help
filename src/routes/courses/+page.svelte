<script>
	import { onMount } from "svelte";
	import CourseLinks from "$lib/components/CourseLinks.svelte";
	import CourseSubnav from "$lib/components/CourseSubnav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import apiFetch from "$lib/utils/fetch";

	let home = $state(null);
	let error = $state("");

	let active = $state("all");

	async function loadCourses(query = {}, id = "all") {

		active = id;

		try {

			error = "";

			const params = new URLSearchParams(query);

			let url = "/public/course";

			if (params.toString()) {

				url += `?${params.toString()}`;

			}

			const items = await apiFetch("GET", url);

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

	onMount(() => {

		loadCourses({}, "all");

	});
</script>

<style>

	.container {
		padding: 10px;
		margin: 10px;
		min-height: 100vh;
	}

</style>

<CourseSubnav
	active={active}
	onQuery={loadCourses}
/>

{#if error}

	<p>{error}</p>

{:else if !home}

	<p>Loading...</p>

{:else}

	<div class="container">

		<CourseLinks homeLinks={home.items} />

	</div>

	<br/>
	<br/>
<Footer />
{/if}