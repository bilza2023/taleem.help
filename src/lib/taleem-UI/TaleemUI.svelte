<script>
    import Stage from "./components/Stage.svelte";
    import Scene from "./components/Scene.svelte";
    import Background from "./components/Background.svelte";
    import Slide from "./slides/Slide.svelte";

    export let slide;
</script>

<Stage>
    <Scene>
        <Background>
            <Slide {slide}/>
        </Background>
    </Scene>
</Stage>