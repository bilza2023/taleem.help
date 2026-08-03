<script>
	import { page } from "$app/state";

	const pathname = $derived(page.url.pathname);

	function active(path) {

		return pathname.startsWith(path);

	}
</script>

<nav>

	<ul>

		<li>

			<strong>

				<a
					href="/teacher"
					aria-current={pathname === "/teacher" ? "page" : undefined}
				>

					🎓 Teacher

				</a>

			</strong>

		</li>

	</ul>

	<ul>

		<li>

			<a
				href="/teacher/media/image"
				aria-current={active("/teacher/media/image") ? "page" : undefined}
			>

				Upload Image

			</a>

		</li>

		<li>

			<a
				href="/teacher/media/images"
				aria-current={active("/teacher/media/images") ? "page" : undefined}
			>

				Images

			</a>

		</li>

		<li>

			<a
				href="/teacher/media/audio"
				aria-current={active("/teacher/media/audio") ? "page" : undefined}
			>

				Upload Audio

			</a>

		</li>

		<li>

			<a
				href="/teacher/media/audios"
				aria-current={active("/teacher/media/audios") ? "page" : undefined}
			>

				Audio

			</a>

		</li>

	</ul>

</nav>

<style>

	nav {

		background: #1d4d3e;

		border-bottom: 1px solid #2b6a57;

		padding: .4rem 1rem;

	}

	nav a {

		color: #ffffff;

		text-decoration: none;

	}

	nav a:hover {

		color: #c9f2d6;

	}

	nav a[aria-current="page"] {

		font-weight: bold;

		text-decoration: underline;

	}

</style>