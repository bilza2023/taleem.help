<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/components/AdminNavbar.svelte
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
	nav{
	display:flex;
	justify-content:space-between;
	align-items:center;
	flex-wrap:wrap;
	gap:16px;
	padding:12px 20px;
	margin: 0px;
	background:#173f35;
	border-bottom:1px solid #28584b;
}

nav ul{
	display:flex;
	align-items:center;
	gap:10px;
	margin:0;
	padding:0;
	list-style:none;
}

nav li{
	margin:0;
	padding:0;
}

nav a{
	display:block;
	padding:8px 14px;
	color:#e8f5f0;
	text-decoration:none;
	border-radius:8px;
	font-size:15px;
	font-weight:500;
	transition:.15s;
}

nav a:hover{
	background:rgba(255,255,255,.08);
}

nav a[aria-current="page"]{
	background:#1f6aa5;
	color:#fff;
}

nav strong a{
	font-size:18px;
	font-weight:700;
	padding-right:24px;
	
}

@media (max-width:700px){

	nav{
		flex-direction:column;
		align-items:flex-start;
	}

	nav ul{
		flex-wrap:wrap;
	}

}
</style>