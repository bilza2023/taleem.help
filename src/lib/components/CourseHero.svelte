<script>
	import { config } from "$lib/config";

	export let course;
	export let lessonCount = 0;
</script>

{#if course}

<section class="course-hero">

	<img
		class="thumbnail"
		src={`${config.apiUrl}/content/images/${course.thumbnail}`}
		alt={course.title}
	/>

	<div class="content">

		<h1>{course.title}</h1>

		<p class="description">
			{course.description}
		</p>

		<div class="meta">

			<div class="item">
				<span class="label">Access</span>
				<strong>{course.access}</strong>
			</div>

			<div class="item">
				<span class="label">Lessons</span>
				<strong>{lessonCount}</strong>
			</div>

		</div>

	</div>

</section>

{/if}

<style>

.course-hero {
	display: flex;
	gap: 24px;
	padding: 24px;
	margin-bottom: 32px;

	border: 1px solid #ddd;
	border-radius: 16px;

	background: var(--pico-card-background-color);
}

.thumbnail {
	width: 240px;
	height: 240px;

	object-fit: cover;
	border-radius: 12px;
	flex-shrink: 0;
}

.content {
	flex: 1;
}

h1 {
	margin: 0 0 12px;
}

.description {
	font-size: 1.05rem;
	line-height: 1.6;
	margin-bottom: 24px;
}

.meta {
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
}

.item {
	padding: 10px 18px;
	border-radius: 10px;
	background: rgba(0, 0, 0, 0.04);
}

.label {
	display: block;
	font-size: .8rem;
	opacity: .7;
	margin-bottom: 4px;
}

@media (max-width:700px) {

	.course-hero {
		flex-direction: column;
	}

	.thumbnail {
		width: 100%;
		height: auto;
	}

}

</style>