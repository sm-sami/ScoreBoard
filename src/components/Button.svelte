<script>
    export let buttonContent
</script>

{#if buttonContent}
    <button on:click>{buttonContent}</button>
{/if}

<style>
    button {
        padding: 7px 10px;
        margin: 5px;
        border-radius: 10px;
        border: none;
        background-color: var(--color-secondary);
        color: var(--text-color);
        font-weight: bold;
        height: min-content;
    }

    button:hover {
        cursor: pointer;
    }
</style>