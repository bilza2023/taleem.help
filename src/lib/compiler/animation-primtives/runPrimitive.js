// /src/compiler/animation-primtives/runPrimitive.js

import { progressiveReveal } from "./progressiveReveal.js";

import { showAllHighlightOne } from "./showAllHighlightOne.js";

import { showOneAtATime } from "./showOneAtATime.js";

import { eqHighlightOne } from "./eqHighlightOne.js";

export function runPrimitive({
  type,
  items
}) {
  switch (type) {
    case "progressiveReveal":
      return {
        actions:
          progressiveReveal(items),

        groups: {
          hidden: ["hidden"]
        }
      };

    case "highlightOne":
      return {
        actions:
          showAllHighlightOne(items),

        groups: {
          focus: [],

          dim: ["dim"]
        }
      };

    case "eqHighlightOne":
      return {
        actions:
          eqHighlightOne(items),

        groups: {
          focus: [],

          dim: ["dim"],

          visible: [],

          hidden: ["hidden"]
        }
      };

    case "oneAtATime":
      return {
        actions:
          showOneAtATime(items),

        groups: {
          visible: [],

          hidden: ["hidden"]
        }
      };

    default:
      throw new Error(
        `Unknown primitive: ${type}`
      );
  }
}