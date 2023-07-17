<script setup>
import {ref} from "vue";
import {createHeroe} from "@/services/heroes";

const formData = ref({
  name: '',
  real_name:'',
  gender:'',
  birth:'',
  aliases: 'aliases',
  deck: 'deck',
  image_screen_url: 'image_screen_url',
  image_screen_large_url: 'image_screen_large_url'
})

const handleForm = async (event) => {
  const newHero = {...formData.value}
  newHero.gender = Number(newHero.gender)

  const res = await createHeroe({form: newHero})
}

</script>

<template>
  <h2>New Hero</h2>
  <form @submit.prevent="handleForm">
    <label for="">
      Name
      <input type="text" placeholder="Ex. Spiderman" required v-model="formData.name">
    </label>
    <label for="">
      Real Name
      <input type="text" placeholder="Ex. Peter Parker" required v-model="formData.real_name">
    </label>
    <label for="">
      Gender
      <select v-model="formData.gender">
        <option value="1">Male</option>
        <option value="2">Female</option>
        <option value="0">Other</option>
      </select>
    </label>
    <label for="">
      Bith
      <input type="date" placeholder="Ex. Peter Parker" required v-model="formData.birth">
    </label>
    <button type="submit">Save</button>
  </form>
</template>

<style scoped>

</style>