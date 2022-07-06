import { writable } from "svelte/store";

const storedPlayers = JSON.parse(localStorage.getItem("ScoreBoard.players"));

export const PlayerStore = writable(storedPlayers ?? []);

PlayerStore.subscribe((players) => localStorage.setItem("ScoreBoard.players", JSON.stringify(players)));
