
import { createAudioTimer } from "./createAudioTimer.js";
import { createSilentTimer } from "./createSilentTimer.js";

export async function getTimer({ slug, deck, Howl, basePath = "/content/audio" }) {

  // -------------------------
  // helper → check file
  // -------------------------
  async function fileExists(url) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      return res.ok;
    } catch {
      return false;
    }
  }

  let audioUrl = null;

  // =========================
  // 1. slug.opus (preferred)
  // =========================
  const opusPath = `${basePath}/${slug}.opus`;
  if (await fileExists(opusPath)) {
    audioUrl = opusPath;
  }

  // =========================
  // 2. slug.mp3 (fallback)
  // =========================
  else {
    const mp3Path = `${basePath}/${slug}.mp3`;
    if (await fileExists(mp3Path)) {
      audioUrl = mp3Path;
    }
  }

  // =========================
  // 3. deck.audio (custom)
  // =========================
  if (!audioUrl && deck?.audio) {
    const customPath = `${basePath}/${deck.audio}`;
    if (await fileExists(customPath)) {
      audioUrl = customPath;
    }
  }

  // =========================
  // 4. RETURN TIMER (IMPORTANT)
  // =========================
  if (audioUrl) {
    return createAudioTimer({ url: audioUrl, Howl });
  }

  return createSilentTimer();
}