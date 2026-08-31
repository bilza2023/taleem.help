<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;

    $: cards = slide.data;
    $: baseFont = getBaseFont(width, height);
</script>

<div class="slide" style={`--base-font:${baseFont}px;`}>
    <div class="cards">
    {#each cards as card}
        <div class="card" class:visible={currentTime >= card.showAt}>
            <div class="icon">{card.icon}</div>
            <div class="label">{card.label}</div>
        </div>
    {/each}
</div>
</div>


<style>
.slide{
   width:100%;
    height:100%;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing:border-box;
    color:var(--player-text);
}

.cards{
    width:100%;
    height:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr;
    padding:calc(var(--base-font)*1.2);
    gap:calc(var(--base-font)*1.2);
    box-sizing:border-box;
}

.card{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:calc(var(--base-font)*.8);
    padding:calc(var(--base-font)*1.5);
    background:var(--player-surface);
    border:2px solid var(--player-border);
    border-radius:calc(var(--base-font)*.45);
    box-sizing:border-box;
    color:var(--player-text);
    opacity:.15;
}

.card.visible{
    opacity:1;
    border-color:var(--player-primary);
}

.icon{
    font-size:calc(var(--base-font)*4);
    line-height:1;
}

.label{
    text-align:center;
    font-size:calc(var(--base-font)*1.5);
    font-weight:600;
    color:var(--player-text);
}
</style>