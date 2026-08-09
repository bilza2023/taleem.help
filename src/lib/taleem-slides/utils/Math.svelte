<!-- /src/lib/taleem-slides/components/Math.svelte -->

<script>
	import katex from "katex";
	import "katex/dist/katex.min.css";

	export let tex = "";
	export let displayMode = false;

	$: html = katex.renderToString(
		tex.replace(/^\$\$|\$\$$/g, ""),
		{
			throwOnError: false,
			displayMode
		}
	);
</script>

<span class="math">
	{@html html}
</span>