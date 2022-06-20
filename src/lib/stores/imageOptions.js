import { writable } from "svelte/store";

export const imageOptions = writable({
  isMale: true,
  isShiny: false,
  isFront: true
});
