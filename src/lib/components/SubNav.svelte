
<script>
import { config } from "$lib/config.js";

const basePath = config.basePath;
	let { active = "" } = $props();

const categories = [
	{ id: "home", title: "Home", href: `${basePath}/` },
	{ id: "assets", title: "Assets", href: `${basePath}/assets` },
	{ id: "add-svg", title: "＋ SVG", href: `${basePath}/create/svg` },
	{ id: "add-image", title: "＋ Image", href: `${basePath}/create/image` },
	{ id: "add-audio", title: "＋ Audio", href: `${basePath}/create/audio` }
];
</script>

<div class="wrapper">
	<div class="row">
		{#each categories as category}
			<a
				class="pill {active === category.id ? 'active' : ''}"
				href={category.href}
				data-sveltekit-preload-data
			>
				{category.title}
			</a>
		{/each}
	</div>
</div>

<style>
.wrapper {
	margin: 0;
	padding: .35rem .5rem;
	overflow-x: auto;
	overflow-y: hidden;
	white-space: nowrap;
	margin-bottom: 1rem;
	scrollbar-width: none;
	background: var(--theme-panel);
	border-bottom: 1px solid var(--theme-border);
}

.wrapper::-webkit-scrollbar { display: none; }

.row {
	display: inline-flex;
	gap: .55rem;
}

.pill {
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: .45rem .9rem;
	border-radius: 10px;
	font-size: .9rem;
	font-weight: 500;
	border: 1px solid var(--theme-border);
	cursor: pointer;
	background: var(--theme-panel);
	color: var(--theme-text);
	text-decoration: none;
	transition: background-color .15s, transform .15s;
}

.pill:hover {
	background: var(--theme-accent);
	color: var(--theme-text);
	transform: translateY(-1px);
}

.pill:visited { color: var(--theme-text); }

.pill.active {
	background: var(--theme-accent);
	color: var(--theme-text);
}

.pill.active::after {
	content: "";
	position: absolute;
	left: 8px;
	right: 8px;
	bottom: -6px;
	height: 3px;
	border-radius: 3px;
	background: var(--theme-accent);
}

.pill:focus,
.pill:focus-visible {
	outline: none;
	box-shadow: none;
}
</style>