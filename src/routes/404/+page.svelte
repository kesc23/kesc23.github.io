<svelte:head>
    <link rel="preload" href="https://unpkg.com/">
    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
</svelte:head>
<div class="flex flex-col h-full w-full max-w-full justify-center items-center">
    <span class="prose select-none">
        <h1 class="text-6xl">Oops!</h1>
    </span>
    <dotlottie-player src="https://lottie.host/9d3f2848-56e7-4f49-8cf6-2444c4178431/0BTsFP6bKD.lottie" background="transparent" speed="1" class="h-[min(calc(var(--dimm)-200px),100vw)] w-[min(100vw,var(--dimm))]" style="--dimm: 600px" loop autoplay></dotlottie-player>
    <a href="/" class="btn btn-lg btn-info">Home</a>
</div>