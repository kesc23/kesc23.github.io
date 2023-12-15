<script>
    import markdownit from 'markdown-it';

    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true
    });

    const post = md.render(
        '# This is a post \n Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, accusamus aliquam quis labore repellendus quod repellat quas dignissimos deleniti illo voluptatibus ullam quos quo facilis et officiis laudantium animi aperiam ab voluptatum tempora nihil sequi. \n## Post post post\
        '
    )
</script>
<article class="prose">
    {@html post}
</article>