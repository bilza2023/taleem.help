// /src/compiler/templates/compileImageStrip.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileImageStrip(slide) {
  const rawItems = slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const images =
    items.filter(
      d => d.name === "image"
    );

  if (!images.length) {
    throw new Error(
      "imageStrip: requires images"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide imageStrip">

      <div class="image-strip">

        ${images.map(img => `
          <div class="image-strip-item">

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