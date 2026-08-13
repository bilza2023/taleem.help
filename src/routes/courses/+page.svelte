<script>
	import { onMount } from "svelte";
	import CourseLinks from "$lib/components/CourseLinks.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import apiFetch from "$lib/utils/fetch";
	import SubNav from "$lib/components/SubNav.svelte";
	let active = $state("courses");

	let home = $state(null);
	let error = $state("");


	async function loadCourses(query = {}, id = "courses") {

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

		loadCourses({}, "courses");

	});
</script>

<SubNav active={active} />

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

<style>

	.container {
		padding: 10px;
		margin: 10px;
		min-height: 100vh;
	}

</style>
