<script setup>
import {RouterLink, useRouter} from 'vue-router'
import {isAuthenticated} from "@/utils/auth";


const router = useRouter()
const handleLogout = () => {
  localStorage.removeItem('auth')

  router.push({name: 'login'})
}
</script>

<template>
  <nav class="container">
    <ul>
      <li>
        <strong>Listado de heroes con Vue 3</strong>
      </li>
    </ul>
    <ul>
      <li v-if="isAuthenticated()">
        <RouterLink to="/">
          Home
        </RouterLink>
      </li>
      <li v-if="!isAuthenticated()">
        <RouterLink to="login">
        Login
        </RouterLink>
      </li>
      <li v-if="!isAuthenticated()">
        <RouterLink to="register">
          Register
        </RouterLink>
      </li>
      <li v-if="isAuthenticated()">
        <button @click="handleLogout">
          Logout
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>