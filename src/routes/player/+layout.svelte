<!-- /src/routes/player/+layout.svelte -->

<script>
    export let data;
</script>

<div class="player-layout">
    <slot />
</div>

<style>
:global(html),
:global(body){
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    overflow:hidden;
    background:#000;
}

:global(body){
    display:block;
}

:global(#svelte){
    width:100%;
    height:100%;
}

:global(main){
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    max-width:none;
    background:#000;
}

.player-layout{
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background:#000;
    overflow:hidden;
    box-sizing:border-box;
}
</style>