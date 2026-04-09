<script>
	const {
		id,
		title,
		chapter,
		image,
		lessons = 0,
		description = ""
	} = $props();

	function openChapter() {
		window.location.href = `/player?chapter=${id}`;
	}
</script>

<style>
	.card {
		background: #1e293b;
		border-radius: 14px;
		overflow: hidden;
		cursor: pointer;
		transition: transform 0.15s ease;
		max-width: 420px;
	}
	.card:hover {
		transform: translateY(-4px);
	}

	.image {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	.content {
		padding: 16px;
	}

	.chapter {
		font-size: 12px;
		opacity: 0.7;
		margin-bottom: 6px;
	}

	.title {
		font-size: 18px;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.description {
		font-size: 13px;
		opacity: 0.75;
		margin-bottom: 10px;
		line-height: 1.4;
	}

	.lessons {
		font-size: 13px;
		opacity: 0.6;
		border-top: 1px solid rgba(255,255,255,0.08);
		padding-top: 10px;
	}
</style>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="card" onclick={openChapter}>
	<img class="image" src={image} alt={title} />

	<div class="content">
		<div class="chapter">Chapter {chapter}</div>
		<div class="title">{title}</div>

		{#if description}
			<div class="description">{description}</div>
		{/if}

		<div class="lessons">Lessons available: {lessons}</div>
	</div>
</div>