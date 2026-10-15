<script>
    import { page } from '$app/stores';
    import FourOFour from './404/+page.svelte';
</script>
{#if $page.status == 404 }
    <FourOFour/>
{/if}