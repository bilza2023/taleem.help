<script>
    import TitleAndSubtitle from "./templates/TitleAndSubtitle.svelte";

    export let slide;
</script>

{#if slide.type === "titleAndSubtitle"}
    <TitleAndSubtitle {slide} />
{:else}
    <div class="unknown">
        Unknown slide type: <strong>{slide.type}</strong>
    </div>
{/if}

<style>
.unknown {
    padding: 2rem;
    color: white;
}
</style>