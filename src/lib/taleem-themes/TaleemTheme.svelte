<script>
    import { defaultTheme } from "./index.js";

    export let theme = defaultTheme;

    $: resolvedTheme = theme ?? defaultTheme;
</script>

<div
    class="taleem-theme"
    style="
        --theme-text:{resolvedTheme.text};
        --theme-panel:{resolvedTheme.panel};
        --theme-border:{resolvedTheme.border};
        --theme-accent:{resolvedTheme.accent};
    "
>
    <slot />
</div>


<style>
    .taleem-theme {
	min-height: 100vh;
	background: var(--theme-panel);
	color: var(--theme-text);
}
</style>