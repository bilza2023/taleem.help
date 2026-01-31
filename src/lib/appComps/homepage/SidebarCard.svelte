

<script>
  export let icon = "";
  export let title = "";
  export let details = "";
  export let url = "#";
</script>

<a href={url}  class="block no-underline">
  <div class="bg-[#fef6ec] border border-[#c4a77f] rounded-lg p-4 text-sm shadow-sm hover:shadow-md transition cursor-pointer">
    <h4 class="font-semibold text-[#3d2e1e] mb-1">{icon} {title}</h4>
    <p class="text-gray-700">{details}</p>
  </div>
</a>
