<script>
    /** @type {{post: any, isPost: any}} */
    let { post, isPost } = $props();
</script>

<div class="w-full h-10 bg-zinc-950 flex justify-center">
    <div class="max-w-[1200px] w-full flex items-center">
        {#if isPost}
            <a href="/edit?post={post.id}">Editar Post</a>
        {:else}
            <a href="/edit?post=new">Criar Post</a>
        {/if}
    </div>
</div>