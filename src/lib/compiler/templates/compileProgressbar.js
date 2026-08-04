// /src/compiler/templates/compileProgressbar.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileProgressbar(slide) {
  const rawItems = slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const bars =
    items.filter(
      d => d.name === "bar"
    );

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide progressbar">

      ${bars.map(bar => {
        const value =
          Math.max(
            0,

            Math.min(
              100,

              Number(
                bar.value ?? 0
              )
            )
          );

        return `
          <div
            id="${bar.id}"

            class="
              progressbar-item
              hidden
              ${bar.classes || ""}
            "
          >

            <div class="progressbar-label">
              ${bar.label}
            </div>

            <div class="progressbar-track">
              <div
                class="progressbar-fill"

                style="width:${value}%"
              ></div>
            </div>

          </div>
        `;
      }).join("")}

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}