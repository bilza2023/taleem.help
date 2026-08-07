<script>
    import { getBaseFont } from "../../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;
    export let theme;

    $: bars = slide.data;
    $: maxValue = Math.max(...bars.map(x => x.value));
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

        <div class="chart">

            {#each bars as bar}
                <div class="group">

                    <div class="value">{bar.value}</div>

                    <div class="barArea">
                        <div
                            class="bar"
                            class:visible={currentTime >= bar.showAt}
                            style={`height:${bar.value/maxValue*100}%`}
                        ></div>
                    </div>

                    <div class="label">
                        {bar.label}
                    </div>

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
    padding:calc(var(--base-font));
    box-sizing:border-box;
    color:var(--text);
}

.panel{
    width:min(95%,1200px);
    height:100%;
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    padding:calc(var(--base-font));
    box-sizing:border-box;
}

.chart{
    height:100%;
    display:flex;
    align-items:flex-end;
    justify-content:space-evenly;
    gap:calc(var(--base-font));
}

.group{
    flex:1;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.value{
    height:2em;
    display:flex;
    align-items:center;
    font-size:calc(var(--base-font)*.9);
}

.barArea{
    flex:1;
    width:70%;
    display:flex;
    align-items:flex-end;
}

.bar{
    width:100%;
    height:0;
    background:var(--accent);
    border-radius:calc(var(--base-font)*.35) calc(var(--base-font)*.35) 0 0;
    opacity:.15;
    transition:height .3s, opacity .3s;
}

.bar.visible{
    opacity:1;
}

.label{
    margin-top:.5em;
    text-align:center;
    font-size:calc(var(--base-font)*.8);
}
</style>