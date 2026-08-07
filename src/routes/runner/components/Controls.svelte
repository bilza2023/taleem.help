<script>
</script>

<footer class="controls">

    <button>|&lt;</button>
    <button>&lt;</button>

    <button>Play</button>
    <button>Pause</button>
    <button>Stop</button>

    <button>&gt;</button>
    <button>&gt;|</button>

    <input
        class="timeline"
        type="range"
        min="0"
        max="100"
        value="0"
    />

    <span class="time">00:00 / 03:30</span>

</footer>

<style>
.controls{
    height:72px;

    display:flex;
    align-items:center;
    gap:.75rem;

    padding:0 1rem;

    background:#1b1b1b;
    border-top:1px solid #333;
}

button{
    height:38px;
    min-width:48px;
    padding:0 .8rem;

    border:1px solid #444;
    border-radius:6px;

    background:#2a2a2a;
    color:#eee;

    cursor:pointer;
}

button:hover{
    background:#3a3a3a;
}

.timeline{
    flex:1;
}

.time{
    width:110px;
    text-align:right;

    color:#aaa;
    font-size:.9rem;
}
</style>