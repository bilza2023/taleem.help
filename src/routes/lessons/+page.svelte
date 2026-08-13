<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/routes/+page.svelte

	import HomeLinks from "$lib/components/HomeLinks.svelte";
	import CourseHero from "$lib/components/CourseHero.svelte";
	import LessonsNav from "$lib/components/LessonsNav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import apiFetch from "$lib/utils/fetch";
	import { page } from "$app/state";
	import GroupingNav from "$lib/components/GroupingNav.svelte";
	
	let home = $state(null);
    let course = $state(null);
	let error = $state("");
	let active = $state("all");

	let selectedGrouping = $state("");

let visibleItems = $derived(
	!selectedGrouping
		? home?.items ?? []
		: (home?.items ?? []).filter(
			item => String(item.grouping?.id) === String(selectedGrouping)
		)
);

function handleGroupingChange(id) {
	selectedGrouping = id;
}
async function loadLibrary(courseSlug) {
	active = courseSlug;
	try {
		error = "";
		// Load course
		const courses = await apiFetch(
			"GET",
			"/public/course"
		);

		course = courses.find(c => c.slug === courseSlug);

		if (!course) {
			throw new Error(`Course "${courseSlug}" not found.`);
		}

		// Load lessons
		const items = await apiFetch(
			"GET",
			`/public/library?course=${courseSlug}`
		);

		home = {
			items: items.map(item => ({
				...item,
				image: `/content/images/${item.thumbnail}`
			}))
		};

		console.log("home", home);

	}
	catch (err) {

		error = err.message;

	}

}
$effect(() => {

	const courseSlug = page.url.searchParams.get("course");

	if (courseSlug) {

		loadLibrary(courseSlug);

	}
});

</script>


{#if error}

	<p>{error}</p>

{:else if !home}

	<p>Loading...</p>

{:else}

	<div class="container">
<CourseHero
	course={course}
	lessonCount={home.items.length}
/>
<GroupingNav
	courseSlug={course.slug}
	onChange={handleGroupingChange}
/>
<div class="links-container">
	<HomeLinks homeLinks={visibleItems} />

</div>

	</div>

	<br/>
	<br/>
<Footer />
{/if}



<style>

.links-container{
	padding:.15rem;
}
.container {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: var(--theme-panel);
    color: var(--theme-text);
}

</style>