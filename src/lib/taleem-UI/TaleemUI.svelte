<script>
    import Scene from "./components/Scene.svelte";
    import Background from "./components/Background.svelte";
    import Slide from "./slides/Slide.svelte";

    import defaultTheme from "./themes/default.js";

    export let deck;
    export let currentTime = 0;
    export let width;
    export let height;
    export let theme = defaultTheme;

    $: currentSlide = deck.deck.find(
        slide =>
            currentTime >= slide.start &&
            currentTime < slide.end
    );
</script>

<Scene>
    <Background background={deck.background}>
        {#if currentSlide}
            <Slide
                slide={currentSlide}
                {currentTime}
                {width}
                {height}
                {theme}
            />
        {/if}
    </Background>
</Scene>