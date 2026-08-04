// /src/compiler/templates/compileKeyIdeasSlide.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileKeyIdeasSlide(
  slide
) {
  const rawItems =
    slide.data ?? [];

  const items =
    addIdToItems(rawItems);

  const cards =
    items.filter(
      d => d.name === "card"
    );

  if (!cards.length) {
    throw new Error(
      "keyIdeasSlide: requires cards"
    );
  }

  const ids =
    items.map(i => i.id);

  const html = `
    <section class="slide keyIdeasSlide">

      ${cards.map(card => `
        <div
          id="${card.id}"

          class="
            key-idea
            hidden
            ${card.classes || ""}
          "
        >
          <div class="icon">
            ${card.icon ?? ""}
          </div>

          <div class="label">
            ${card.label}
          </div>
        </div>
      `).join("")}

    </section>
  `;

  return {
    html,

    animation:
      "progressiveReveal",

    ids
  };
}