
<script>
  export let heading = "🧠 AI Learning Tracks";
  export let description = "Learn to use, build, and earn with modern AI tools. From prompt basics to business automation.";
  export let link = "/courses/ai";
  export let buttonText = "View AI Courses →";
</script>

<div class="bg-[#f3e8d9] border border-[#8b5306] rounded-xl p-5 shadow hover:shadow-lg transition">
  <h3 class="text-xl font-semibold text-[#3d2e1e] mb-2">{heading}</h3>
  <p class="text-sm text-gray-700 mb-3">
    {description}
  </p>
  <a href={link} class="inline-block text-sm font-medium text-white bg-[#3d2e1e] px-4 py-2 rounded hover:bg-[#2a1e13]">
    {buttonText}
  </a>
</div>

  