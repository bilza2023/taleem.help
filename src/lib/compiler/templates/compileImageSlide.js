// /src/compiler/templates/compileImageSlide.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileImageSlide(slide) {
  const rawItems = slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const imageItem =
    items.find(
      d => d.name === "image"
    );

  if (!imageItem) {
    throw new Error(
      "imageSlide: requires image"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide imageSlide">

      <img
        id="${imageItem.id}"

        class="
          hidden
          ${imageItem.classes || ""}
        "

        src="${imageItem.content}"

        alt=""
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