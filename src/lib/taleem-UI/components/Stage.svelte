<script>
    import { onMount } from "svelte";

    let stage;

     let width = 0;
    let height = 0;
    onMount(() => {

        const observer = new ResizeObserver(() => {
            width = stage.clientWidth;
            height = stage.clientHeight;

            console.log({
                width: stage.clientWidth,
                height: stage.clientHeight
            });

        });

        observer.observe(stage);

        return () => observer.disconnect();

    });
</script>

<div class="stage" bind:this={stage} >
<!-- <div class="debug">
    {width} × {height}
</div> -->
    <slot {width} {height} />
</div>

<style>
:global(html),
:global(body),
:global(#app){
    margin:0;
    width:100%;
    height:100%;
    overflow:hidden;
}

.stage{
    width:100%;
    height:100vh;
    outline:4px solid red;
}
</style>