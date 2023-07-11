<script setup>
import {onBeforeMount, ref} from "vue"

import Header from "@/components/Header.vue"
import Heading from "@/components/Heading.vue"
import HeroList from "@/components/HeroList.vue"

import { fetchHerores } from "@/services/heroes"

const heroes = ref([])

const handlePage = async (value) => {
  console.log(value);

  heroes.value = await fetchHerores({page: value, limit: 5})
}

onBeforeMount(async () => {
  heroes.value = await fetchHerores()
})
</script>

<template>
  <Header/>
  <main class="container">
    <Heading title="Super Heroe" subtitle="¡Elije a tu super herore favorito!"/>
    <HeroList :heroes="heroes" @onPage="handlePage"/>
  </main>
</template>

<style scoped>
</style>
