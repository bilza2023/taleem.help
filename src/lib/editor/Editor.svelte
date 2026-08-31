<script>
    import Nav from "./Nav.svelte";
    import AudioPlayer from "./AudioPlayer.svelte";
	import Slides from "./slides/Slides.svelte";
    import { finalizeDeckV2 } from "./js/finalizeDeckV2.js";
    import { slideFactory } from "./js/slideFactory.js";
    import { assignMockTimings } from "./js/assignMockTimings.js";
	import Settings from "./Settings.svelte";

    export let deck = { deck: [] };
    export let onExport;

    let runningTime = 0;
    let showTools = true;

    function addSlide(type) {
        const fn = slideFactory[type];
        if (!fn) return;

        const last = deck.deck.at(-1);

        deck.deck = [
            ...deck.deck,
            {
                ...fn(),
                start: last ? last.end : 0,
                end: (last ? last.end : 0) + 5
            }
        ];
    }

    function preparePresentation() {
        const result = finalizeDeckV2(deck);

        if (!result.ok) {
            console.error(result);

            const error = result.errors?.[0];

            alert(
                `${result.stage.toUpperCase()}\n\n` +
                (error?.path ? `${error.path}\n` : "") +
                (error?.message ?? "Unknown error")
            );

            return null;
        }

        return result.presentation;
    }

    function handleDownload() {
        const presentation = preparePresentation();
        if (!presentation) return;

        const blob = new Blob(
            [JSON.stringify(presentation, null, 2)],
            { type: "application/json" }
        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "deck.json";
        a.click();

        URL.revokeObjectURL(url);
    }

    async function handleSave() {
        const presentation = preparePresentation();
        if (!presentation) return;

        try {
            await onExport(presentation);
            console.log("final presentation:", presentation);
            alert("Presentation saved");
        }
        catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    function handleMockTiming() {
        try {
            deck = assignMockTimings(deck);
            alert("Mock timings applied");
        }
        catch (err) {
            console.error(err);
            alert("Failed to apply mock timings");
        }
    }
</script>

<div class="editor">

    <!-- NAVIGATION -->
    <Nav
        add={addSlide}
        onDownload={handleDownload}
        onSave={handleSave}
        onMockTiming={handleMockTiming}
        onToggleTools={() => showTools = !showTools}
    />

    {#if showTools}

        <!-- SETTINGS -->
        <div class="settings-bar">

           <Settings
			bind:background={deck.background}
			audio={deck.audio}
			onUse={(filename) => deck.audio = filename}
		/>

        </div>

        <!-- AUDIO PLAYBACK -->
        <div class="audio-bar">

            <AudioPlayer
                audio={deck.audio}
                bind:runningTime
            />

        </div>

    {/if}

    <!-- SLIDES -->
    <Slides {deck} {runningTime} />

</div>

<style>
    .editor {
        width: 100%;
        margin: 0 auto;
        padding: 2px;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .settings-bar {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 0;
    }

    .audio-bar {
        width: 100%;
    }

    @media (max-width: 900px) {
        .settings-bar {
            flex-wrap: wrap;
        }
    }
</style>