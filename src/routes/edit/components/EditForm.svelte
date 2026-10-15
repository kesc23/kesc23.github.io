<script>
    import { preventDefault } from 'svelte/legacy';

    /** @type {{post: any}} */
    let { post = $bindable() } = $props();
    if( ! post.publish_date ) post.publish_date = ((d) => `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}T00:00` )(new Date());
    if( ! post.content ) post.content = ""
</script>

<form class="form-control gap-4 max-h-[calc(100vh-40px)] overflow-y-auto" onsubmit={preventDefault(() => console.log(post))}>
    <fieldset>
        <label for="title">Título</label>
        <input bind:value={post.title} class="input input-sm w-full" type="text" name="title" id="title" required>
    </fieldset>
    <fieldset>
        <label for="slug">Slug</label>
        <input bind:value={post.slug} class="input input-sm w-full" type="text" name="slug" id="slug" pattern="[a-z0-9\-]+" required>
    </fieldset>
    <fieldset>
        <label for="keywords">Palavras-chave</label>
        <input bind:value={post.keywords} class="input input-sm w-full" type="text" name="keywords" id="keywords" maxlength="100" required>
    </fieldset>
    <fieldset>
        <label for="description">Descrição</label>
        <textarea class="textarea w-full min-h-40" bind:value={post.description} name="description" id="description" cols="30" rows="80" maxlength="300"></textarea>
        <div class="label py-0">
            <span class="label-text-alt">length: {post.description?.length ?? 0}</span>
        </div>
    </fieldset>
    <fieldset>
        <label for="status">Status</label>
        <select bind:value={post.status} class="select select-bordered w-full select-sm" name="status" id="status">
            <option value="published">Publicado</option>
            <option selected value="draft">Rascunho</option>
            <option value="unpublished">Não Publicado</option>
        </select>
    </fieldset>
    <fieldset>
        <label for="publish_date">Data de Publicação</label>
        <input bind:value={post.publish_date} class="input input-sm w-full" type="datetime-local" name="publish_date" id="publish_date" required>
    </fieldset>
    <fieldset>
        <!-- svelte-ignore a11y_label_has_associated_control -->
        <label>Imagem em destaque / Redes Sociais</label>
        <button type="button" class="btn btn-accent btn-outline btn-sm w-full">Editar</button>
    </fieldset>
    <fieldset>
        <label for="author">Autor</label>
        <select bind:value={post.author} class="select select-bordered w-full select-sm" name="author" id="author">
            <option value="1">Kevin Campos</option>
            <option value="2">John Doe</option>
            <option value="3">Jane Doe</option>
        </select>
    </fieldset>

    <div class="bg-base-100 sticky bottom-0 pt-4">
        <button type="submit" class="btn btn-primary w-full">Salvar</button>
    </div>
</form>

