<script>
    import { domain } from "$lib/variables";
    import NavButton from '$lib/NavButton.svelte';
    import "$lib/styles.css";
    let y = $state(0);
    let hideonscroll = $derived(y > 95 ? "hidden" : "");
</script>

<svelte:head>
    <link rel="canonical" href={domain + "/"} />
    <meta
        name="description"
        content="Sou Kevin Campos, desenvolvedor de software com mais de 5 anos de experiência. Trabalho com Python, integração de IA e LLMs, RAG, PyTorch e automação."
    />
    <script type="application/ld+json">
        {
            "@context": "https://schema.org/",
            "@type": "ProfilePage",
            "mainEntity": {
                "@type": "Person",
                "name": "Kevin Campos",
                "alternateName": [
                    "Kevin De Souza Campos",
                    "Kesc23"
                ],
                "url": "https://kevincampos.com.br",
                "image": "https://kevincampos.com.br/kevin.png",
                "sameAs": [
                    "https://www.linkedin.com/in/kevinsouzacampos/",
                    "https://github.com/kesc23/"
                ],
                "jobTitle": "AI Software Engineer",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Inter",
                    "alternateName": "Banco Inter",
                    "url": "https://inter.co/",
                    "description": "Plataforma digital de serviços financeiros com soluções bancárias, investimentos, crédito, seguros e marketplace."
                }
            }
        }
    </script>
    <title>Kevin Campos</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<header class="flex flex-col justify-center fixed w-full top-0 bg-base-100" style="box-shadow: 0px -95px 130px;">
    <div
        class="p-5 h-full"
        style="display: flex; flex-wrap: wrap; max-height: 100%; max-width: 1200px; width: 100%; margin-inline: auto;"
        id="nav"
    >
        <h1>Kevin Campos (Kesc23)</h1>
        <h2 class={hideonscroll}>Site em Construção</h2>
        <nav>
            <ul class="flex flex-wrap gap-2 p-[unset] m-[unset]">
                <NavButton link="#projetos" label="Projetos">Projetos</NavButton>
                <NavButton link="#sobremim" label="Sobre mim">Sobre mim</NavButton>
                <!-- <NavButton link="/blog" label="Blog">Blog</NavButton> -->
                <NavButton class="group" link="https://github.com/kesc23/" label="Github Kesc23">
                    <svg class="fill-base-content dark:group-hover:fill-base-content group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </NavButton>
                <NavButton class="group" link="https://linkedin.com/in/kevinsouzacampos/" label="Linkedin">
                    <svg class="fill-base-content dark:group-hover:fill-base-content group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </NavButton>
            </ul>
        </nav>
    </div>
</header>
<div id="cont">
    <div class="prose dark:prose-invert max-w-[1200px] mx-auto">
        <div id="projetos" class="section">
            <h2>Projetos</h2>
            <p>
                Da visão computacional aos agentes de IA, desenvolvo soluções que
                conectam tecnologia às tarefas do dia a dia. Estes são alguns dos
                projetos em que trabalhei:
            </p>
            <ul class="list-disc pl-6 space-y-3">
            <li>
                <strong>Detecção e reconhecimento facial:</strong>
                Na Teknisa, trabalhei em projetos de detecção e reconhecimento
                facial, com foco em inferência em tempo real e baixa latência.
            </li>
            <li>
                <strong>AI Voice:</strong>
                Participei da implementação de soluções de IA por voz na Teknisa
                para ajuste de inventário, requisição por serviço e pedidos,
                simplificando operações que antes dependiam de várias interações
                com o sistema.
            </li>
            <li>
                <strong>TekHelper:</strong>
                Trabalhei no TekHelper, um agente de suporte para os produtos
                Teknisa. Minha atuação com IA inclui integração de LLMs e RAG
                para conectar respostas ao conhecimento relevante de cada solução.
            </li>
            <li>
                <strong>SvelteKit Capacitor:</strong>
                Meu projeto pessoal para criar aplicativos híbridos com SvelteKit e
                CapacitorJS, com hot reloading para Android e iOS, aproximando
                o desenvolvimento web da experiência mobile.
            </li>
            </ul>
            <p>
                Conheça meus projetos e experimentos no
                <a class="link" href="https://github.com/kesc23/">GitHub</a>.
            </p>
        </div>
        <div id="sobremim" class="section">
            <h2>Sobre mim</h2>
            <p>
                Olá! Sou Kevin Campos, desenvolvedor de software em Belo Horizonte,
                com mais de cinco anos de experiência. Atualmente, atuo como
                Software Developer Analyst no Inter, com foco em Python,
                integração de IA e LLMs, RAG e PyTorch.
            </p>
            <p>
                Gosto de transformar processos trabalhosos em soluções simples de
                usar. Já coloquei em produção aplicações com visão computacional,
                IA generativa, APIs REST, gRPC e automações que, somadas,
                economizaram mais de 300 mil minutos de tarefas manuais.
            </p>
            <p>
                Minha trajetória passa pelo desenvolvimento web, mobile e pela
                comunicação. Trabalhei
                na Teknisa com soluções de software e inteligência artificial,
                onde recebi o Prêmio de Inovação e Inteligência em 2025 e conquistei
                o primeiro lugar no 3º Hackathon Teknisa, em 2023.
            </p>
            <p>
                Além de Python, trabalho com Kotlin, TypeScript, Node.js, Svelte,
                PHP, Laravel e bancos de dados como PostgreSQL e MySQL. Escolho
                as ferramentas de acordo com o problema, buscando entregar
                sistemas úteis, rápidos e fáceis de manter.
            </p>
        </div>
        <!--
        <div id="servicos" class="section">
            <h2>Serviços</h2>
        </div>
        -->
    </div>
</div>

