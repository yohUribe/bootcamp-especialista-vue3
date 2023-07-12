<script setup>
import {ref} from "vue";

import IconsGenderNone from "@/components/icons/IconsGenderNone.vue";
import IconsGenderMale from "@/components/icons/IconsGenderMale.vue";
import IconsGenderFame from "@/components/icons/IconsGenderFame.vue";

import Modal from "@/components/Modal.vue";

const isOpen = ref(false)
const heroSelected = ref({
  id: '',
  image_screen_large_url: '',
  name: '',
  real_name: '',
  aliases: '',
  birth: '',
  gender: ''
})

const props = defineProps({
  heroes: {
    type: Array,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})

const page = ref(1)
const limit = ref(5)

const emit = defineEmits(['onPage'])

const firstPage = () => {
  page.value = 1

  emit('onPage', page.value)
}
const nextPage = () => {

  if(page.value >= (props.count / limit.value)) return

  page.value = page.value + 1

  emit('onPage', page.value)
}
const previousPage = () => {
  if(page.value === 1) return

  page.value = page.value - 1

  emit('onPage', page.value)
}
const lastPage = () => {
  if(page.value === (props.count / limit.value)) return

  page.value = props.count / limit.value

  emit('onPage', page.value)
}
const handleIsOpen = (value) => {
  isOpen.value = value
}
const onOpenModal = (hero) => {
  isOpen.value = true
  heroSelected.value = hero
}
</script>

<template>
  <table role="grid">
    <thead>
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Name</th>
      <th>Gender</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="hero in heroes" :key="hero.id">
      <th>{{hero.id}}</th>
      <td @click="onOpenModal(hero)"><img :src="hero.image_screen_large_url" alt="" width="156" height="88"></td>
      <td>
        <div>{{hero.name}}</div>
        <div>Real name: {{hero.real_name}}</div>
        <div>Aliases: {{hero.aliases}}</div>
        <div v-if="hero.birth">Birth: {{hero.birth}}</div>
      </td>
      <td>
        <icons-gender-male v-if="hero.gender === 1" class="gender--male"/>
        <icons-gender-fame v-else-if="hero.gender === 2" class="gender--fame"/>
        <icons-gender-none v-else class="gender--none"/>
      </td>
    </tr>
    </tbody>
  </table>

  <div class="grid">
    <button @click="firstPage">First</button>
    <button @click="previousPage">Previous</button>
    <span>{{ page }} of {{ Math.round(count / limit) }}</span>
    <button @click="nextPage">Next</button>
    <button @click="lastPage">Last</button>
  </div>

  <Modal :hero="heroSelected" :isOpen="isOpen" @onIsOpen="handleIsOpen"></Modal>
</template>

<style scoped>

.gender--male {
  fill: #60a5fa;
}
.gender--fame {
  fill: #e560fa;
}
.gender--none {
  fill: #fa8960;
}

.grid span {
  margin-bottom: 19px;
  display: grid;
  justify-items: center;
  align-content: center;
}
</style>