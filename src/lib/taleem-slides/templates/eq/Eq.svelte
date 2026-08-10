<script>
    import EqLine from "./EqLine.svelte";
    import EqSidePanel from "./EqSidePanel.svelte";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let currentTime = 0;


    $: lines = slide?.data ?? [];

    $: currentIndex = Math.max(
        0,
        lines.findIndex(
            line =>
                [...lines]
                    .reverse()
                    .find(l => currentTime >= l.showAt) === line
        )
    );

    $: currentLine =
        [...lines].reverse().find(line => currentTime >= line.showAt)
        ?? lines[0];

    // Mobile keeps 2 visible lines.
    // Larger screens keep 3 visible lines.
    $: contextSize = width < 700 ? 2 : 3;

    // Keep the current line at the bottom of the context window.
    // Until the window is full, start from line 1.
    $: startIndex = Math.max(
        0,
        currentIndex - (contextSize - 1)
    );

    $: visibleLines = lines.slice(startIndex);
</script>

<div class="eq">
    <div class="lines">
        {#each visibleLines as line, visibleIndex}
            <div class="lineBlock">
                <EqLine
                    {line}
                    rowHeight={56}
                    active={line === currentLine}
                    lineNumber={startIndex + visibleIndex + 1}
                />

                {#if line === currentLine}
                    <EqSidePanel
                        {currentLine}
                        {width}
                    />
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
.eq{
    color:var(--player-text);
    width:100%;
    height:100%;
    min-width:0;
    min-height:0;
    box-sizing:border-box;
    overflow:hidden;
    display:flex;
    flex-direction:column;
}

.lines{
    width:100%;
    height:100%;
    min-width:0;
    min-height:0;
    box-sizing:border-box;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    align-items:stretch;
}

.lineBlock{
    width:100%;
    min-width:0;
    flex:0 0 auto;
    box-sizing:border-box;
}
</style>