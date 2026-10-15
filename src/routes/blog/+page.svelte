<script>
    import { domain } from '$lib/variables.js';

    /** @type {{data: any}} */
    let { data } = $props();
</script>
<svelte:head>
    <link rel="canonical" href="{ domain + data.path }">
</svelte:head>
<div class="max-w-[1200px] md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 flex flex-col">
    {#each data.posts as { title, slug }, i}
        <a href="/blog/{slug}">
            {#if i < 3 }
                <h3>{title}</h3>
            {:else}
                <h3>{title}</h3>
            {/if}
        </a>
    {:else}
        <p>Nenhuma publicação por enquanto.</p>
    {/each}
</div>
