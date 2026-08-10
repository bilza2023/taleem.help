<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: title = slide.data.find(x => x.name === "title");
    $: para = slide.data.find(x => x.name === "para");

    $: baseFont = getBaseFont(width, height);
</script>

<section
    class="slide"
    style={`
        --base-font:${baseFont}px;
        --text:${theme.text};
        --panel:${theme.panel};
        --border:${theme.border};
    `}
>
    <div class="panel">

        {#if title}
            <div class="titleBox" class:visible={currentTime >= title.showAt}>
                <h1>{title.content}</h1>
            </div>
        {/if}

        {#if para}
            <div class="paraBox" class:visible={currentTime >= para.showAt}>
                <p>{para.content}</p>
            </div>
        {/if}

    </div>
</section>

<style>
.slide{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:calc(var(--base-font));
    box-sizing:border-box;
    color:var(--text);
}

.panel{
    width:min(90%,1100px);
    display:flex;
    flex-direction:column;
    gap:calc(var(--base-font));
}

.titleBox,
.paraBox{
    padding:calc(var(--base-font)*.8);
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    box-sizing:border-box;
    opacity:.15;
}

.titleBox.visible,
.paraBox.visible{
    opacity:1;
}

h1{
    margin:0;
    text-align:center;
    font-size:calc(var(--base-font)*1.8);
    line-height:1.2;
}

p{
    margin:0;
    font-size:calc(var(--base-font)*1);
    line-height:1.5;
    text-align:justify;
}

@media (max-width:700px){
    .paraBox p{
        font-size:calc(var(--base-font)*1.85);
    }
}
</style>