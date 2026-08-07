<script>
</script>

<div class="background">
    <slot />
</div>

<style>
.background {
    position: absolute;
    inset: 0;

    overflow: hidden;

    background: #111;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>