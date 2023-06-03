<template>
   <div id="page-containere">
   <p id="tituloTableUser">Os teus projetos sugeridos</p>
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
            <p><strong>Categoria:</strong> {{ submission.categoria }}</p>
            <p><strong>Ideia de Projeto:</strong> {{ submission.ideaProjeto }}</p>
          </div>
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
        categoria: '', // Add categoria to formData
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
      this.formData.categoria = ''; // Clear categoria
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
    height: 100vh; /* Set the height to 100% of the viewport height */
    width: 100vw; /* Set the width to 100% of the viewport width */
    font-family: "Roboto", Arial, sans-serif;
  }
  
  


  .delete-button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  #page-containere {
background-color: #FFFBF0;
  }
 

  .submissions {
    position: relative;
  }
  
  #tituloTableUser {

    text-align: center;
    color: #FF5D8F;
font-size: larger;
font-weight: bold;
    font-family: 'Work Sans', sans-serif;
    padding-top: 10%;
  }
  


  .card-grid {
    display: flex;
    flex-direction: column; /* Change to column layout */
    padding: 20px;
    margin: 0 auto;
    max-width: 800px;
    box-sizing: border-box;
    grid-gap: 20px;
    margin-top: 40px;
    background-color: #FFFBF0;

  }
  
  .card {
    /* Styles for your card */
    margin-bottom: 20px; /* Add margin-bottom to create space between cards */
  }
  


  </style>
  