<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/taleem-UI/TaleemUI.svelte
    import Scene from "./Scene.svelte";
    import Background from "./Background.svelte";
    import TaleemSlide from "../taleem-slides/TaleemSlide.svelte";
//   import { blueTheme } from "";

    export let deck;
    export let currentTime = 0;
    export let width;
    export let height;
    export let theme;

    $: currentSlide = deck.deck.find(
        slide =>
            currentTime >= slide.start &&
            currentTime < slide.end
    );
</script>

<Scene {width} {height}>

    <Background background={deck.background}>
        {#if currentSlide}
            <TaleemSlide
                slide={currentSlide}
                {currentTime}
                {width}
                {height}
                {theme}
            />
        {/if}
    </Background>
</Scene>