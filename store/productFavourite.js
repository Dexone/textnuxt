import { defineStore } from 'pinia';

export const useFavourite = defineStore('favouriteStore', {
    state: () => ({ favourite: {}, simile: {} }),
    getters: {
        getFavourite: (state) => state.favourite,
        getSimile: (state) => state.simile
    },
    actions: {

    },
    persist: true
});
