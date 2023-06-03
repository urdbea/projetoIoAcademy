<template>
  <div class="navbar" :class="{ 'navbar-fixed': isNavbarFixed }">
    <div class="navbar-item" @click="navigate('home')" :class="{ active: isActive('home') }">
      <font-awesome-icon class="icon" icon="home" />
    </div>
    <div class="navbar-item" @click="navigate('feed')" :class="{ active: isActive('feed') }">
      <font-awesome-icon class="icon" icon="info-circle" />
    </div>
    <div class="navbar-item" @click="navigate('feedUser')" :class="{ active: isActive('feedUser') }">
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
      isNavbarFixed: false,
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
    },
    isActive(route) {
      return this.$route.name === route;
    },
  },
};
</script>

<style>
.navbar {
  justify-content: space-between;
  position: fixed;
  width: 100%;
  margin-top: 100% !important;
  z-index: 999;
  position: fixed !important;
  bottom: 0;
  background-color: #FFC8DD;
}

.navbar-item {
  cursor: pointer;
  padding: 5px 10px;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #545454;
}

.navbar-item.active {
  color: #FF5D8F;
}

.navbar-item .icon {
  font-size: 24px; /* Adjust the size as needed */
  margin-bottom: 5px; /* Add some spacing below the icon */
}



</style>


