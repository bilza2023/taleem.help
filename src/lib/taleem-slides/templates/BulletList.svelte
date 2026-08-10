<script>
///home/bilal-tariq/00--TALEEM/taleem.help/src/lib/taleem-UI/slides/templates/BulletList.svelte
import {getBaseFont} from "../utils/layout.js";
    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;


    $: heading = slide.data.find(x => x.name === "heading");
    $: bullets = slide.data.filter(x => x.name === "bullet");

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
    padding:calc(var(--base-font)*1.2);
    box-sizing:border-box;
    color:var(--player-text);
}

.panel{
    width:min(90%,1100px);
    height:100%;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
}

h1{
    flex:0 0 auto;
    margin:0 0 calc(var(--base-font)*.8);
    text-align:center;
    font-size:calc(var(--base-font)*1.6);
    line-height:1.2;
}

.bullets{
    flex:1;
    min-height:0;
    display:grid;
    grid-auto-rows:1fr;
    gap:calc(var(--base-font)*.5);
}

.bullet{
    min-height:0;
    display:flex;
    align-items:center;
    padding:calc(var(--base-font)*.5) calc(var(--base-font));
    background:var(--player-surface);
    border:2px solid var(--player-border);
    border-radius:calc(var(--base-font)*.45);
    font-size:calc(var(--base-font)*1.5);
    line-height:1.25;
    box-sizing:border-box;
    opacity:.15;
}

.bullet.visible{
    opacity:1;
    border-color:var(--player-primary);
}
@media (max-width:700px){
    .bullet{
         font-size:calc(var(--base-font)*1.8);
    }
}
</style>