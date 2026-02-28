<script>
	import { page } from '$app/stores';

	$: classId = $page.params.classId;
	$: chapterId = $page.params.chapterId;
	$: deck = $page.url.searchParams.get('deck');

	let showSidebar = true;

	function scrollToAnswers() {
		document.getElementById('answers')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* 1️⃣ Slim Top Bar */
	.topbar {
		position: sticky;
		top: 0;
		z-index: 10;
		background: #111827;
		color: white;
		padding: 8px 16px;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.main {
		display: flex;
		flex: 1;
	}

	/* 2️⃣ Player Area */
	.player-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.player-area {
		min-height: calc(100vh - 40px);
		background: #f8fafc;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 40px;
		text-align: center;
	}

	.view-answers {
		margin-top: 20px;
		font-size: 14px;
		color: #2563eb;
		cursor: pointer;
	}

	/* 3️⃣ Sidebar */
	.sidebar {
		width: 280px;
		background: #e2e8f0;
		border-left: 1px solid #cbd5e1;
		padding: 16px;
	}

	.lesson-item {
		padding: 8px;
		margin-bottom: 6px;
		background: white;
		border: 1px solid #cbd5e1;
		cursor: pointer;
	}

	.lesson-item.active {
		background: #bfdbfe;
		font-weight: bold;
	}

	/* 4️⃣ Answers Panel */
	.answers {
		padding: 40px;
		background: #ffffff;
		border-top: 2px solid #e5e7eb;
	}

	.answer-block {
		margin-bottom: 24px;
		padding-bottom: 16px;
		border-bottom: 1px solid #e5e7eb;
	}

	.teacher {
		margin-top: 6px;
		color: #047857;
		font-weight: 500;
	}
</style>

<div class="app">

	<!-- Top Bar -->
	<div class="topbar">
		<div>🏠 Home | Class {classId} › Chapter {chapterId}</div>
		<button on:click={() => showSidebar = !showSidebar}>
			Toggle Lessons
		</button>
	</div>

	<div class="main">

		<div class="player-wrapper">

			<!-- Full Height Player -->
			<div class="player-area">
				<h2>Deck Area</h2>
				<p><strong>Current Deck:</strong> {deck || "None Selected"}</p>

				<a href={`/class/${classId}/${chapterId}?deck=intro`}>Load Intro</a>
				<br />
				<a href={`/class/${classId}/${chapterId}?deck=exercise1`}>Load Exercise 1</a>

				<div class="view-answers" on:click={scrollToAnswers}>
					12 Questions & Clarifications ↓
				</div>
			</div>

			<!-- Answers Panel (Below the Fold) -->
			<div class="answers" id="answers">
				<h3>Answers & Clarifications (12)</h3>

				<div class="answer-block">
					<p><strong>Q:</strong> Why is determinant zero?</p>
					<p class="teacher">Teacher: Because both rows are proportional.</p>
				</div>

				<div class="answer-block">
					<p><strong>Q:</strong> How to avoid sign mistakes?</p>
					<p class="teacher">Teacher: Always expand step-by-step, never mentally.</p>
				</div>
			</div>

		</div>

		{#if showSidebar}
			<div class="sidebar">
				<h4>Lessons</h4>

				<div class="lesson-item {deck === 'intro' ? 'active' : ''}">
					Intro
				</div>

				<div class="lesson-item {deck === 'exercise1' ? 'active' : ''}">
					Exercise 1
				</div>

				<div class="lesson-item">
					Revision
				</div>
			</div>
		{/if}

	</div>
</div>