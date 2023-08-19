<script>
  import { page } from '$app/stores';
  import { AppRail, AppRailAnchor, AppRailTile } from '@skeletonlabs/skeleton';
  import { Configuration } from '$lib/configuration';

  const menuElements = {
    actions: [
      {
        Icon: 'ti ti-abc',
        Title: 'Alphabet',
        Url: '/'
      },
      {
        Icon: 'ti ti-cards',
        Title: 'Training',
        Url: '/training'
      }
    ],
    footer: [
      {
        Icon: 'ti ti-brand-github-filled',
        Title: Configuration.Github.User,
        Url: Configuration.Github.Url
      }
    ]
  };
</script>

<AppRail>
  {#each menuElements.actions as element}
    <AppRailAnchor
      href={element.Url}
      title={element.Title}
      selected={$page.url.pathname === element.Url}
    >
      <svelte:fragment slot="lead">
        <i class={element.Icon} />
      </svelte:fragment>
      <span>{element.Title}</span>
    </AppRailAnchor>
  {/each}

  <svelte:fragment slot="trail">
    {#each menuElements.footer as element}
      <AppRailAnchor href={element.Url} target="_blank" title={element.Title}>
        <svelte:fragment slot="lead">
          <i class={element.Icon} />
        </svelte:fragment>
        <span>{element.Title}</span>
      </AppRailAnchor>
    {/each}
  </svelte:fragment>
</AppRail>
