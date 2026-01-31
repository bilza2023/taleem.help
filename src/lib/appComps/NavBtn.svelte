<script>
  //@ts-nocheck
  export let url = 'https://taleem.help';
  export let icon = '🧪';
  export let title = 'Menu';
  export let bgColor = "gray";
  export let bg = 'bg-transparent';
  export let hoverBg = 'hover:bg-[#bfa074]';
  export let titleColor = 'text-gray-900';
</script>

<a href={url} class="w-15 group rounded-md">
  <button class={`w-full flex flex-col items-center p-2 m-0 rounded ${bg} ${hoverBg} active:bg-gray-900 transition-colors`}>
    <span class="text-md">{icon}</span>
    <span class={`text-xs font-medium transition-colors group-hover:${titleColor}`}>{title}</span>
  </button>
</a>
