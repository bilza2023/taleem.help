<script>
  export let player;
  export let time;

  function fmtTime(sec) {
    const m = Math.floor(sec / 60);
    const s = (sec % 60).toFixed(1).padStart(4, "0");
    return `${String(m).padStart(2, "0")}:${s}`;
  }
</script>

<nav
  class="bg-gray-900 text-white text-sm font-mono px-4 py-2 flex justify-between items-center"
>
  <div>
    <button class="mr-3" on:click={player.start}>▶ Play</button>
    <button class="mr-3" on:click={player.pause}>⏸ Pause</button>
    <button on:click={player.reset}>⏮ Reset</button>
    {fmtTime(time)}
  </div>
  <div class="text-yellow-300">
    <!-- {fmtTime(time)} -->
  </div>
</nav>

<style>
  nav button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
  }

  nav button:hover {
    text-decoration: underline;
  }
</style>
