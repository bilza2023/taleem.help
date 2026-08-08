<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: bar = slide.data[0];
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
    <div class="panel">

        <h1>{bar.label}</h1>

        <div class="track">
            <div
                class="fill"
                class:visible={currentTime >= bar.showAt}
                style={`width:${bar.value}%`}
            ></div>
        </div>

        <div class="percent">
            {bar.value}%
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
    padding:calc(var(--base-font));
    box-sizing:border-box;
    color:var(--text);
}

.panel{
    width:min(90%,900px);
    display:flex;
    flex-direction:column;
    gap:calc(var(--base-font));
    padding:calc(var(--base-font));
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    box-sizing:border-box;
}

h1{
    margin:0;
    text-align:center;
    font-size:calc(var(--base-font)*1.4);
}

.track{
    width:100%;
    height:calc(var(--base-font)*1.5);
    background:rgba(255,255,255,.08);
    border:2px solid var(--border);
    border-radius:999px;
    overflow:hidden;
}

.fill{
    height:100%;
    width:0;
    background:var(--accent);
    opacity:.15;
    transition:width .4s;
}

.fill.visible{
    opacity:1;
}

.percent{
    text-align:center;
    font-size:calc(var(--base-font)*1.2);
    font-weight:bold;
}
</style>