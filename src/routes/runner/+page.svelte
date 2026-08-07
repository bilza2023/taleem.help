<script>
    import deck from '$lib/runner/golden-dsl-8-may-26.json';

    import Stage from './components/Stage.svelte';
    import Scene from './components/Scene.svelte';
    import Controls from './components/Controls.svelte';
    import Background from './components/Background.svelte';

    import Slide from './slides/Slide.svelte';

    const currentSlideIndex = 0;
    const currentSlide = deck.deck[currentSlideIndex];
</script>

<Stage>

    <Scene slot="scene">
        <Background>
            <Slide slide={currentSlide}/>
        </Background>
    </Scene>

    <Controls slot="controls"/>

</Stage>