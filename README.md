# Taleem Backoffice

## 🎯 Mission

Taleem Backoffice is a **content factory**.

Its only responsibility is to produce a **clean, correct `/static/content` folder**.

Nothing more.

> If a deck exists in `/static/content`, it is **published**.
> Everything else is ignored.

---

## 🧱 Core Principles

### 1. Content is the only truth

* All final decks live in:

  `/static/content/decks/`

* No database

* No API

* No abstraction layer

---

### 2. Deck = atomic unit

* Each deck is independent
* No hierarchy
* No syllabus
* No grouping

---

### 3. Filename ≠ Identity

* File is always:

```bash
/workbench-content/the-deck.js
```

* Identity is:

```js
deck.slug
```

---

### 4. Location defines state

#### Workbench (not published)

```bash
/static/workbench-content/
  the-deck.js
  images/
  audio/
```

* only ONE active deck
* experimental
* incomplete allowed

---

#### Content (published)

```bash
/static/content/
  decks/{slug}.json
  images/{slug}/
```

* clean
* validated
* production ready

---

## 🖼️ Image System

### Workbench images

```bash
/static/workbench-content/images/
```

* free creation
* experimentation allowed

---

### Gen images

```bash
/static/workbench-content/gen-*
```

* shared visuals
* never copied
* assumed to exist globally

---

### Published images

```bash
/static/content/images/{slug}/
```

* only used images
* no unused files

---

## ⚙️ CLI System

All publishing is done via CLI.

```bash
node cli/done.js
```

---

## 🚀 done CLI Responsibilities

### 1. Load deck

```bash
/workbench-content/the-deck.js
```

---

### 2. Extract slug

```js
deck.slug
```

---

### 3. Handle slug conflicts

If slug exists:

* Overwrite (requires typing `OVERWRITE`)
* Rename (must be unique)
* Cancel

---

### 4. Validate deck

* Must match schema
* Must be playable

---

### 5. Extract image usage

* Scan deck for all images

---

### 6. Handle image conflicts

For each image:

* Overwrite (requires confirmation)
* Rename
* Skip

---

### 7. Copy images

From:

```bash
/workbench-content/images/
```

To:

```bash
/static/content/images/{slug}/
```

* `gen-*` images are ignored

---

### 8. Generate JSON

```bash
/static/content/decks/{slug}.json
```

---

## ❌ Explicit Non-Goals

Backoffice does NOT handle:

* syllabus
* tags
* hierarchy
* search
* API
* runtime logic

---

## 🧠 Philosophy

Backoffice produces **clean bricks**.

It does not organize or interpret them.

---

## 💥 Final Principle

> One working deck.
> One publish command.
> Clean output.

---
