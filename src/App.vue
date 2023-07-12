<script setup>
import {onBeforeMount, ref} from "vue"

import Header from "@/components/Header.vue"
import Heading from "@/components/Heading.vue"
import HeroList from "@/components/HeroList.vue"

import {fetchHeroes, fetchHeroesSearch} from "@/services/heroes"

const heroes = ref([])

const query = ref('')

const count = ref(0)

const handlePage = async (value) => {
  heroes.value = await fetchHeroesSearch({ page: value, limit: 5, name: query.value})
}
const handleSearch = async (value) => {
  query.value = value
  count.value = await fetchHeroes({name: value})
  heroes.value = await fetchHeroesSearch({ page: 1, limit: 5, name: value})
}

onBeforeMount(async () => {
  count.value = await fetchHeroes()
  heroes.value = await fetchHeroesSearch()
})
</script>

<template>
  <Header/>
  <main class="container">
    <Heading title="Super Heroe" subtitle="¡Elije a tu super herore favorito!" @onSearch="handleSearch"/>
    <HeroList :heroes="heroes" @onPage="handlePage" :count="count"/>
  </main>
</template>

<style scoped>
</style>
