<script setup>

import { useRoute } from "vue-router";
import {onBeforeMount, ref} from "vue";
import {getHeroes} from "@/services/heroes";

const route = useRoute()

const heroe = ref(null)

onBeforeMount(async () => {
  const id = route.params.id

  const data = await getHeroes(id)

  heroe.value =  data
})

</script>

<template>
  <div class="container" v-if="heroe">
    <article>
      <header>
        <RouterLink :to="{name: 'home'}">Back</RouterLink>
        <h2>{{heroe.name}}</h2>
      </header>
      <img :src="heroe.image_screen_large_url" alt="">
    </article>
  </div>
</template>

<style scoped>

</style>