
// /src/compiler/templates/compileImageRightBulletsLeft.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileImageRightBulletsLeft(
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

  const bullets =
    items.filter(
      d => d.name === "bullet"
    );

  if (
    !imageItem ||
    !bullets.length
  ) {
    throw new Error(
      "imageRightBulletsLeft: requires image and bullets"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide imageRightBulletsLeft">

      <ul>

        ${bullets.map(b => `
          <li
            id="${b.id}"

            class="
              hidden
              ${b.classes || ""}
            "
          >
            ${b.content}
          </li>
        `).join("")}

      </ul>

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