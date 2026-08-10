<script>
    import Math from "../../utils/Math.svelte";

    export let line;
    export let active = false;
    export let rowHeight = 56;
    export let lineNumber = 1;
</script>

<div class="line" class:active style={`min-height:${rowHeight}px;`}>
    <div class="number">{lineNumber}</div>

    <div class="content">
        {#if line.type === "math"}
            <Math tex={line.content} displayMode={true}/>
        {:else}
            <span>{line.content}</span>
        {/if}
    </div>
</div>


<style>

.content :global(.katex){
    font-size:1em;
}
    .line{
    width:100%;
    min-height:calc(var(--base-font)*3);
    padding:calc(var(--base-font)*.7) calc(var(--base-font)*1.2);
    margin-bottom:calc(var(--base-font)*.5);
    box-sizing:border-box;

    display:flex;
    align-items:center;
    justify-content:center;

    background:var(--player-surface);
    border:2px solid var(--player-border);
    border-radius:calc(var(--base-font)*.4);
    color:var(--player-text);

    font-size:calc(var(--base-font)*0.8);
}

.line.active{
    border-color:var(--player-primary);
    border-left:calc(var(--base-font)*.3) solid var(--player-primary);
    box-shadow:0 0 calc(var(--base-font)*.5) color-mix(in srgb,var(--player-primary) 25%,transparent);
}

.content{
    width:100%;
    text-align:center;
    color:var(--player-text);
}
</style>