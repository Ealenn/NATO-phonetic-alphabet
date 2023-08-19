<script lang="ts">
  import type { Letter } from '$lib/models/letter';

  export let letter: Letter;
  export let additionalClass = '';

  export let hideOnHover = false;
  let showDefinition = hideOnHover ? false : true;
</script>

<div
  class={'card p-5 ' + additionalClass}
  style={'text-align: center; height: 150px; width: 200px; cursor:' +
    (hideOnHover ? 'help' : 'default') +
    ';'}
  on:mouseenter={() => {
    showDefinition = true;
  }}
  on:mouseleave={() => {
    showDefinition = hideOnHover ? false : true;
  }}
>
  <section class="p-4 h1">{letter.index}</section>
  <section class="h5">
    {#if showDefinition}
      {letter.title}
    {:else}
      <div class="placeholder" />
    {/if}
  </section>
</div>
