<script>
    import Button from "./Button.svelte";

    export let name = 'John Doe'
    export let points = 0

    const addPoint = () => points += 1;
    const removePoint = () => points -= 1;
</script>

<div class="card">
    <h3 class="name">{name}</h3>
    <h1 class="point">{points}</h1>
    <div class="buttons">
        <Button buttonContent="&plus;" on:click={addPoint} />
        <Button buttonContent="&minus;" on:click={removePoint} />
    </div>
</div>

<style>
    .card {
        margin: 50px 100px;
        padding: 10px 20px 20px;
        background-color: var(--color-primary);
        color: var(--text-color);
        display: flex;
        text-align: center;
        flex-direction: column;
        gap: 40px;
        border-radius: 20px;
        width: 170px;
    }

    .name {
        padding-top: 20px;
        background-color: var(--color-primary);
    }
    .point {
        background-color: var(--color-primary);
        font-size: 50px;
    }

    .buttons {
        background-color: var(--color-primary);
        display: flex;
        justify-content: center;
    }
</style>