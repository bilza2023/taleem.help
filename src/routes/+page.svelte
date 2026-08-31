<script>
	import { onMount } from "svelte";
	import CourseLinks from "$lib/components/CourseLinks.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { send } from "$lib/send";

	let active = $state("courses");
	let home = $state(null);
	let error = $state("");

	async function loadCourses(id = "courses") {
		active = id;

		try {
			error = "";

			const items = await send("course", "list", {});

			home = {
				items: items.map(item => ({
					...item,
					image: item.thumbnail
				}))
			};
		} catch (err) {
			error = err.message;
		}
	}

	onMount(() => {
		loadCourses();
	});
</script>

{#if error}
	<p>{error}</p>
{:else if !home}
	<p>Loading...</p>
{:else}
	<div class="container">
		<CourseLinks homeLinks={home.items} />
	</div>

	<br />
	<br />

	<Footer />
{/if}

<style>
	.container {
		padding: 10px;
		margin: 10px;
		min-height: 100vh;
	}
</style>