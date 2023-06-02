<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Table from './components/Table.vue'
import PaginaInicial  from './views/PaginaInicial.vue';
</script>

<template>
  <Table/>
  <NavBar/>
  <!--<RouterView /> -->
</template>

<style scoped>
.container{
  color:green;
}
</style>
