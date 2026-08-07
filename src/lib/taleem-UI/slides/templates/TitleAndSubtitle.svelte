<script>
    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    import { getBaseFont } from "../../utils/layout.js";

    $: title = slide.data.find(x => x.name === "title");
    $: subtitle = slide.data.find(x => x.name === "subtitle");

    $: baseFont = getBaseFont(width);
</script>

<section
    class="slide"
    style={`
        --base-font:${baseFont}px;
        --text:${theme.text};
        --panel:${theme.panel};
        --border:${theme.border};
        --accent:${theme.accent};
    `}
>

    {#if title}
        <div class="titleBox">
            <h1>{title.content}</h1>
        </div>
    {/if}

    {#if subtitle}
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
    gap:calc(var(--base-font)*1.5);
    padding:calc(var(--base-font)*2);
    box-sizing:border-box;
    color:var(--text);
}

.titleBox,
.subtitleBox{
    width:min(90%,1200px);
    padding:calc(var(--base-font)*.9);
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:16px;
    text-align:center;
    box-sizing:border-box;
}

h1{
    margin:0;
    font-size:calc(var(--base-font)*2.4);
    line-height:1.2;
}

h2{
    margin:0;
    font-size:calc(var(--base-font)*1.3);
    line-height:1.4;
    font-weight:400;
}
</style>