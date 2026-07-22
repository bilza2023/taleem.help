# Taleem Server v2 Architecture

The server is divided into four independent areas. Each area has a clear responsibility.

## 1. Static Pages

Static pages are HTML files stored on the server.

These pages contain website content such as:

* Articles
* About Us
* FAQ
* Privacy Policy
* Terms and Conditions
* Help pages
* Documentation
* Landing pages

The frontend has only **one** page for displaying static pages.

The server simply returns the requested HTML page based on its slug.

Example:

```
GET /api/page/:slug
```

Server:

```
content/pages/
    about.html
    faq.html
    privacy.html
    9math-ch3-quickref-sets.html
```

The frontend never creates a new page for each HTML file. New pages are added simply by copying a new HTML file into the server.

---

## 2. Static Data

Static data consists of JSON files stored on the server.

These files describe website data rather than user content.

Examples:

* home-links.json
* syllabus.json
* navigation.json
* course-list.json
* announcements.json

Example endpoint:

```
GET /api/data/:name
```

Server:

```
content/data/
    home-links.json
    syllabus.json
    course-list.json
```

Again, the frontend has one generic loader. Any new JSON file can be added without modifying the frontend.

---

## 3. Library (Database Content)

The Library contains all educational content stored in the database.

Unlike static pages, every library item has a **content type**.

Examples:

* Article
* Deck
* Video
* Audio
* MCQ
* Quiz
* Exercise
* Course
* Lesson

The frontend reads the library metadata and routes the user to the correct viewer based on the content type.

Example:

```
Library Item
        │
        ├── type = article  → /article
        ├── type = deck     → /player
        ├── type = audio    → /audio
        ├── type = mcq      → /mcq
        └── type = quiz     → /quiz
```

Each content type has its own dedicated page and viewer.

---

## 4. Application APIs

These APIs provide application functionality rather than content.

### User API

Examples:

* Register
* Login
* Verify Token
* Profile
* Communication
* Purchases

---

### Admin API

Examples:

* Content Management
* User Management
* Library Management
* Communication Management
* Reports
* Statistics
* Course Administration

---

# Overall Architecture

```
Frontend
    │
    ├── Static Pages
    │       GET /api/page/:slug
    │
    ├── Static Data
    │       GET /api/data/:name
    │
    ├── Library
    │       Database Content
    │       Route by Content Type
    │
    ├── User API
    │
    └── Admin API
```

## Design Philosophy

* The frontend remains small and generic.
* New HTML pages require no frontend changes.
* New JSON files require no frontend changes.
* Educational content is managed through the Library.
* Each library content type has its own specialized viewer.
* User and Admin functionality is completely separate from content delivery.
* The backend owns the content, while the frontend is responsible only for presentation.
