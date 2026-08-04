<script>
  export let add;
  export let onDownload;
  export let onSave;
  export let onMockTiming;

  const buttons = [
    { type: "titleAndSubtitle", icon: "🅣" },
    { type: "titleAndPara", icon: "📄" },
    { type: "bulletList", icon: "☰" },
    { type: "twoColumnText", icon: "⫷⫸" },

    { type: "imageSlide", icon: "🖼️" },
    { type: "fillImage", icon: "⬛" },
    { type: "imageWithTitle", icon: "🖼️🅣" },
    { type: "imageWithCaption", icon: "🖼️💬" },
    { type: "imageLeftBulletsRight", icon: "🖼️➡️" },
    { type: "imageRightBulletsLeft", icon: "⬅️🖼️" },

    { type: "eq", icon: "∑" },
    { type: "table", icon: "▦" },

    { type: "barChart", icon: "📊" },
    { type: "progressbar", icon: "📈" },
    { type: "quoteSlide", icon: "❝❞" },
    { type: "keyIdeasSlide", icon: "💡" },

    // 🔥 actions (kept at end)
    { type: "download", icon: "⬇️" },
    { type: "mock", icon: "⏱️" },
    { type: "export", icon: "⬇💡" }
  ];
</script>

<div class="nav">
  {#each buttons as b}
    <button
      on:click={() => {
        if (b.type === "download") {
          onDownload && onDownload();
        } else if (b.type === "export") {
          onSave && onSave();
        } else if (b.type === "mock") {
          onMockTiming && onMockTiming();
        } else {
          add(b.type);
        }
      }}
      title={b.type}
    >
      {b.icon}
    </button>
  {/each}
</div>

<style>
  .nav {
    display: flex;
    flex-wrap: wrap; /* 🔥 prevents overflow */
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