// /src/compiler/templates/compileImageLeftBulletsRight.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileImageLeftBulletsRight(
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
      "imageLeftBulletsRight: requires image and bullets"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide imageLeftBulletsRight">

      <img
        id="${imageItem.id}"

        class="
          hidden
          ${imageItem.classes || ""}
        "

        src="${imageItem.content}"
      />

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

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}