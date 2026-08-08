<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: cards = slide.data;
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
    <div class="cards">

        {#each cards as card}
            <div class="card" class:visible={currentTime >= card.showAt}>

                <div class="icon">
                    {card.icon}
                </div>

                <div class="label">
                    {card.label}
                </div>

            </div>
        {/each}

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

.cards{
    width:min(95%,1200px);
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:calc(var(--base-font));
}

.card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:calc(var(--base-font)*.5);
    padding:calc(var(--base-font));
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    aspect-ratio:1;
    opacity:.15;
    box-sizing:border-box;
}

.card.visible{
    opacity:1;
    border-color:var(--accent);
}

.icon{
    font-size:calc(var(--base-font)*3);
    line-height:1;
}

.label{
    text-align:center;
    font-size:calc(var(--base-font));
    font-weight:600;
}
</style>