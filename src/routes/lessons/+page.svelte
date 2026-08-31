<script>
///home/bilal-tariq/00--TALEEM/taleem.studio/src/routes/lessons/+page.svelte
import HomeLinks from "$lib/components/HomeLinks.svelte";
import CourseHero from "$lib/components/CourseHero.svelte";
import Footer from "$lib/components/Footer.svelte";
import { page } from "$app/state";
import { send } from "$lib/send";
import GroupingNav from "$lib/components/GroupingNav.svelte";
import { config } from "$lib/config.js";

let home = $state(null);
let course = $state(null);
let groupings = $state([]);
let error = $state("");
let selectedGrouping = $state("");

let visibleItems = $derived(
	!selectedGrouping
		? home?.items ?? []
		: (home?.items ?? []).filter(
			item => item.groupSlug === selectedGrouping
		)
);

function handleGroupingChange(id) {
	selectedGrouping = id;
}

async function loadLibrary(courseSlug) {
	try {
		error = "";

		const [courseData, groups, items] = await Promise.all([
			send("course", "get", { slug: courseSlug }),
			send("group", "list", { courseSlug }),
			send("library", "list", { courseSlug })
		]);

		if (!courseData) {
			error = `Course "${courseSlug}" not found.`;
			return;
		}

		course = courseData;
		groupings = groups;

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
	groupings={groupings}
	value={selectedGrouping}
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
.pending-link {
	display: inline-block;
	margin: .75rem .15rem;
	padding: .5rem .8rem;
	color: #d9f99d;
	background: #3f3a16;
	border: 1px solid #a3a322;
	border-radius: 6px;
	text-decoration: none;
}

.pending-link:hover {
	background: #514d18;
	border-color: #c4c43a;
}
</style>