<template>
  <form @submit="submitForm">
    <label for="username">Username:</label>
    <input type="text" id="username" v-model="username">

    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password">

    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault();

      // Retrieve user data from localStorage
      const dadosUser = JSON.parse(localStorage.getItem('users'));
      if (!dadosUser) {
        console.error('User data not found in localStorage');
        return;
      }

      // Check if credentials match any user in the user data
      const matchingUser = dadosUser.find(
        (user) =>
          user.username === this.username && user.password === this.password
      );

      if (matchingUser) {
        // Save the active user to localStorage
        localStorage.setItem('utilizadorAtivo', matchingUser.username);

        this.$emit('login-success');
        // Perform any desired actions upon successful login
      } else {
        alert('Invalid username or password');
        // Perform any desired actions upon failed login
      }
    },
  },
};
</script>
