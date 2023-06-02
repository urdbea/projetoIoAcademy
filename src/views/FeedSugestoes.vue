<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
    <main>
        <NavBar/>
      </main>
    <div class="feed">
      <div v-for="item in feedItems" :key="item.id" class="feed-item">
        <!-- Content of each feed item -->
      </div>
    </div>
  </template>

  <style>
.feed {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Gap between feed items */
}

.feed-item {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
<script>
export default {
  data() {
    return {
      feedItems: [
        { id: 1, title: 'First item', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Second item', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        // Add more feed items...
      ]
    };
  }
};
</script>
