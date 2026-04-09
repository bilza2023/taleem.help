<script>
    import syllabus from '/static/data/syllabus/fbise8math.json';
    import { getByTag } from 'taleem-tag-engine';
  
    const items = syllabus.items;
  
    // get chapter items
    const chapters = getByTag(items, "type:chapter");
  
    function getChildren(chapterItem) {
      const chapterTag = chapterItem.tags.find(t => t.startsWith("chapter:"));
  
      return getByTag(items, chapterTag)
        .filter(item => !item.tags.includes("type:chapter"));
    }
  </script>
  
   <style>
  h1 {
    margin-bottom: 25px;
    font-size: 28px;
    font-weight: 600;
  }

  .chapter {
    margin-bottom: 35px;
    padding: 18px 20px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    background: #fafafa;
  }

  .chapter h2 {
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 600;
    color: #222;
    border-bottom: 1px solid #eee;
    padding-bottom: 6px;
  }

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 6px;
    border-radius: 6px;
    transition: background 0.15s ease;
  }

  .item:hover {
    background: #f0f0f0;
  }

  img {
    width: 38px;
    height: 38px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #ddd;
  }

  a {
    text-decoration: none;
    color: #333;
    font-size: 15px;
    font-weight: 500;
  }

  a:hover {
    color: #000;
  }
</style>
  
  <h1>Syllabus</h1>
  
  {#each chapters as chapter}
    <div class="chapter">
      <h2>{chapter.title}</h2>
  
      {#each getChildren(chapter) as item}
        <div class="item">
          <a href={`/player?deck=${item.slug}`}>
            <img src={item.image} alt={item.title} />
            {item.title}
          </a>
        </div>
      {/each}
    </div>
  {/each}