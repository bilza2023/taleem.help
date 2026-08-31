<script>
	import { config } from "$lib/config";

	export let course;
	export let lessonCount = 0;

	let expanded = false;
</script>

{#if course}

<section class="course-hero">

	<button
		class="course-strip"
		onclick={() => expanded = !expanded}
		aria-expanded={expanded}
	>

		<img
			class="thumbnail"
			src={`${config.basePath}/content/images/${course.thumbnail}`}
			alt={course.title}
		/>

		<div class="summary">
			<h1>{course.title}</h1>
			<p>{course.description}</p>
		</div>

		<div class="meta">
			<div class="item">
				<span>Access</span>
				<strong>{course.access}</strong>
			</div>

			<div class="item">
				<span>Lessons</span>
				<strong>{lessonCount}</strong>
			</div>
		</div>

		<span class="arrow">{expanded ? "▲" : "▼"}</span>

	</button>

	{#if expanded}
		<div class="details">

			<img
				class="large-thumbnail"
				src={`${config.basePath}/content/images/${course.thumbnail}`}
				alt={course.title}
			/>

			<div>
				<h2>{course.title}</h2>
				<p>{course.description}</p>
			</div>

		</div>
	{/if}

</section>

{/if}

<style>
.course-hero {
	margin-bottom: 12px;
	border: 1px solid #ddd;
	border-radius: 12px;
	background: var(--pico-card-background-color);
	overflow: hidden;
}

.course-strip {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 14px;
	padding: 10px 14px;
	margin: 0;
	border: 0;
	border-radius: 0;
	background: transparent;
	color: inherit;
	text-align: left;
	cursor: pointer;
}

.thumbnail {
	width: 72px;
	height: 72px;
	object-fit: cover;
	border-radius: 8px;
	flex-shrink: 0;
}

.summary {
	flex: 1;
	min-width: 0;
}

.summary h1 {
	margin: 0 0 3px;
	font-size: 1.25rem;
}

.summary p {
	margin: 0;
	font-size: .9rem;
	opacity: .7;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.meta {
	display: flex;
	gap: 8px;
	flex-shrink: 0;
}

.item {
	padding: 6px 10px;
	border-radius: 7px;
	background: rgba(0,0,0,.04);
}

.item span {
	display:block;
	font-size:.7rem;
	opacity:.65;
}

.item strong {
	font-size:.85rem;
}

.arrow {
	width:24px;
	flex-shrink:0;
	opacity:.6;
	text-align:center;
}

.course-strip:hover {
	background:rgba(0,0,0,.03);
}

.details {
	display:flex;
	gap:20px;
	padding:18px;
	border-top:1px solid rgba(128,128,128,.2);
}

.large-thumbnail {
	width:180px;
	height:180px;
	object-fit:cover;
	border-radius:10px;
	flex-shrink:0;
}

.details h2 {
	margin-top:0;
}

.details p {
	line-height:1.5;
}

@media(max-width:700px) {

	.course-strip {
		padding:8px 10px;
		gap:10px;
	}

	.thumbnail {
		width:56px;
		height:56px;
	}

	.summary h1 {
		font-size:1.05rem;
	}

	.summary p {
		display:none;
	}

	.meta {
		gap:4px;
	}

	.item {
		padding:5px 7px;
	}

	.details {
		flex-direction:column;
	}

	.large-thumbnail {
		width:100%;
		height:auto;
	}

}
</style>