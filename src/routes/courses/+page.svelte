<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/courses/+page.svelte
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

		const items = await apiFetch(
			"GET",
			"/public/course"
		);

		home = {
			items: items.map(item => ({
				...item,
				image: `${item.thumbnail}`
			}))
		};
		// home = {items: items};

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
