<script setup>
  defineOptions({
    inheritAttrs: false
  })
  defineProps({
    label:{
      type: String,
      default: ''
    },
    options:{
      type: Array,
      default: []
    },
    modelValue:{
      type: [String],
      default: ''
    }
  })
</script>

<template>
  <label for="">
    {{label}}
    <select v-bind="$attrs"
            @change="$emit('update:modelValue', $event.target.value)">
      <option value="">Select a {{label}}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{option.label}}</option>
    </select>
  </label>
</template>

<style scoped>

</style>