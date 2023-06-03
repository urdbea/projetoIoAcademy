<template>
    <div class="container">
      <h2>Add a Form</h2>
      <form @submit="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <label id="name" class="form-control">{{ formData.name }}</label>
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
  </template>
  
  <script>
  export default {
    props: {
      loggedInUsername: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        formData: {
          name: '',
          email: '',
          ideaProjeto: '',
        },
        formSubmissions: [], // Array to store all form submissions
      };
    },
    created() {
      // Load form submissions from localStorage on component initialization
      this.formSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
  
      // Set the name field to the value of the "utilizadorAtivo" key from localStorage
      const utilizadorAtivo = localStorage.getItem('utilizadorAtivo');
      if (utilizadorAtivo) {
        this.formData.name = utilizadorAtivo;
      }
    },
    methods: {
      submitForm() {
        // Add the current form data to the formSubmissions array
        this.formSubmissions.push(this.formData);
  
        // Store the updated formSubmissions array in localStorage
        localStorage.setItem('formSubmissions', JSON.stringify(this.formSubmissions));
  
        // Clear the form data
        this.formData.name = '';
        this.formData.email = '';
        this.formData.ideaProjeto = '';
      },
    },
  };
  </script>
  
  <style>
  /* Component-specific styles go here */
  </style>
  