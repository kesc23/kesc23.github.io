<script>
    /** @type {{link: any, label: any, children?: import('svelte').Snippet, [key: string]: any}} */
    let { ...props } = $props();
    let _class = $derived(props.class);
</script>

<li>
    <a class="btn btn-sm btn-outline border-blue-900 hover:bg-blue-900 hover:border-blue-900 dark:hover:text-base-content! {_class ?? ""}" href="{props.link}" aria-label={props.label}>
        {@render props.children?.()}
    </a>
</li>


