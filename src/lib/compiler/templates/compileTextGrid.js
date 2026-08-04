// /src/compiler/templates/compileTextGrid.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileTextGrid(slide) {
  const rawItems = slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const texts =
    items.filter(
      d => d.name === "text"
    );

  if (!texts.length) {
    throw new Error(
      "textGrid: requires text items"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide textGrid">

      <div class="text-grid">

        ${texts.map(text => `
          <div
            id="${text.id}"

            class="
              text-grid-item
              hidden
              ${text.classes || ""}
            "
          >
            ${text.content}
          </div>
        `).join("")}

      </div>

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}