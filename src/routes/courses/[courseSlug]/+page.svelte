<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
  
    let course;
    let courseSlug;
  
    $: courseSlug = $page.params.courseSlug;
  
    onMount(async () => {
      const res = await fetch(`/data/courses/${courseSlug}.json`);
      course = await res.json();
    });
  </script>
  
  <h1>{course?.title}</h1>
  
  <ul>
    {#each course?.chapters || [] as ch}
      <li>
        <a href={`/courses/${courseSlug}/${ch.slug}`}>
          {ch.title}
        </a>
      </li>
    {/each}
  </ul>