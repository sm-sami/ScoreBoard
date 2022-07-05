<script>
    import { AddPlayer, Button } from "./";
    import { PlayerStore } from "../stores";

    const resetStore = () => {
        PlayerStore.update(() => []);
    }
</script>

<nav>
    <AddPlayer />
    <Button buttonContent="New Game" on:click={resetStore}/>
</nav>

<style>
    nav {
        display: flex;
        padding: 20px 10px 0;
        justify-content: space-between;
    }
    
    @media (min-width: 768px) {
        nav {
            padding: 20px 50px 0;
        }
    }
</style>