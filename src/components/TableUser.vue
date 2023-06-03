<template>
    <div class="submissions" id="cartoesSubms">
      <div class="card-grid">
        <div v-for="(submission, index) in filteredSubmissions" :key="index" class="card">
          <div class="card-header">
            Submission {{ index + 1 }}
            <button @click="deleteSubmission(index)" class="delete-button">Delete</button>
          </div>
          <div class="card-body">
            <p><strong>Name:</strong> {{ submission.name }}</p>
            <p><strong>Email:</strong> {{ submission.email }}</p>
            <p><strong>Ideia de Projeto:</strong> {{ submission.ideaProjeto }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
    },
    computed: {
      filteredSubmissions() {
        const utilizadorAtivo = localStorage.getItem('utilizadorAtivo');
        if (utilizadorAtivo) {
          return this.formSubmissions.filter(submission => submission.name === utilizadorAtivo);
        }
        return [];
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
      deleteSubmission(index) {
        // Remove the submission at the specified index from the formSubmissions array
        this.formSubmissions.splice(index, 1);
  
        // Update the formSubmissions array in localStorage
        localStorage.setItem('formSubmissions', JSON.stringify(this.formSubmissions));
      }
    },
  };
  </script>
  
  <style>
  #cartoesSubms {
    font-size: 10px;
    height: fit-content;
    width: fit-content;
    font-family: "Roboto", Arial, sans-serif;
  }
  
  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  
  .card {
    /* Estilos do seu card */
  }
  
  .delete-button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  