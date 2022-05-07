<script>
    import Button from "./Button.svelte";
    import {PlayerStore} from "../stores";

    let isAddPlayerButtonPressed = false;
    let player = {
        name: "",
        points: 0
    };

    const showCreateNewPlayerForm = () => {
        isAddPlayerButtonPressed = !isAddPlayerButtonPressed;
    }

    const createNewPlayer = () => {
        PlayerStore.update((currentPlayers) => {
            return [{name: player.name, points: player.points}, ...currentPlayers]
        });
        isAddPlayerButtonPressed = !isAddPlayerButtonPressed;
    }
</script>

{#if !isAddPlayerButtonPressed}
    <Button buttonContent="&plus; Add Player" on:click={showCreateNewPlayerForm} />
{:else}
    <form on:submit={createNewPlayer}>
        <input type="text" placeholder="Player Name" required bind:value={player.name}>
        <input type="number" placeholder="Points" bind:value={player.points}>
        <input type="submit" value="Add Player">
    </form>
{/if}

<style>
    form > input {
        padding: 7px 10px;
        margin: 5px;
        border-radius: 10px;
        border: none;
        background-color: var(--color-primary);
        color: var(--text-color);
        font-weight: bold;
    }
</style>