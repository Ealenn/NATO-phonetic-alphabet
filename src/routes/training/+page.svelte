<script lang="ts">
  import { AlphabetService } from '$lib/services/alphabet.service';
  import type { Letter } from '$lib/models/letter';
  import { modalStore } from '@skeletonlabs/skeleton';
  import LetterCard from '../../components/letter-card.svelte';
  import { Configuration } from '$lib/configuration';
  import { StatisticService } from '$lib/services/statistics.service';
  import StatisticsModal from '../../components/statistics-modal.svelte';

  const alphabetService = new AlphabetService();
  const statisticService = new StatisticService(alphabetService);

  let stats = statisticService.getAlphabetStatistics();
  let current = alphabetService.getRandom();

  function refresh(refreshStats?: boolean) {
    current = alphabetService.getRandom();
    if (refreshStats) {
      stats = statisticService.reset();
    }
  }

  function win(letter: Letter) {
    stats = statisticService.win(letter);
    refresh();
  }

  function loose(letter: Letter) {
    stats = statisticService.loose(letter);
    refresh();
  }
</script>

<svelte:head>
  <title>{Configuration.Project.Name} - Training</title>
</svelte:head>

<div class="flex items-center justify-center h-screen">
  <div class="grid grid-cols-1 gap-4">
    <div class="container">
      <LetterCard letter={current} hideOnHover additionalClass="variant-filled m-auto" />
    </div>

    <div class="container p-1">
      <button
        type="button"
        class="m-1 btn-icon btn-icon-xl variant-filled-success"
        on:click={() => win(current)}
      >
        <i class="ti ti-check" />
      </button>
      <button
        type="button"
        class="m-1 btn-icon btn-icon-xl variant-filled-error"
        on:click={() => loose(current)}
      >
        <i class="ti ti-x" />
      </button>
      <button
        type="button"
        class="m-1 btn-icon btn-icon-xl variant-filled"
        on:click={() => refresh(true)}
      >
        <i class="ti ti-refresh" />
      </button>
    </div>

    <div class="mx-auto justify-center place-content-center">
      <button
        type="button"
        class="btn variant-soft"
        on:click={() =>
          modalStore.trigger({
            type: 'component',
            component: {
              ref: StatisticsModal,
              props: { stats }
            }
          })}
      >
        <span><i class="ti ti-chart-histogram" /></span>
        <span>Statistics</span>
      </button>
    </div>
  </div>
</div>
