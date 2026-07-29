<footer class="footer">
	<div class="container">

		<div class="brand">
			<div class="name">Taleem.Help</div>

			<div class="slogan">
				Education for Every Pakistani Student
			</div>
		</div>

		<nav class="links">
			<a href="/">Home</a>
			<a href="/hub">Hub</a>
			<a href="/articles?article=about">About</a>
			<a href="/articles?article=privacy">Privacy</a>
		</nav>

		<div class="copyright">
			© {new Date().getFullYear()} Taleem.Help. All rights reserved.
		</div>

	</div>
</footer>

<style>
	.footer {
		margin-top: 60px;
		padding: 36px 20px;
		background: #111827;
		border-top: 1px solid rgba(255,255,255,0.06);
	}

	.container {
		max-width: 1000px;
		margin: auto;
		text-align: center;
	}

	.name {
		font-size: 24px;
		font-weight: 700;
		color: #f3f4f6;
		letter-spacing: 0.5px;
		margin-bottom: 8px;
	}

	.slogan {
		font-size: 14px;
		color: #9ca3af;
		font-style: italic;
		margin-bottom: 28px;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
		margin-bottom: 28px;
	}

	.links a {
		color: #d1d5db;
		text-decoration: none;
		font-size: 15px;
		transition: color 0.2s;
	}

	.links a:hover {
		color: white;
	}

	.copyright {
		font-size: 13px;
		color: #6b7280;
		border-top: 1px solid rgba(255,255,255,0.08);
		padding-top: 18px;
	}
</style>