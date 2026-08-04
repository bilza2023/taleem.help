
import { zodDeckV1 } from './zodDeckV1.js';

export function validateDeckV1(deck) {
  const r = zodDeckV1.safeParse(deck);
  return r.success
    ? { ok: true, value: r.data }
    : { ok: false, errors: r.error.issues };
}
