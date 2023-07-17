<script setup>
import {ref} from "vue";

defineProps({
  title:{
    type: String,
    required: true
  },
  subtitle:{
    type: String,
    required: false
  }
})

const query = ref('')
const filterByGender = ref('')

const emit = defineEmits(['onSearch','onGender'])

const onChange = () => {
  emit('onSearch', query.value)
}
const onFilterByGender = () => {
  emit('onGender', filterByGender.value)
}
</script>

<template>
      <div class="headings">
        <h2>{{title}}</h2>
        <h3 v-if="subtitle">{{subtitle}}</h3>
      </div>
    <div class="grid">
      <div>
        <label for="search">
          Search
          <input type="text" id="search" name="search" placeholder="Ex. Name" v-model="query" @keyup="onChange">
        </label>
      </div>
      <div>
        <label for="search">
          Gender
          <select  v-model="filterByGender" @change="onFilterByGender">
            <option value="" selected>Todos</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="0">Other</option>
          </select>
        </label>
      </div>
    </div>
</template>

<style scoped>

</style>