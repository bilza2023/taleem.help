import { validateDeckV1 } from "./validateDeckV1.js";
import { validatePlayerDeckV1 } from "./validatePlayerDeckV1.js";
import { patchDeckV1 } from "./patchDeckV1.js";

export function finalizeDeck(deck) {

  // -----------------------------
  // 0. patch (add version only)
  // -----------------------------
  const patched = patchDeckV1(deck);

  // -----------------------------
  // 1. schema validation (zod)
  // -----------------------------
  const schema = validateDeckV1(patched);
  if (!schema.ok) {
    return {
      ok: false,
      stage: "schema",
      errors: schema.errors
    };
  }

  // -----------------------------
  // 2. timing / playback validation
  // -----------------------------
  const timing = validatePlayerDeckV1(patched);
  if (!timing.ok) {
    return {
      ok: false,
      stage: "timing",
      errors: timing.errors
    };
  }

  // -----------------------------
  // 3. success
  // -----------------------------
  return {
    ok: true,
    deck: patched
  };
}