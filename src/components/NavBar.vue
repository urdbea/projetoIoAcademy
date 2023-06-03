<template>
  <div class="navbar" :class="{ 'navbar-fixed': isNavbarFixed }">
    <div class="navbar-item" @click="navigate('home')">
      <font-awesome-icon class="icon" icon="home" />
    </div>
    <div class="navbar-item" @click="navigate('feed')">
      <font-awesome-icon class="icon" icon="info-circle" />
    </div>
    <div class="navbar-item" @click="navigate('feedUser')">
      <font-awesome-icon class="icon" icon="envelope" />
    </div>
    <div v-if="isLoggedIn" class="navbar-item" @click="handleLogout">
      <font-awesome-icon class="icon" icon="sign-out-alt" />
    </div>
  </div>
</template>



<script>
export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
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
      this.$router.push({ name: route });
    },
    handleLogout() {
      this.$emit('logout');
    }
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
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.navbar-item:hover {
  color:   #f3954f;
}

.navbar-item .icon {
  font-size: 24px; /* Adjust the size as needed */
  margin-bottom: 5px; /* Add some spacing below the icon */
}



</style>


