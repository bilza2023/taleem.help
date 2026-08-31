<script>
	let { email = "" } = $props();

	let username = $derived(
		email
			? email.split("@")[0]
			: ""
	);
</script>

<span class="user-tag">

	{#if username}
		👤 {username}
	{:else}
		Guest
	{/if}

</span>

<style>
.user-tag{
	font-size:.9rem;
	opacity:.8;
	white-space:nowrap;
}
</style>