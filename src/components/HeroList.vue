<script setup>
import {ref} from "vue";

import IconsGenderNone from "@/components/icons/IconsGenderNone.vue";
import IconsGenderMale from "@/components/icons/IconsGenderMale.vue";
import IconsGenderFame from "@/components/icons/IconsGenderFame.vue";

const page = ref(1)
const limit = ref(5)
const count = ref(100)

defineProps({
  heroes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['onPage'])

const firstPage = () => {
  page.value = 1

  emit('onPage', page.value)
}

const nextPage = () => {
  page.value = page.value + 1

  if(page.value >= (count.value / limit.value)) return

  emit('onPage', page.value)
}
const previousPage = () => {
  page.value = page.value - 1

  if(page.value === 1) return

  emit('onPage', page.value)
}
const lastPage = () => {
  page.value = count.value / limit.value

  if(page.value === (count.value / limit.value)) return

  emit('onPage', page.value)
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
      <td><img :src="hero.image_screen_large_url" alt="" width="156" height="88"></td>
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

  <div class="pagination">
    <button @click="firstPage">First</button>
    <button @click="previousPage">Previous</button>
    <div>{{ page }} of {{ count / limit }}</div>
    <button @click="nextPage">Next</button>
    <button @click="lastPage">Last</button>
  </div>
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
.pagination {
  display: flex;
  gap:1rem;
}
</style>