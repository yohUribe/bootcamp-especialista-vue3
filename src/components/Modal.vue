<script setup>
defineProps({
  isOpen:{
    type: Boolean,
    required: true
  },
  hero: {
    type: Object,
    required: true
  },
})

const emit = defineEmits(['onIsOpen'])

const onClose = () => {
  emit('onIsOpen', false)
}
</script>

<template>
  <dialog :open="isOpen">
    <article>
      <h3>{{hero.name}}</h3>
      <p>
        <slot></slot>
<!--        <img :src="hero.image_screen_large_url" alt="">-->
      </p>
      <footer>
        <a href="#cancel" role="button" class="secondary" @click="onClose">Cerrar</a>
      </footer>
    </article>
  </dialog>
</template>

<style scoped>

</style>