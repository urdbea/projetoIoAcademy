<template>
    <div>
      <h1>Login</h1>
      <LoginForm @login-success="$emit('login-success')"></LoginForm>
    </div>
  </template>
  
  <script>
  import LoginForm from './LoginForm.vue';
  
  export default {
    components: {
      LoginForm,
    },
  };
  </script>
  