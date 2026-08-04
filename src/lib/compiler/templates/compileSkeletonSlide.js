// /src/compiler/templates/compileSkeletonSlide.js

import { addIdToItems } from "./helpers/addIdToItems.js";

export function compileSkeletonSlide(slide) {
  const rawItems = slide.data ?? [];

  if (!rawItems.length) {
    throw new Error(
      "skeletonSlide: requires items"
    );
  }

  const items = addIdToItems(rawItems);

  const ids = items.map(i => i.id);

  function renderItem(item) {
    const id = item.id;

    const classes =
      item.classes ?? "";

    // --- title ---
    if (item.name === "title") {
      return `
        <h1
          id="${id}"
          class="hidden ${classes}"
        >
          ${item.content}
        </h1>
      `;
    }

    // --- para ---
    if (item.name === "para") {
      return `
        <p
          id="${id}"
          class="hidden ${classes}"
        >
          ${item.content}
        </p>
      `;
    }

    // --- image ---
    if (item.name === "image") {
      return `
        <div
          id="${id}"
          class="skeleton-image hidden ${classes}"
        >
          <img src="${item.content}" />
        </div>
      `;
    }

    return "";
  }

  const html = `
    <section class="slide skeleton">

      <div class="skeleton-body">
        ${items.map(renderItem).join("")}
      </div>

    </section>
  `;

  return {
    html,

    animation: "oneAtATime",

    ids
  };
}