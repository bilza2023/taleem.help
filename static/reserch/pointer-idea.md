# 🎯 Animated Pointer Overlay — Slide Enhancement Idea

## ✅ Purpose

Use a single static image per slide (e.g., geometry proof), and animate a pointer on top using timed coordinates. This replaces the need for multiple highlight images.

---

## ✅ Data Structure

Each slide item (usually an image or math line) can carry a `setAt[]` array:

```js
setAt: [
  { time: 1, x: 100, y: 120 },
  { time: 3, x: 200, y: 180 },
  { time: 5, x: 240, y: 90 }
]
```

Optionally, include labels:

```js
{ time: 3, x: 200, y: 180, label: "Included Side" }
```

---

## ✅ Runtime Rendering Logic (Player-Side)

1. On each `playerTick`, read current `time`.
2. Find the latest `setAt` entry `≤ current time`.
3. Position the pointer `<img>` at that `(x, y)`.
4. (Optional) Show `label` as tooltip or side text.

---

## ✅ Storage Convention

Animation data is not part of core `deck.slides`, but part of `deck.meta.animations`:

```js
deck.meta.animations = {
  3: {
    pointer: [
      { time: 1.2, x: 100, y: 200 },
      { time: 2.5, x: 250, y: 180, label: "Given Angle" }
    ]
  }
}
```

This is like `timings`, added post-generation.

---

## ✅ Svelte Runtime Example

```svelte
<img src="/icons/pointer.svg"
     style="position: absolute; left: {x}px; top: {y}px;" />
```

Value of `{x}` and `{y}` comes from `getCurrentPointer(currentTime, pointerData)`.

---

## ✅ Editor Tool Idea

* Show slide image as static background.
* Add draggable pointer icon.
* As you drag, capture position + current time.
* Add to `setAt[]` array live.

Output format saved into `deck.meta.animations[slideIndex].pointer`.

---

## ✅ Benefits

* Minimal asset generation
* Visual clarity step-by-step
* Pairs perfectly with audio/narration timings
* Keeps `deck.slides` clean and stable

---

## 🔒 Final Principle

Pointer data is sacred, like `showAt[]`. It is stored, edited, and applied independently — last-stage enhancement only.
