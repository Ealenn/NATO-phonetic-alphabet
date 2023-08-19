<script>
  import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
  import AlphabetTab from './tabs/alphabet.svelte';
  import TrainingTab from './tabs/training.svelte';

  let currentTile = 'alphabet';
</script>

<svelte:head>
  <title
    >NATO Phonetic Alphabet - {currentTile.charAt(0).toUpperCase() + currentTile.slice(1)}</title
  >
</svelte:head>

<div class="card !bg-transparent grid grid-cols-[auto_1fr] h-full w-full">
  <AppRail>
    <AppRailTile bind:group={currentTile} name="alphabet" value="alphabet" title="alphabet">
      <svelte:fragment slot="lead">
        <i class="ti ti-abc" />
      </svelte:fragment>
      <span>Alphabet</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="training" value="training" title="training">
      <svelte:fragment slot="lead">
        <i class="ti ti-cards" />
      </svelte:fragment>
      <span>Training</span>
    </AppRailTile>

    <svelte:fragment slot="trail">
      <AppRailAnchor href="/" target="_blank" title="GitHub">
        <i class="ti ti-brand-github-filled" />
      </AppRailAnchor>
    </svelte:fragment>
  </AppRail>

  {#if currentTile === 'alphabet'}
    <AlphabetTab />
  {/if}

  {#if currentTile === 'training'}
    <TrainingTab />
  {/if}
</div>
