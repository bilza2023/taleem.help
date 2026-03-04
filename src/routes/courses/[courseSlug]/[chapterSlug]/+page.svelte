<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
  
    let courseSlug;
    let chapterSlug;
  
    let course;
    let chapter;
    let links = [];
  
    $: courseSlug = $page.params.courseSlug;
    $: chapterSlug = $page.params.chapterSlug;
  
    onMount(async () => {
  
      const courseRes = await fetch(`/data/courses/${courseSlug}.json`);
      course = await courseRes.json();
  
      chapter = course.chapters.find(c => c.slug === chapterSlug);
  
      const linksRes = await fetch(`/data/links/${courseSlug}.json`);
      const allLinks = await linksRes.json();
  
      links = allLinks.filter(l => l.anchor === chapterSlug);
  
    });
  </script>
  
  <h1>{chapter?.title}</h1>
  
  <ul>
    {#each links as link}
      <li>
        <a href={`/courses/${courseSlug}/${chapterSlug}/${link.deck}`}>
          {link.title}
        </a>
      </li>
    {/each}
  </ul>