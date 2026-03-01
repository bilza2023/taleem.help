<script>
	import { page } from '$app/stores';
	export let visible = true;
	export let links = [];

	// Extract unique tags
	$: tags = [...new Set(links.map(l => l.tag))];

	let selectedTag = null;

	// Default to first tag
	$: if (tags.length && !selectedTag) {
		selectedTag = tags[0];
	}

	// Filter links by selected tag
	$: filteredLinks = links.filter(l => l.tag === selectedTag);
</script>

<style>
.sidebar {
	width: 100%;
	padding: 16px;
	box-sizing: border-box;
}

/* Dropdown */
.select {
	width: 100%;
	margin-bottom: 16px;
	padding: 8px 12px;
	border-radius: 12px;
	border: 1px solid #e2e8f0;
	background: #f8fafc;
	font-size: 14px;
	outline: none;
	cursor: pointer;
	transition: border 0.2s ease, box-shadow 0.2s ease;
}

.select:focus {
	border-color: #94a3b8;
	box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.2);
}

/* Thumbnail */
.list {
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.video-card {
	display: flex;
	gap: 12px;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
	background: #f8fafc;
	padding: 10px;
	border-radius: 12px;
	transition: background 0.2s ease, transform 0.15s ease;
}

.video-card:hover {
	background: #e2e8f0;
	transform: translateY(-2px);
}

.thumb {
	width: 120px;
	height: 70px;
	object-fit: cover;
	border-radius: 8px;
	flex-shrink: 0;
}

.info {
	display: flex;
	align-items: center;
}

.video-title {
	font-size: 14px;
	font-weight: 500;
}
</style>

{#if visible}
<div class="sidebar">

	<!-- Tag Dropdown -->
	<select class="select" bind:value={selectedTag}>
		{#each tags as tag}
			<option value={tag}>{tag}</option>
		{/each}
	</select>

	<!-- Video List -->
	<div class="list">
		{#each filteredLinks as link}
		<a
	class="video-card"
	href={`/class/${$page.params.classId}/${$page.params.chapterId}/${link.deck}`}
>
		
				<img
					class="thumb"
					src={`/images/${link.image}`}
					alt={link.title}
				/>

				<div class="info">
					<div class="video-title">{link.title}</div>
				</div>
			</a>
		{/each}
	</div>

</div>
{/if}