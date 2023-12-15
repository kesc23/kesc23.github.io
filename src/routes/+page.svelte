<script>
    import '$lib/styles.css';
    let y;
    let hideonscroll = '';

    $: hideonscroll = y > 170 ? 'hidden' : '';
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <meta name="description" content="Sou Kevin Campos, Desenvolvedor Full-stack e Gestor de tráfego. Juntos, podemos tirar suas ideias do papel e fazer seu negócio chegar em um público altamente qualificado!">
    <title>Kevin Campos</title>
    <script type="application/ld+json">{ "@context": "https://schema.org/", "@type": "ProfilePage", "mainEntity": { "@type": "Person", "name": "Kevin Campos", "url": "https://kevincampos.com.br", "image": "https://kevincampos.com.br/kevin.png", "sameAs": [ "https://www.linkedin.com/in/kevinsouzacampos/", "https://github.com/kesc23/" ], "jobTitle": "Communications Analyst", "worksFor": { "@type": "Organization",   "name": "Teknisa" } } }</script>
</svelte:head>
<svelte:window bind:scrollY={y}></svelte:window>

<header style="box-shadow: 0px -95px 130px;">
    <div class="p-5 h-full" style="display: flex; flex-wrap: wrap; max-height: 100%; max-width: 1200px; width: 100%; margin-inline: auto;" id="nav">
        <h1>Kevin Campos (Kesc23)</h1>
        <h2 class="{hideonscroll}">Site em Construção</h2>
        <nav>
            <ul class="flex flex-wrap gap-2 p-[unset] m-[unset]">
                <li><a class="_menubtn dark:hover:!text-base-content" href="#projetos">Projetos</a></li>
                <li><a class="_menubtn dark:hover:!text-base-content" href="#sobremim">Sobre mim</a></li>
                <li><a class="_menubtn dark:hover:!text-base-content" href="#servicos">Serviços</a></li>
                <li><a class="_menubtn dark:hover:!text-base-content" href="/blog">Blog</a></li>
                <li><a class="_menubtn dark:hover:!text-base-content group" href="https://github.com/kesc23/"><svg class="fill-base-content dark:group-hover:fill-base-content group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a></li>
                <li><a class="_menubtn dark:hover:!text-base-content group" href="https://linkedin.com/in/kevinsouzacampos/"><svg class="fill-base-content dark:group-hover:fill-base-content group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a></li>
            </ul>
        </nav>
    </div>
</header>
<div id="cont">
    <div class="max-w-[1200px] mx-auto">
        <div id="projetos" class="section">
            <h2>Projetos</h2>
            <br><br>
            <br><br>
            <br><br>
        </div>
        <div id="sobremim" class="section">
            <h2>Sobre mim</h2>
        </div>
        <div id="servicos" class="section">
            <h2>Serviços</h2>
        </div>
    </div>
</div>

<style>
    ._menubtn {
        @apply btn btn-sm btn-outline border-blue-900;
        &:hover{
            @apply bg-blue-900 border-blue-900;
        }
    }
    header {
        @apply flex flex-col justify-center fixed w-full top-0 bg-base-100;
    }
</style>