<script lang="ts">
  import { AlphabetService } from '$lib/alphabet';
  import type { Letter } from '$lib/models/letter';
  import { Accordion, AccordionItem, ProgressBar } from '@skeletonlabs/skeleton';

  const alphabetService = new AlphabetService();

  let stats: Record<string, { win: number; loose: number }> = {};

  let showDefinition = false;
  let current = alphabetService.getRandom();

  function refreshLetter(refreshStats?: boolean) {
    if (refreshStats) {
      stats = {};
    }
    showDefinition = false;
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

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="space-y-5">
    <div
      class="card variant-filled p-5 m-5"
      style="text-align: center; height: 150px; width: 200px;"
    >
      <section class="p-4 h1">{current.index}</section>
      <div
        on:mouseenter={() => {
          showDefinition = true;
        }}
        on:mouseleave={() => {
          showDefinition = false;
        }}
      >
        <section class="h5">
          {#if showDefinition}
            {current.title}
          {:else}
            <div class="placeholder" />
          {/if}
        </section>
      </div>
    </div>

    <div style="text-align: center;">
      <button
        type="button"
        class="btn-icon btn-icon-xl variant-filled-success m-2"
        on:click={() => win(current)}
      >
        <i class="ti ti-check" />
      </button>
      <button
        type="button"
        class="btn-icon btn-icon-xl variant-filled-error m-2"
        on:click={() => loose(current)}
      >
        <i class="ti ti-x" />
      </button>
      <button
        type="button"
        class="btn-icon btn-icon-xl variant-filled m-2"
        on:click={() => refreshLetter(true)}
      >
        <i class="ti ti-refresh" />
      </button>
    </div>

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
