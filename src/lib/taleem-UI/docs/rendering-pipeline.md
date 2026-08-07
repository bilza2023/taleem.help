                 Runner

Input
│
├── 1. Deck Loader
│      Read deck JSON
│
├── 2. Slide Compiler
│      Convert semantic slide → render model
│
├── 3. Scene Manager
│      Current slide, preload, navigation
│
├── 4. Layout Engine
│      Measure screen
│      Calculate sizes
│      Detect overflow
│      Produce final layout
│
├── 5. Theme Engine
│      Colors
│      Typography
│      Spacing
│      Background
│
├── 6. Animation Engine
│      Object animations
│      Reveal steps
│      Timeline
│
├── 7. Transition Engine
│      Slide A → Slide B
│
├── 8. Renderer
│      Svelte Components
│      DOM / Canvas / SVG
│
└── 9. Input Controller
       Keyboard
       Touch
       Mouse
       Remote