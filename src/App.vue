<template>
  <div id="app">
    <template v-if="isLoggedIn">
      <RouterView /> 
      <NavBar :isLoggedIn="isLoggedIn" @logout="handleLogout" /> 
    </template>
    <template v-else>
      <Login @login-success="handleLoginSuccess"></Login>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import Login from './components/Login.vue';

const isLoggedIn = ref(!!localStorage.getItem('isLoggedIn'));

function handleLoginSuccess() {
  isLoggedIn.value = true;
  localStorage.setItem('isLoggedIn', true);
}

function handleLogout() {
  isLoggedIn.value = false;
  localStorage.removeItem('isLoggedIn');
  // Navigate to the login route
  this.$router.push('/login');
}
</script>

<style scoped>
.container {
  color: green;
}
</style>
