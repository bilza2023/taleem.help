

# Deck is not database content

The core idea is simple but powerful: a deck is not database content — it is an asset, just like an image or an audio file. That means `deck.json`, `image.webp`, and `audio.mp3` must all live in the same storage layer, move through the same deployment pipeline, and be delivered through the same CDN mechanism. There should be no special database layer for decks, because the moment decks are stored separately from their media, they start drifting out of sync. By keeping everything file-based and unified under one delivery system, you permanently eliminate synchronization problems and preserve structural integrity as the library scales.


# script-based content library management system

This is a script-based content library management system built around a disciplined loop: **Content → Audit → Fix → Push → Deploy**. Instead of relying on a database or manual checks, small validation scripts automatically verify integrity before anything goes live — checking for missing images, missing audio, broken references, timing mismatches, and structural errors. Nothing is published unless it passes audit, which keeps the entire knowledge library clean, synchronized, and scalable without adding unnecessary complexity.

# Content library structure

The content library is controlled by a strict top-down structure: start with a single `courses.json` that lists all courses, each course JSON then declares its own decks, and combining those gives you the complete universe of decks — with nothing in between. That means `courses.json` becomes the single source of truth. The system does not scan folders randomly; it reads the declared structure and then validates all assets (decks, images, audio) against it. Files must conform to the index — not the other way around — which keeps the library deterministic, organized, and fully auditable at scale.
