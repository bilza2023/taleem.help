<script>
   let thumbnails = [
  { src: "/brand/web.webp", url: "/courses/webdevelopment" },
  { src: "/brand/it2.webp", url: "/courses/ai" },
  { src: "/brand/ai101.webp", url: "/courses/ai" },
  { src: "/brand/ai4.webp", url: "/courses/ai" },
  { src: "/brand/ai4professionals.webp", url: "/courses/ai" },
  { src: "/brand/mathclass9fbise.webp", url: "/courses/fbise9math" },
  { src: "/brand/english9th2.webp", url: "/courses/ai" },
];

  
    const fallback = "/brand/placeholder.webp";
  </script>

<div class="flex flex-wrap justify-center gap-4 p-4">
  {#each thumbnails as thumb}
  <a href={thumb.url}>
    <div
      class="w-[200px] h-[240px] bg-[#f3e8d9] border border-[#8b5306] rounded-xl overflow-hidden hover:shadow-[12px_0px_24px_-4px_#C4A77F] transition-shadow duration-200"
    >
      <img
        src={thumb.src || fallback}
        alt="thumbnail"
        class="w-full h-full object-cover"
      />
    </div>
  </a>
{/each}

  </div>
  
  
  