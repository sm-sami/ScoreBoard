<script>
    import AddPlayer from "./AddPlayer.svelte";
    import ScoreCard from "./ScoreCard.svelte";
    import { PlayerStore } from "../stores";

    $: playerCount = $PlayerStore.length
</script>

<main>
    <AddPlayer />
    {#if playerCount > 0}
        <div class="cards">
            {#each $PlayerStore as player (player.id)}
                <ScoreCard name={player.name} points={player.points} id={player.id} />
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
        margin: 30px 0 80px;
        display: grid;
        justify-items: center;
        row-gap: 20px;
    }

    .info {
        display: flex;
        height: 80vh;
        font-size: 12px;
        color: var(--text-color);
        justify-content: center;
        align-items: center;
    }

    .info span {
        font-weight: bold;
        background-color: var(--color-secondary);
        padding: 7px 10px;
        margin: 5px;
        border-radius: 10px;
    }

    @media (min-width: 768px) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 60px;
        }

        .info {
            font-size: 15px;
        }

        .info span {
            font-size: 12px;
        }
    }

    @media (min-width:1024px) {
        .cards {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width:1440px) {
        .cards {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>