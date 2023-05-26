<template>
    <head>
      <link rel="stylesheet" href="path/to/bootstrap.css">
    </head>
  
    <body>
      <div class="container">
        <h2>Add a Form</h2>
        <form @submit="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" v-model="formData.email" required>
          </div>
          <div class="form-group">
            <label for="text">Ideia de Projeto:</label>
            <input type="text" class="form-control" id="ideia" v-model="formData.ideaProjeto" required>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  
      <div class="navbar navbar-fixed-bottom">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
  
    </body>
  </template>
  
  <script>
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });
  
  export default {
    data() {
      return {
        isNavbarOpen: false,
        formData: {
          name: '',
          email: '',
          ideaProjeto: '',
        }
      };
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      },
      submitForm() {
        // Save form data to local storage
        localStorage.setItem('formData', JSON.stringify(this.formData));
  
        // Clear the form
        this.formData.name = '';
        this.formData.email = '';
        this.formData.ideaProjeto = '';
      },
    },
  };
  </script>
  
  <style>
  /* Styling for the navbar */
  .navbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 15px;
  }
  
  /* Styling for the navbar links */
  .navbar a {
    color: #fff;
    text-decoration: none;
    margin-right: 15px;
  }
  </style>
  