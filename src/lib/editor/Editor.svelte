<script>
	import Nav from "./Nav.svelte";
	import AudioList from "./AudioList.svelte";
	import AudioPlayer from "./AudioPlayer.svelte";
	import Slides from "./slides/Slides.svelte";

	import { slideFactory } from "./js/slideFactory.js";
	import { finalizeDeck } from "./js/finalizeDeck.js";
	import { assignMockTimings } from "./js/assignMockTimings.js";
	import { TaleemCompiler } from "$lib/compiler/TaleemCompiler.js";

	export let deck = { deck: [] };
	export let onExport;

	let runningTime = 0;

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

		const result = finalizeDeck(deck);

		if (!result.ok) {

			console.error(result);
			alert("Deck invalid. Check console.");
			return null;

		}

		return {

			body: result.deck,

			source: TaleemCompiler(result.deck)

		};

	}

	function handleDownload() {

		const presentation = preparePresentation();
		if (!presentation) return;

		const blob = new Blob(
			[JSON.stringify(presentation.source, null, 2)],
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

	<AudioList audio={deck.audio} onUse={(filename)=>deck.audio=filename} />

	<AudioPlayer audio={deck.audio} bind:runningTime />

	<Nav add={addSlide} onDownload={handleDownload} onSave={handleSave} onMockTiming={handleMockTiming} />

	<Slides {deck} {runningTime} />

</div>

<style>

.editor{

	padding:4px;

}

</style>