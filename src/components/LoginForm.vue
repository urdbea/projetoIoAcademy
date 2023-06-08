<template>
  <div class="login-page">
    <h1 id="tituloLogin">Login</h1>
    <form class="login-form" @submit="submitForm">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
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

      const dadosUser = JSON.parse(localStorage.getItem('users'));
      if (!dadosUser) {
        console.error('User data not found in localStorage');
        return;
      }

      const matchingUser = dadosUser.find(
        (user) =>
          user.username === this.username && user.password === this.password
      );
      if (matchingUser) {
        localStorage.setItem('utilizadorAtivo', matchingUser.username);
        this.$emit('login-success');
      } else {
        alert('Invalid username or password');
      }
    },
  },
};
</script>

<style>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.form-group {
  margin-bottom: 10px;

}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #FFC8DD;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #FF5D8F;
}

button[type="submit"]:focus {
  outline: none;
}

/* Error message styles */
.error-message {
  color: #ff0000;
  font-size: 14px;
  margin-top: 5px;
}



#tituloLogin {
  align-items: center;
  color: #FF5D8F;
  margin-top: 60%;
}

.login-page {
  display: flex;
  flex-direction: column;
  /* Added this line */
  justify-content: center;
  align-items: center;
  height: 100%;
}


#tituloLogin {
  align-items: center;
  color: #FF5D8F;
  margin-top: 00%;
  font-family: 'Work Sans', sans-serif;
}
</style>

