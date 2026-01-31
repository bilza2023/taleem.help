<script>
//@ts-nocheck
export let clk; 
export let icon ='🧪';
export let title ='Menu';

export let bg = 'bg-transparent';
export let titleColor = 'text-gray-900';
export let hoverBg = 'hover:bg-[#bfa074]';
</script>

<div class="w-15 hover:bg-gray-400  rounded-md active:bg-gray-900 transition-colors">
    <button class={`w-full flex flex-col items-center p-2 m-0  rounded   ${bg} ${hoverBg} active:bg-gray-900 transition-colors`}
    on:click={clk}
    >
      <span class="text-md">{icon}</span>
      <span class={`text-xs font-medium transition-colors group-hover:${titleColor}`}>{title}</span>
    </button>
</div>
