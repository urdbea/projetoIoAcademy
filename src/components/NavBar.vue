<template>
  <div class="navbar" :class="{ 'navbar-fixed': isNavbarFixed }">
    <div class="navbar-item" @click="navigate('home')">
      Home
    </div>
    <div class="navbar-item" @click="navigate('feed')">
      About
    </div>
    <div class="navbar-item" @click="navigate('contact')">
      
      Contact
    </div>
  
  </div>


</template>

<script>
export default {
  data() {
    return {
      isNavbarFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    navigate(route) {
      this.$router.push(`/${route}`);
    },
  }
};
</script>

<style>
.navbar {
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background-color: #f0f0f0;
  margin-top: 100% !important;
  z-index: 999;
  position: fixed !important;
  bottom: 0;
}

.navbar-item {
  cursor: pointer;
  padding: 5px 10px;
  color: #333;
  font-weight: bold;
}

.navbar-item:hover {
  background-color: #ddd;
}

</style>
