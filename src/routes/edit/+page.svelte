<svelte:head>
    <script src="/md-editor/simplemde.min.js"></script>
</svelte:head>

<script lang="ts">
    import { onMount } from "svelte";
    import './preview.css';
    import './simplemde.min.css';
    import EditForm from "./components/EditForm.svelte";

    type MarkdownEditor = {
        value(): string;
        codemirror: { on(event: string, callback: () => void): void };
        toTextArea(): void;
    };
    let simplemde: MarkdownEditor | undefined;
    let editorCanvas = $state<HTMLTextAreaElement>();
    let post = $state({ content: '' });

    onMount( () => {
        const interval = setInterval( () => {
            const Editor = (window as Window & {
                SimpleMDE?: new (options: Record<string, unknown>) => MarkdownEditor;
            }).SimpleMDE;
            if (!Editor || !editorCanvas) return;
            const editor = new Editor( {
                element: editorCanvas,
                spellChecker: false,
                renderingConfig: {
                    singleLineBreaks: false,
                    codeSyntaxHighlighting: true,
                },
            } )
            simplemde = editor;
            editor.codemirror.on("change", () => post.content = editor.value() );
            clearInterval( interval );
        } )
        return () => {
            clearInterval(interval);
            simplemde?.toTextArea();
        };
    });
</script>

<div class="flex justify-center w-full h-full">
    <div class="grid grid-cols-6 w-full max-w-[1200px]">
        <div class="col-span-4 px-2 py-5">
            <textarea id="editor" bind:this={editorCanvas}></textarea>
        </div>
        <div class="col-span-2 py-5 px-4">
            <EditForm bind:post />
        </div>
    </div>
</div>
