<template>
  <link href='https://fonts.googleapis.com/css?family=Varela Round' rel='stylesheet'>
  <div class="page-container">
   
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
  
  <style>
  .page-container {
    margin: 0;
    padding: 0;
    background-image: url("@/assets/images/fundoLogin.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-family: 'Varela Round';
    align-items: center;
  }
  
  h1 {
    color: #ffffff;
    font-size: 24px;
    text-align: center;
    font-family: 'Varela Round' !important;
  }
</style>