<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PaginaInicial  from './views/PaginaInicial.vue';
import NavBar from './components/NavBar.vue'
</script>

<template>

  <RouterView /> 
  <NavBar/>
</template>

<style scoped>
.container{
  color:green;
}
</style>
