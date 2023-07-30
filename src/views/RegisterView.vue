<script setup>
import BaseInput from "@/components/shared/BaseInput.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import {ref} from "vue";

import { registerUser } from '@/services/auth.js'

import { createToaster } from "@meforma/vue-toaster";

import {useRouter} from "vue-router";

const toaster = createToaster();

const router = useRouter()

const form = ref({
  fullname: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = () => {
  const {fullname, email, password,confirmPassword } = form.value

  registerUser({ fullname, email, password })
      .then(response => {
        if (response.ok){
          router.push({ name: 'login'})
          toaster.success('User save successfully!')
        }
      }).catch( err => {
        console.error(err)
        toaster.error('Something is wrong!')
      })
  console.log(form.value)
}
</script>

<template>
<div class="container">
  <article class="grid mt-100">
    <div></div>
    <div>
      <hgroup>
        <h1>Register</h1>
        <h2>Ingresa tus datos para registrarse</h2>
      </hgroup>

      <form action="" @submit.prevent="handleRegister">
        <BaseInput label="Fullname" name="fullname" placeholder="Fullname" required v-model="form.fullname"/>
        <BaseInput label="Email" type="email" name="email" placeholder="Email" v-model="form.email" required/>
        <BaseInput label="Paswword" type="password" name="paswword" placeholder="Paswword" v-model="form.password" required/>
        <BaseInput label="Confirma Paswword" type="password" name="confirmPaswword" placeholder=" ConfirmPaswword" v-model="form.confirmPassword" required/>
        <BaseButton type="submit" class="contrast" label="Login"/>
      </form>
    </div>
    <div></div>
  </article>
</div>
</template>

<style scoped>
.mt-100 {
  margin-top: 10px;
}
</style>