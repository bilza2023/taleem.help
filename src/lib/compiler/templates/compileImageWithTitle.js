// /src/compiler/templates/compileImageWithTitle.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileImageWithTitle(
  slide
) {
  const rawItems =
    slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const titleItem =
    items.find(
      d => d.name === "title"
    );

  const imageItem =
    items.find(
      d => d.name === "image"
    );

  if (!imageItem) {
    throw new Error(
      "imageWithTitle: requires image"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide imageWithTitle">

      ${
        titleItem
          ? `
            <h1
              id="${titleItem.id}"

              class="
                hidden
                ${titleItem.classes || ""}
              "
            >
              ${titleItem.content}
            </h1>
          `
          : ""
      }

      <img
        id="${imageItem.id}"

        class="
          hidden
          ${imageItem.classes || ""}
        "

        src="${imageItem.content}"
      />

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}