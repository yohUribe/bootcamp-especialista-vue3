<script setup>
  defineOptions({
    inheritAttrs: false
  })

  defineProps({
    label:{
      type: String,
      default: ''
    },
    type:{
      type: String,
      default: 'text'
    },
    placeholder:{
      type: String,
      default: ''
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
    <input
        v-bind="$attrs"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<style scoped>

</style>