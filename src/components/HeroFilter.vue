<script setup>
import { ref } from 'vue'
import BaseInput from "@/components/shared/BaseInput.vue";
import BaseSelect from "@/components/shared/BaseSelect.vue";

const query = ref('')
const filterByGender = ref('')

const emit = defineEmits(['onSearch', 'onFilter'])

const genderOptions = ref([
  {value:"1", label:"Male"},
  {value:"2", label:"Female"},
  {value:"0", label:"Other"},
])


</script>

<template>
  <div class="grid">
    <div>
      <BaseInput
          placeholder="Search by name"
          v-model="query"
          @keyup="emit('onSearch', query)"/>
    </div>
    <div>
      <BaseSelect @change="emit('onFilter', $event.target.value)" :options="genderOptions" v-model="filterByGender"/>
    </div>
  </div>
</template>