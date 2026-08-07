<script>
    import { onMount } from "svelte";

    let stage;

    onMount(() => {

        const observer = new ResizeObserver(() => {

            console.log({
                width: stage.clientWidth,
                height: stage.clientHeight
            });

        });

        observer.observe(stage);

        return () => observer.disconnect();

    });
</script>

<div
    class="stage"
    bind:this={stage}
>
    <slot />
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
    height:100%;
    overflow:hidden;
    background:#111;
}
</style>