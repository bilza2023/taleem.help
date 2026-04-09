<script>
    import syllabus from '/static/data/syllabus/fbise8math.json';
    import { getByTag } from 'taleem-tag-engine';
  
    const items = syllabus.items;
  
    const chapters = getByTag(items, "type:chapter");
  
    function getChildren(chapterItem) {
      const chapterTag = chapterItem.tags.find(t => t.startsWith("chapter:"));
  
      return getByTag(items, chapterTag)
        .filter(item => !item.tags.includes("type:chapter"));
    }
  
    let activeIndex = $state(0);
  
    // ✅ Svelte 5 way
    const activeChapter = $derived(chapters[activeIndex]);
    const children = $derived(getChildren(activeChapter));
  </script>
  
  <style>
 .layout {
  display: flex;
  height: calc(100vh - 60px);
  background: #0f172a; /* deep navy */
}

/* SIDEBAR */
.sidebar {
  width: 260px;
  padding: 18px 14px;
  background: #111827; /* darker panel */
  border-right: 1px solid #1f2937;
}

.chapter-link {
  padding: 10px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 6px;
  font-size: 14px;
  color: #cbd5e1;
  transition: all 0.15s ease;
}

.chapter-link:hover {
  background: #1f2937;
  color: #fff;
}

.chapter-link.active {
  background: #2563eb; /* blue highlight */
  color: #fff;
  font-weight: 600;
}

/* CONTENT */
.content {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  background: #0f172a;
}

h2 {
  margin-bottom: 20px;
  color: #e2e8f0;
  font-size: 22px;
}

/* CARDS */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 18px;
}

.card {
  border-radius: 12px;
  padding: 12px;
  background: #1e293b; /* card surface */
  transition: all 0.2s ease;
  border: 1px solid #334155;
}

.card:hover {
  transform: translateY(-2px);
  border-color: #2563eb;
}

/* IMAGE */
.card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #0f172a;
}

/* TEXT */
.card a {
  text-decoration: none;
  color: #e2e8f0;
  font-size: 14px;
  font-weight: 500;
}

.card a:hover {
  color: #60a5fa;
}
  </style>
  
  
  <div class="layout">
  
    <!-- SIDEBAR -->
    <div class="sidebar">
      {#each chapters as chapter, i}
        <div
          class="chapter-link {activeIndex === i ? 'active' : ''}"
          onclick={() => activeIndex = i}
        >
          {chapter.title}
        </div>
      {/each}
    </div>
  
    <!-- CONTENT -->
    <div class="content">
      <h2>{activeChapter.title}</h2>
  
      <div class="cards">
        {#each children as item}
          <div class="card">
            <a href={`/player?deck=${item.slug}`}>
              <img src={item.image} alt={item.title} />
              {item.title}
            </a>
          </div>
        {/each}
      </div>
    </div>
  
  </div>