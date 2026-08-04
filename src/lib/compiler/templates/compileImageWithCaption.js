// /src/compiler/templates/compileImageWithCaption.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileImageWithCaption(
  slide
) {
  const rawItems =
    slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const imageItem =
    items.find(
      d => d.name === "image"
    );

  const captionItem =
    items.find(
      d => d.name === "caption"
    );

  if (!imageItem) {
    throw new Error(
      "imageWithCaption: requires image"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <figure class="slide imageWithCaption">

      <img
        id="${imageItem.id}"

        class="
          hidden
          ${imageItem.classes || ""}
        "

        src="${imageItem.content}"
      />

      ${
        captionItem
          ? `
            <figcaption
              id="${captionItem.id}"

              class="
                hidden
                ${captionItem.classes || ""}
              "
            >
              ${captionItem.content}
            </figcaption>
          `
          : ""
      }

    </figure>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}