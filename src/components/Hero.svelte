<script>
    import AddPlayer from "./AddPlayer.svelte";
    import ScoreCard from "./ScoreCard.svelte";
    import {PlayerStore} from "../stores";

    $: playerCount = $PlayerStore.length
</script>

<main>
    <AddPlayer />
    {#if playerCount > 0}
        <div class="cards">
            {#each $PlayerStore as player}
                <ScoreCard name={player.name} points={player.points}/>
            {/each}
        </div>
    {:else}
        <div class="info">Click <span>&plus; Add Player</span> to create a new player</div>
    {/if}
</main>

<style>
    main {
        padding: 20px;
    }

    .cards {
        margin: 0 100px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .info {
        display: flex;
        height: 80vh;
        color: var(--text-color);
        justify-content: center;
        align-items: center;
    }

    .info span {
        font-weight: bold;
        font-size: 12px;
        background-color: var(--color-secondary);
        padding: 7px 10px;
        margin: 5px;
        border-radius: 10px;
    }
</style>