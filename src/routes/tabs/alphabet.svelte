<script>
  import { AlphabetService } from '$lib/alphabet';

  const alphabetService = new AlphabetService();
  const alphabet = alphabetService.getAll();
</script>

<div class="container m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
  {#each alphabet as letter}
    <div class="card p-5 m-1" style="text-align: center; height: 150px; width: 200px;">
      <section class="p-4 h1">{letter.index}</section>
      <section class="h5">
        {letter.title}
      </section>
    </div>
  {/each}
</div>
