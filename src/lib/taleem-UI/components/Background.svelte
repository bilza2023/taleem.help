<script>
</script>

<div class="background">
    <slot />
</div>

<style>
.background {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    background: #111;
}
</style>