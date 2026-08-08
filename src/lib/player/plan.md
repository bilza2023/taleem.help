1. Load deck
        │
        ▼
2. Validate / Patch (optional)
        │
        ▼
3. Prepare deck
      - deckEndTime
      - update asset paths
      - preload manifest (future)
      - asset checks (future)
        │
        ▼
4. Load audio (optional)
        │
        ▼
5. Create timer
        │
        ▼
6. Bind timer → currentTime
        │
        ▼
7. Render page
        │
        ├── applyBackground()
        ├── <TaleemUI/>
        └── Navbar
        │
        ▼
8. After DOM update
        │
        └── useMath()