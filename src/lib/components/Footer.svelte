<footer class="footer">
	<div class="container">

		<div class="brand">
			<h2>Taleem.Help</h2>

			<p class="tagline">
				Simple, structured learning for Pakistani students.
			</p>
		</div>

		<nav class="links">
			<a href="/">Home</a>
			<!-- <a href="/hub">Hub</a> -->
			<!-- <a href="/present?deck=what-is-taleem-help">About</a> -->
			<!-- <a href="/articles?article=privacy">Privacy</a> -->
		</nav>

		<div class="copyright">
			© {new Date().getFullYear()} Taleem.Help
		</div>

	</div>
</footer>

<style>
	.footer {
		margin-top: 72px;
		padding: 42px 20px;
		background: #111827;
		border-top: 1px solid rgba(255,255,255,.08);
	}

	.container {
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}

	.brand h2 {
		margin: 0;
		font-size: 1.6rem;
		color: #fff;
	}

	.tagline {
		margin: 10px 0 32px;
		color: #9ca3af;
		font-size: .95rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 22px;
		margin-bottom: 32px;
	}

	.links a {
		color: #d1d5db;
		text-decoration: none;
		font-size: .95rem;
		transition: color .2s;
	}

	.links a:hover {
		color: #fff;
	}

	.copyright {
		padding-top: 18px;
		border-top: 1px solid rgba(255,255,255,.08);
		font-size: .82rem;
		color: #6b7280;
	}
</style>