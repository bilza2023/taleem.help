// /src/compiler/templates/compileImageGrid.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileImageGrid(slide) {
  const rawItems = slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const images =
    items.filter(
      d => d.name === "image"
    );

  if (!images.length) {
    throw new Error(
      "imageGrid: requires images"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide imageGrid">

      <div class="image-grid">

        ${images.map(img => `
          <div class="image-grid-item">

            <img
              id="${img.id}"

              class="
                hidden
                ${img.classes || ""}
              "

              src="${img.content}"
            />

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