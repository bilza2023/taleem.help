<!-- /home/bilal-tariq/00--TALEEM/taleem.help/src/lib/editor/Background.svelte -->

<script>

	export let background;

</script>

<div class="background">

	<label>
		Color
		<input
			type="color"
			bind:value={background.backgroundColor}
		/>
	</label>

	<label class="image">
		Image
		<input
			type="text"
			placeholder="bg.webp"
			bind:value={background.backgroundImage}
		/>
	</label>

	<label>
		Opacity
		<input
			type="range"
			min="0"
			max="1"
			step="0.05"
			bind:value={background.backgroundImageOpacity}
		/>
		<span>{Math.round(background.backgroundImageOpacity * 100)}%</span>
	</label>

</div>

<style>

.background{

	display:flex;
	align-items:center;
	gap:16px;
	padding:6px 8px;
	border-bottom:1px solid #ddd;
	font-size:14px;

}

label{

	display:flex;
	align-items:center;
	gap:6px;

}

.image{

	flex:1;

}

input[type="text"]{

	width:180px;

}

input[type="range"]{

	width:120px;

}

span{

	min-width:36px;
	text-align:right;

}

</style>