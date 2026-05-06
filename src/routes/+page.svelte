/* eslint-disable svelte/no-navigation-without-resolve */
<script>

	function goToSyllabus(path) {
		window.location.href = path;
	}
</script>

<style>
	.container {
		padding: 40px;
		text-align: center;
	}

	.title {
		font-size: 32px;
		font-weight: bold;
		margin-bottom: 40px;
	}

	.courses {
		display: flex;
		justify-content: center;
		gap: 30px;
		flex-wrap: wrap;
	}

	.card {
		width: 420px;
		cursor: pointer;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0,0,0,0.1);
		transition: transform 0.2s;
	}

	.card:hover {
		transform: scale(1.02);
	}

	img {
		width: 100%;
		display: block;
	}
</style>

<div class="container">

	<div class="courses">
		<div class="card" on:click={() => goToSyllabus('/syllabus?course=fbise8math-syllabus')}>
			<img src="/content/images/class8.png" alt="Class 8" />
		</div>

		<div class="card" on:click={() => goToSyllabus('/syllabus?course=fbise9math-syllabus')}>
			<img src="/content/images/class9.png" alt="Class 9" />
		</div>
	</div>

<br/>
<a href="/player?deck=GoldenDeckV2-5May-2026">Golden Dck</a>

</div>
