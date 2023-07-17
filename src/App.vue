<script setup>
import {onBeforeMount, ref} from "vue"

import Header from "@/components/Header.vue"
import Heading from "@/components/Heading.vue"
import HeroList from "@/components/HeroList.vue"

import {fetchHeroes, fetchHeroesSearch, fetchHeroesLength} from "@/services/heroes"
import Form from "@/components/Form.vue";

const heroes = ref([])

const query = ref('')
const heroesTotal = ref([])
const heroesQuery = ref([])
const filterByGender = ref('')

const count = ref(0)

const handlePage = async (value) => {
  count.value = await fetchHeroesLength({gender: filterByGender.value})
  heroesTotal.value = await fetchHeroes({gender: filterByGender.value})
  heroesQuery.value = await fetchHeroesSearch({ page: value, limit: 5, gender: filterByGender.value })
  handleSearch(query.value);
}
const handleSearch = (value) => {
  query.value = value
  const consulta = value.toLowerCase().trim();
  if (consulta === '') {
    heroes.value = heroesQuery.value
  }else{
    heroes.value = heroesTotal.value.filter(obj => obj.name.toLowerCase().includes(consulta));
    count.value = 1
  }
}
const handleFilterByGender = async (value) => {
  filterByGender.value = value
  count.value = await fetchHeroesLength({ gender: filterByGender.value})
  heroesTotal.value = await fetchHeroes({gender: filterByGender.value})
  heroesQuery.value = await fetchHeroesSearch({ page: 1, limit: 5, gender: filterByGender.value})
  handleSearch(query.value);
}

onBeforeMount(async () => {
  count.value = await fetchHeroesLength()
  heroesTotal.value = await fetchHeroes()
  heroesQuery.value = await fetchHeroesSearch()
  handleSearch(query.value);
})
</script>

<template>
  <Header/>
  <main class="container-fluid">
    <Heading title="Super Heroe" subtitle="¡Elije a tu super herore favorito!" @onSearch="handleSearch" @onGender="handleFilterByGender"/>
    <div class="grid">
      <div><HeroList :heroes="heroes" @onPage="handlePage" :count="count"/></div>
      <div><Form></Form></div>
    </div>

  </main>
</template>

<style scoped>
</style>
