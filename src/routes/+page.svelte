<script lang="ts">
  import { AlphabetService } from '$lib/alphabet';
  import { Configuration } from '../lib/configuration';
  import LetterCard from '../components/letter-card.svelte';

  const alphabetService = new AlphabetService();
  const alphabet = alphabetService.getAll();
</script>

<svelte:head>
  <title>{Configuration.Project.Name} - Alphabet</title>
</svelte:head>

<div class="flex items-center justify-center h-screen p-5">
  <div class="container m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
    {#each alphabet as letter}
      <LetterCard {letter} additionalClass="m-1" />
    {/each}
  </div>
</div>
