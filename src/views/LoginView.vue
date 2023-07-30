<script setup>

import BaseButton from "@/components/shared/BaseButton.vue";
import BaseInput from "@/components/shared/BaseInput.vue";
import {ref} from "vue";

import { loginUser } from '@/services/auth.js'

import { createToaster } from "@meforma/vue-toaster";

import {useRouter} from "vue-router";

const toaster = createToaster();

const router = useRouter()

const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  try {
    const { password, email } = form.value

    const response = await loginUser({ email, password })

    const data = await response.json()

    if (response.ok && data.length === 1){
      localStorage.setItem('auth', true)

      router.push({ name: 'home'})

      toaster.success('User login successfully!')
    }
  }catch (err) {
    console.error(err)
    toaster.error('Something is wrong!')
    router.push({ name: 'login'})
  }
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

        <form action="" @submit.prevent="handleLogin">
          <BaseInput label="Email" type="email" name="email" placeholder="Email" v-model="form.email" required/>
          <BaseInput label="Password" type="password" name="password" placeholder="Password" v-model="form.password" required/>
          <BaseButton type="submit" class="contrast" label="Login"/>
        </form>
      </div>
      <div></div>
    </article>
  </div>
</template>

<style scoped>

</style>