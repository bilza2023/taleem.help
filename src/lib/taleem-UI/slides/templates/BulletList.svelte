<script>
    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: heading = slide.data.find(x => x.name === "heading");
    $: bullets = slide.data.filter(x => x.name === "bullet");

    $: baseFont =
        width >= 1400 ? 40 :
        width >= 1100 ? 30 :
        width >= 800  ? 24 :
        width >= 500  ? 18 : 14;
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

        {#if heading}
            <h1>{heading.content}</h1>
        {/if}

        <div class="bullets">
            {#each bullets as bullet}
                <div class="bullet" class:visible={currentTime >= bullet.showAt}>
                    {bullet.content}
                </div>
            {/each}
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
    padding:calc(var(--base-font)*2);
    box-sizing:border-box;
    color:var(--text);
}

.panel{
    width:min(85%,1100px);
}

h1{
    margin:0 0 1.2em;
    text-align:center;
    font-size:calc(var(--base-font)*1.8);
}

.bullets{
    display:flex;
    flex-direction:column;
    gap:1em;
}

.bullet{
    padding:1em 1.2em;
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:14px;
    box-sizing:border-box;
    font-size:calc(var(--base-font)*1.1);
    line-height:1.5;
    opacity:.15;
}

.bullet.visible{
    opacity:1;
    border-color:var(--accent);
}
</style>