<script>
    // /src/lib/taleem-UI/TaleemUI.svelte

    import Stage from "./components/Stage.svelte";
    import Scene from "./components/Scene.svelte";
    import Background from "./components/Background.svelte";
    import Slide from "./slides/Slide.svelte";
   import theme from "./themes/default.js";
   import brownTheme from "./themes/brown.js";

    export let deck;
    export let currentTime = 0;
console.log("deck Taleemui",deck);

    $: currentSlide = deck.deck.find(
        slide =>
            currentTime >= slide.start &&
            currentTime < slide.end
    );
$: console.log("currentTime", currentTime);
$: console.log("currentSlide", currentSlide);
</script>

<Stage let:width let:height>
    <Scene>
        <Background background={deck.background}>
            {#if currentSlide}
                <Slide
                    slide={currentSlide}
                    {currentTime}
                    {width}
                    {height}
                    theme={brownTheme}
                />
            {/if}
        </Background>
    </Scene>
</Stage>