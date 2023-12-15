<script>
    import { page } from '$app/stores';
    import FourOFour from './four-o-four.svelte';
</script>

{#if $page.status == 404}
<FourOFour/>
{:else}
<h1>{$page.status}: {$page.error.message}</h1>
{/if}

