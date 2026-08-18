<script>
	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import SubNav from "$lib/components/SubNav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import apiFetch from "$lib/utils/fetch";

	let home = $state(null);
	let error = $state("");
	let active = "home";

async function loadLibrary() {

	try {

		error = "";

		const courses = await apiFetch(
			"GET",
			"/public/course"
		);

		const lists = await Promise.all(
			courses.map(course =>
				apiFetch(
					"GET",
					`/public/course/${course.slug}/list`
				)
			)
		);

		const items = lists.flat();

		items.sort((a, b) =>
			new Date(b.createdAt) - new Date(a.createdAt)
		);

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
		loadLibrary();
	});

</script>

<SubNav active={active} />

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

.container {
	min-height: 100vh;
	margin: 0;
	padding: 0;
	background: var(--theme-panel);
	color: var(--theme-text);
}

</style>