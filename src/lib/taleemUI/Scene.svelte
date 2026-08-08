<script>
	export let width;
	export let height;
</script>

<div
	class="scene"
	style={`width:${width}px;height:${height}px;`}
>
	<slot />
</div>

<style>
.scene{
	position:relative;
	overflow:hidden;
}
</style>