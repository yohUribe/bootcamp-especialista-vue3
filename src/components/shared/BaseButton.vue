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
      default: 'button'
    }
  })
</script>

<template>
  <div>
    <button v-bind="$attrs" :type="type">{{label}}</button>
  </div>
</template>

<style scoped>

</style>