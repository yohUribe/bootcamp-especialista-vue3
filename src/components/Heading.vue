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

const emit = defineEmits(['onSearch'])

const onChange = () => {
  emit('onSearch', query.value)
}
</script>

<template>
    <div class="grid">
      <div class="headings">
        <h2>{{title}}</h2>
        <h3 v-if="subtitle">{{subtitle}}</h3>
      </div>
      <label for="search">
        Search
        <input type="text" id="search" name="search" placeholder="Ex. Name" v-model="query" @keyup="onChange">
      </label>
  </div>
</template>

<style scoped>

</style>