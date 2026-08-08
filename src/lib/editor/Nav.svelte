<script>
	import { SlideType } from "$lib/taleem-specs/enums";

	export let add;
	export let onDownload;
	export let onSave;
	export let onMockTiming;

	const buttons = [
		{ type: SlideType.TitleAndSubtitle, icon: "🅣" },
		{ type: SlideType.TitleAndPara, icon: "📄" },
		{ type: SlideType.BulletList, icon: "☰" },
		{ type: SlideType.TwoColumnText, icon: "⫷⫸" },

		{ type: SlideType.ImageSlide, icon: "🖼️" },
		{ type: SlideType.FillImage, icon: "⬛" },
		{ type: SlideType.ImageWithTitle, icon: "🖼️🅣" },
		{ type: SlideType.ImageWithCaption, icon: "🖼️💬" },
		{ type: SlideType.ImageLeftBulletsRight, icon: "🖼️➡️" },
		{ type: SlideType.ImageRightBulletsLeft, icon: "⬅️🖼️" },

		{ type: SlideType.Eq, icon: "∑" },
		{ type: SlideType.Table, icon: "▦" },

		{ type: SlideType.BarChart, icon: "📊" },
		{ type: SlideType.ProgressBar, icon: "📈" },
		{ type: SlideType.Quote, icon: "❝❞" },
		{ type: SlideType.KeyIdeas, icon: "💡" },

		// actions
		{ action: "download", icon: "⬇️" },
		{ action: "mock", icon: "⏱️" },
		{ action: "export", icon: "⬇💡" }
	];

	function handleClick(button) {
		switch (button.action) {
			case "download":
				onDownload?.();
				return;

			case "export":
				onSave?.();
				return;

			case "mock":
				onMockTiming?.();
				return;

			default:
				add(button.type);
		}
	}
</script>

<div class="nav">
	{#each buttons as button}
		<button
			on:click={() => handleClick(button)}
			title={button.action ?? button.type}
		>
			{button.icon}
		</button>
	{/each}
</div>

<style>
	.nav {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		padding: 10px;
		background: #111;
		border-bottom: 1px solid #222;
	}

	button {
		background: #1a1a1a;
		color: #fff;
		border: 1px solid #333;
		padding: 8px 10px;
		border-radius: 6px;
		cursor: pointer;
		font-size: 14px;
	}

	button:hover {
		background: #2a2a2a;
	}
</style>