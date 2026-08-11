<script>
    import { SlideType } from "$lib/taleem-specs/enums";

    export let add;
    export let onDownload;
    export let onSave;
    export let onMockTiming;
    export let onToggleTools;

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

    <div class="group">

        <!-- Text -->
        {#each buttons.slice(0, 4) as button}
            <button
                on:click={() => handleClick(button)}
                title={button.type}
            >
                {button.icon}
            </button>
        {/each}

        <span class="divider"></span>

        <!-- Images -->
        {#each buttons.slice(4, 10) as button}
            <button
                on:click={() => handleClick(button)}
                title={button.type}
            >
                {button.icon}
            </button>
        {/each}

        <span class="divider"></span>

        <!-- Math / Data -->
        {#each buttons.slice(10, 14) as button}
            <button
                on:click={() => handleClick(button)}
                title={button.type}
            >
                {button.icon}
            </button>
        {/each}

        <span class="divider"></span>

        <!-- Special -->
        {#each buttons.slice(14, 16) as button}
            <button
                on:click={() => handleClick(button)}
                title={button.type}
            >
                {button.icon}
            </button>
        {/each}

        <span class="divider"></span>

        <!-- Actions -->
        {#each buttons.slice(16, 19) as button}
            <button
                on:click={() => handleClick(button)}
                title={button.action}
            >
                {button.icon}
            </button>
        {/each}

        <span class="divider"></span>

        <!-- Tools -->
        <button
            class="tools-button"
            on:click={onToggleTools}
            title="Show / Hide Editor Tools"
        >
            ⚙️
        </button>

    </div>

</div>

<style>
    .nav {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 8px 12px;
        box-sizing: border-box;
        background: #111827;
        border: 1px solid #2a3446;
        border-radius: 8px;
    }

    .group {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        width: 100%;
    }

    .divider {
        width: 1px;
        height: 28px;
        background: #364258;
        margin: 0 6px;
    }

    button {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        font-size: 16px;
        background: #1c2435;
        color: white;
        border: 1px solid #324158;
        border-radius: 7px;
        cursor: pointer;
        transition: background .15s, border-color .15s, transform .1s;
    }

    button:hover {
        background: #2b3952;
        border-color: #5fa8ff;
        transform: translateY(-1px);
    }

    button:active {
        transform: translateY(0);
    }

    .tools-button {
        background: #263449;
        border-color: #4b607c;
    }

    @media (max-width: 700px) {
        .nav {
            padding: 7px;
        }

        button {
            width: 34px;
            height: 34px;
            font-size: 15px;
        }

        .divider {
            margin: 0 3px;
        }
    }
</style>