<script lang="ts">
  import { ProgressBar } from '@skeletonlabs/skeleton';
  import type { Statistics } from '$lib/models/statistics';

  export let stats: Statistics;
  /** Exposes parent props to this component. */
  export let parent: any;
</script>

<div class="variant-glass-surface p-4 w-modal shadow-xl space-y-4 relative">
  <button class="absolute -top-3 -right-3 z-1 btn-icon variant-filled" on:click={parent.onClose}>
    ✕
  </button>

  <section>
    <b>Global</b> ({stats.GlobalWin} / {stats.GlobalPlayed})
    <ProgressBar
      label="Progress Bar"
      meter="bg-success-500"
      track="bg-error-500"
      value={stats.GlobalWin}
      max={stats.GlobalPlayed}
    />
  </section>

  <section>
    {#each stats.Letter as letterStats}
      {#if letterStats.Played > 0}
        <section>
          <b>{letterStats.Letter.Index}</b> ({letterStats.Win} / {letterStats.Played})
          <ProgressBar
            label={letterStats}
            meter="bg-success-500"
            track="bg-error-500"
            value={letterStats.Win}
            max={letterStats.Played}
          />
        </section>
      {/if}
    {/each}
  </section>
</div>
