# Taleem Backoffice

## 🎯 Mission

Taleem Backoffice is a **content compiler**.

Its only responsibility is to take **author-written deck source files** and produce a **clean, correct `/static/content` output**.

Nothing more.

> If a deck exists in `/static/content/decks`, it is **published output**.
> If a deck exists in `/static/content/build-decks`, it is **source**.

---

## 🧠 System Snapshot (Current State)

We operate a **compiler-style architecture**:

```
Source (.js)  →  Compile  →  Output (.json)
```

There is:

* ❌ no workspace
* ❌ no draft system
* ❌ no file movement
* ❌ no syncing

Everything is **direct, file-based, and deterministic**.

---

## 🧱 Core Principles

### 1. Source vs Output Separation

```bash
/static/content/
  build-decks/   ← SOURCE (editable)
  decks/         ← OUTPUT (compiled JSON)
```

* `.js` files are the **only place where editing happens**
* `.json` files are **generated artifacts**
* Output is disposable and reproducible

---

### 2. Deck = atomic unit

* Each deck is independent
* No hierarchy
* No syllabus
* No grouping

Backoffice does not care how decks are consumed.

---

### 3. Slug = Identity

```js
deck.slug
```

* Must be unique across all decks
* Used for:

  * JSON filename
  * audio filename

---

### 4. Images are global

```bash
/static/content/images/
```

* shared across all decks
* no ownership
* no copying
* no movement

> Images are treated as a **global asset pool**

---

### 5. Audio is slug-bound

```bash
/static/content/audio/{slug}.mp3 | .opus
```

* each deck may have **one audio file**
* tied strictly to slug

---

## 🖼️ Image System

### Global images

```bash
/static/content/images/
```

* any deck can use any image
* deck only references:

```js
"/images/example.webp"
```

---

### Important Rule

> Images are **not edited in place**

If a change is needed:

```
img1.webp → img1_v2.webp
```

---

### Cleanup Strategy

Unused images are expected.

They are cleaned via a **separate garbage collection script** (see future tools).

---

## ⚙️ Authoring Model

### Deck source files

```bash
/static/content/build-decks/*.js
```

Each file:

* uses `taleem-builder`
* exports a builder or JSON
* defines `deck.slug`

Example:

```js
import Builder from "taleem-builder";

export default () => {
  const b = new Builder();

  b.meta({ name: "Demo" });

  b.at(0).titleAndSubtitle()
    .title("Hello", 0);

  b.end(10);

  return b.build();
};
```

---

## 🚀 Compile System

### Command

```bash
node cli/compile.js
```

---

### Responsibilities

1. Read all `.js` files from:

```bash
/static/content/build-decks/
```

---

2. Build each deck using TaleemBuilder 

---

3. Validate:

* slug exists
* slug is unique
* builder does not throw
* all referenced images exist

---

4. Generate output:

```bash
/static/content/decks/{slug}.json
```

---

### Behavior

* ❌ No overwrite logic
* ❌ No rename prompts
* ❌ No partial success

> If ANY error occurs → compilation stops

---

## 🧪 Validation Philosophy

All validation happens at **compile time**:

* missing images → error
* duplicate slug → error
* invalid builder → error

> Output is always safe and consistent

---

## ❌ Explicit Non-Goals

Backoffice does NOT handle:

* syllabus
* tagging
* hierarchy
* search
* APIs
* runtime logic
* versioning system

---

## 🧠 Philosophy

Backoffice produces **clean, deterministic artifacts**.

It does not manage state.
It does not manage workflows.

> It compiles source into truth.

---

## 🔮 Planned / Future Scripts

### 1. `compile.js` (core)

* compile all decks
* validate everything
* generate JSON

---

### 2. `clean-images.js`

* scan all decks
* collect used images
* move/delete unused images

---

### 3. `create-deck.js`

* create new `.js` file in `build-decks/`
* enforce naming + template

---

### 4. `health.js`

* scan `/content/decks`
* detect:

  * missing images
  * broken references
  * invalid structures

---

### 5. (Optional) `watch.js`

* auto-compile on file change
* dev convenience only

---

## 💥 Final Principle

> Source is editable.
> Output is disposable.
> Assets are global.

---

## 🧠 One-liner

> Taleem Backoffice = **deck compiler + asset pool**

---
