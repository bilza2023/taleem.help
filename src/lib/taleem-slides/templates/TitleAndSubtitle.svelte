<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;

    $: title = slide.data.find(x => x.name === "title");
    $: subtitle = slide.data.find(x => x.name === "subtitle");
    $: baseFont = getBaseFont(width, height);
</script>

<section
    class="slide"
    style={`--base-font:${baseFont}px;`}
>
    {#if title}
        <div class="titleBox">
            <h1>{title.content}</h1>
        </div>
    {/if}

 {#if subtitle && currentTime >= subtitle.showAt}
    <div class="subtitleBox">
        <h2>{subtitle.content}</h2>
    </div>
{/if}
</section>

<style>
.slide{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:calc(var(--base-font)*2.5);
    padding:calc(var(--base-font)*1.2);
    box-sizing:border-box;
    color:var(--player-text);
}

.titleBox,
.subtitleBox{
    width:min(90%,1100px);
    padding:calc(var(--base-font)*.8);
    background:var(--player-surface);
    border:2px solid var(--player-border);
    border-radius:calc(var(--base-font)*.45);
    box-sizing:border-box;
}

h1{
    margin:0;
    text-align:center;
    font-size:calc(var(--base-font)*2.5);
    line-height:1.15;
    color:var(--player-text);
}

h2{
    margin:0;
    text-align:center;
    font-size:calc(var(--base-font)*1.8);
    line-height:1.4;
    font-weight:400;
    color:var(--player-secondary);
}
</style>