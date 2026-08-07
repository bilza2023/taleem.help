
<script>
    import { getBaseFont } from "../../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: left = slide.data.find(x => x.name === "left");
    $: right = slide.data.find(x => x.name === "right");

    $: baseFont = getBaseFont(width, height);
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
    <div class="columns">

        <div class="column" class:visible={currentTime >= left?.showAt}>
            {left?.content}
        </div>

        <div class="column" class:visible={currentTime >= right?.showAt}>
            {right?.content}
        </div>

    </div>
</section>

<style>
.slide{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:calc(var(--base-font)*1.2);
    box-sizing:border-box;
    color:var(--text);
}

.columns{
    width:min(92%,1200px);
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:calc(var(--base-font));
}

.column{
    padding:calc(var(--base-font));
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    font-size:calc(var(--base-font)*1.2);
    line-height:1.5;
    box-sizing:border-box;
    opacity:.15;
}

.column.visible{
    opacity:1;
    border-color:var(--accent);
}
</style>