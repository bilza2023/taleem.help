<script>
    export let value;
  
    const options = [
     'fbise9math', 'fbise10math', 'free'
    ];
  
    function handleInput(e) {
      value = e.target.value;
    }
  </script>
  
  <select class="bg-gray-900 text-white text-xs" on:change={handleInput}>
    <option  value="">Select</option>
    {#each options as option}
      <option value="{option}">{option}</option>
    {/each}
  </select>