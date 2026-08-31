<script>
    import { getBaseFont } from "../utils/layout.js";

    export let slide;
    export let width = 0;
    export let height = 0;
    export let theme;

    $: rows = slide.data;
    $: headers = rows[0];
    $: body = rows.slice(1);

    $: baseFont = getBaseFont(width, height);
</script>

<section
    class="slide"
    style={`
        --base-font:${baseFont}px;
        --text:${theme.text};
        --panel:${theme.panel};
        --border:${theme.border};
        --accent:${theme.accent};
    `}
>
    <div class="panel">

        <table>

            <thead>
                <tr>
                    {#each headers as header}
                        <th>{header}</th>
                    {/each}
                </tr>
            </thead>

            <tbody>
                {#each body as row}
                    <tr>
                        {#each row as cell}
                            <td>{cell}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>

        </table>

    </div>
</section>

<style>
.slide{
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:calc(var(--base-font)*1.2);
    box-sizing:border-box;
    color:var(--text);
}

.panel{
    width:min(95%,1200px);
    background:var(--panel);
    border:2px solid var(--border);
    border-radius:calc(var(--base-font)*.45);
    padding:calc(var(--base-font));
    box-sizing:border-box;
}

table{
    width:100%;
    border-collapse:collapse;
    font-size:calc(var(--base-font));
}

th,
td{
    padding:calc(var(--base-font)*.6);
    border:1px solid var(--border);
    text-align:left;
}

th{
    background:var(--accent);
    color:white;
    font-weight:600;
}

tbody tr:nth-child(even){
    background:rgba(255,255,255,.04);
}
@media (max-width:700px){
    table{
         font-size:calc(var(--base-font)*2);
    }
}
</style>