<script setup>
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import axios from 'axios';
import { useFavourite } from '../../store/productFavourite';

const favouriteStore = useFavourite();
console.log(favouriteStore)
defineProps({
  msg: String,
})




</script>

<template>

  <button @click="getDataCarts()">test</button>

</template>
