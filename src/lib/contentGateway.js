
// src/lib/contentGateway.js

function getContentBase() {
    if (typeof window !== "undefined" && window.__TALEEM_CONFIG__) {
      return window.__TALEEM_CONFIG__.CONTENT_BASE;
    }
  
    // fallback (in case config not loaded)
    return "/content";
  }
  
  export async function getDeck(deckId) {
    const base = getContentBase();
    const res = await fetch(`${base}/decks/${deckId}.json`);
    if (!res.ok) throw new Error("Deck not found");
    return res.json();
  }
  
  export async function getCourseIndex(courseId) {
    const base = getContentBase();
    const res = await fetch(`${base}/${courseId}/index.json`);
    if (!res.ok) throw new Error("Index not found");
    return res.json();
  }
  
  export function getImagePath(imageName) {
    const base = getContentBase();
    return `${base}/images/${imageName}`;
  }
  
  export function getSoundPath(soundName) {
    const base = getContentBase();
    return `${base}/sounds/${soundName}`;
  }
  