<script lang="ts">
  import { AlphabetService } from '$lib/alphabet';
  import type { Letter } from '$lib/models/letter';
  import { Accordion, AccordionItem, ProgressBar } from '@skeletonlabs/skeleton';
  import LetterCard from '../../components/letter-card.svelte';
  import { Configuration } from '$lib/configuration';

  const alphabetService = new AlphabetService();

  let stats: Record<string, { win: number; loose: number }> = {};
  let current = alphabetService.getRandom();

  function refreshLetter(refreshStats?: boolean) {
    if (refreshStats) {
      stats = {};
    }
    current = alphabetService.getRandom();
  }

  function win(letter: Letter) {
    const currentStats = stats[letter.index];
    if (currentStats) {
      stats[letter.index] = {
        ...currentStats,
        win: currentStats.win + 1
      };
    } else {
      stats[letter.index] = {
        loose: 0,
        win: 1
      };
    }

    refreshLetter();
  }

  function loose(letter: Letter) {
    const currentStats = stats[letter.index];
    if (currentStats) {
      stats[letter.index] = {
        ...currentStats,
        loose: currentStats.loose + 1
      };
    } else {
      stats[letter.index] = {
        loose: 1,
        win: 0
      };
    }

    refreshLetter();
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
        on:click={() => refreshLetter(true)}
      >
        <i class="ti ti-refresh" />
      </button>
    </div>

    <div class="container">
      {#if Object.keys(stats).length != 0}
        <div
          class="card !bg-transparent mt-5"
          style="box-shadow: none!important; border: none!important; text-align: center;"
        >
          <section>
            Global ({Object.keys(stats).reduce((previous, key) => previous + stats[key].win, 0)} / {Object.keys(
              stats
            ).reduce((previous, key) => previous + stats[key].win + stats[key].loose, 0)})
            <ProgressBar
              label="Progress Bar"
              meter="bg-success-500"
              track="bg-error-500"
              value={Object.keys(stats).reduce((previous, key) => previous + stats[key].win, 0)}
              max={Object.keys(stats).reduce(
                (previous, key) => previous + stats[key].win + stats[key].loose,
                0
              )}
            />
          </section>
        </div>

        <Accordion>
          <AccordionItem>
            <svelte:fragment slot="lead">
              <i class="ti ti-chart-histogram" />
            </svelte:fragment>
            <svelte:fragment slot="summary">Stats</svelte:fragment>
            <svelte:fragment slot="content">
              {#each Object.keys(stats).map((value) => value) as letterStats}
                <section>
                  {letterStats}
                  <ProgressBar
                    label={letterStats}
                    meter="bg-success-500"
                    track="bg-error-500"
                    value={stats[letterStats].win}
                    max={stats[letterStats].win + stats[letterStats].loose}
                  />
                </section>
              {/each}
            </svelte:fragment>
          </AccordionItem>
        </Accordion>
      {/if}
    </div>
  </div>
</div>
