<script>
   
    export let slide;
    export let currentTime = 0;


    $: bars = slide.data;
    $: maxValue = Math.max(...bars.map(x => x.value));
  
</script>

<section     class="slide" >
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
    padding:calc(var(--base-font)*1.2);
    box-sizing:border-box;
    color:var(--player-text);
}

.panel{
    width:min(92%,1200px);
    height:100%;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
}

.chart{
    flex:1;
    min-height:0;
    width:100%;
    display:flex;
    align-items:stretch;
    justify-content:space-around;
    gap:calc(var(--base-font)*.8);
}

.group{
    flex:1;
    min-width:0;
    min-height:0;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.value{
    flex:0 0 auto;
    font-size:calc(var(--base-font)*1.2);
    line-height:1.2;
    color:var(--player-text);
    margin-bottom:calc(var(--base-font)*.4);
}

.barArea{
    flex:1;
    min-height:0;
    width:min(70%,120px);
    display:flex;
    align-items:flex-end;
    justify-content:center;
}

.bar{
    width:100%;
    min-height:0;
    background:var(--player-primary);
    border-radius:calc(var(--base-font)*.25) calc(var(--base-font)*.25) 0 0;
    opacity:.15;
    transition:opacity .2s;
}

.bar.visible{
    opacity:1;
}

.label{
    flex:0 0 auto;
    width:100%;
    margin-top:calc(var(--base-font)*.5);
    text-align:center;
    font-size:calc(var(--base-font)*1.2);
    line-height:1.25;
    color:var(--player-text);
}
</style>