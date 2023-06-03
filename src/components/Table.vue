<template>
  <div class="page-containerTable">
    <div class="submissions" id="cartoesSubms">
      <h1>Projetos sugeridos</h1>
      <div class="card-grid">
        <div v-for="(submission, index) in formSubmissions" :key="index" class="card" id="cartoesForms">
          <div class="card-header">
            Submission {{ index + 1 }}
          </div>
          <div class="card-body">
            <p><strong>Name:</strong> {{ submission.name }}</p>
            <p><strong>Email:</strong> {{ submission.email }}</p>
            <p><strong>Categoria:</strong> {{ submission.categoria }}</p>
            <p><strong>Ideia de Projeto:</strong> {{ submission.ideaProjeto }}</p>
          </div>
          <div class="card-footer">
            <button @click="likeSubmission(index)">Like</button>
            <span>Likes: {{ submission.likes }}</span>
            <button @click="dislikeSubmission(index)">Dislike</button>
            <span>Dislikes: {{ submission.dislikes }}</span>
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
  methods: {
    submitForm() {
      // Add the current form data to the formSubmissions array
      const newSubmission = {
        ...this.formData,
        likes: 0,
        dislikes: 0,
      };
      this.formSubmissions.push(newSubmission);

      // Store the updated formSubmissions array in localStorage
      localStorage.setItem('formSubmissions', JSON.stringify(this.formSubmissions));

      // Clear the form data
      this.formData.name = '';
      this.formData.email = '';
      this.formData.categoria = ''; // Clear categoria
      this.formData.ideaProjeto = '';
      
      // Update the formSubmissions array from localStorage
      this.formSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    },
    likeSubmission(index) {
      this.formSubmissions[index].likes++;
      this.updateLocalStorage();
    },
    dislikeSubmission(index) {
      this.formSubmissions[index].dislikes++;
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('formSubmissions', JSON.stringify(this.formSubmissions));
    },
  },
};
</script>

<style>
#cartoesSubms {
  font-size: 10px;
  height: fit-content;
  width: fit-content;
  
}

.card-grid {
  display: flex;
  flex-direction: column; /* Change to column layout */
  padding: 200px;

  max-width: 800px;
  box-sizing: border-box;
  grid-gap: 20px;
  margin-top: 40px;
  margin-bottom: 200px;
}





.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

h1 {

  align-items: center;
  color: #FF5D8F;

}

.page-containerTable {

  background-color: #FFFBF0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#cartoesForms{
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #FF5D8F; 
}




</style>
