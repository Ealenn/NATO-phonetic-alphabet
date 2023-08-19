<script lang="ts">
  // The ordering of these imports is critical to your app working properly
  import '@skeletonlabs/skeleton/themes/theme-rocket.css';
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  // Most of your app wide CSS should be put in this file
  import '../app.postcss';
  import { AppShell } from '@skeletonlabs/skeleton';
  import Sidebar from '../components/layout/sidebar.svelte';
</script>

<AppShell>
  <svelte:fragment slot="sidebarLeft">
    <Sidebar />
  </svelte:fragment>

  <slot />
</AppShell>
