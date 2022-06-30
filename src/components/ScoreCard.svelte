<script>
    import Button from "./Button.svelte";
    import { PlayerStore } from "../stores";

    export let id = null;
    export let name = 'John Doe';
    export let points = 0;

    const addPoint = (id) => {
        const updatedPlayers = $PlayerStore.map((player) => {
            if (player.id === id) {
                return {...player, points: player.points += 1}
            }

            return player;
        });

        PlayerStore.update(() => [...updatedPlayers])
    }

    const removePoint = (id) => {
        const updatedPlayers = $PlayerStore.map((player) => {
            if (player.id === id) {
                return {...player, points: player.points -= 1}
            }

            return player;
        });

        PlayerStore.update(() => [...updatedPlayers])
    }
</script>

<div class="card">
    <h3 class="name">{name}</h3>
    <h1 class="points">{points}</h1>
    <div class="buttons">
        <Button buttonContent="&plus;" on:click={() => addPoint(id)} />
        <Button buttonContent="&minus;" on:click={() => removePoint(id)} />
    </div>
</div>

<style>
    .card {
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
    .points {
        background-color: var(--color-primary);
        font-size: 50px;
    }

    .buttons {
        background-color: var(--color-primary);
        display: flex;
        justify-content: center;
    }
</style>