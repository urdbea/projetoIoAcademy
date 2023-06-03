<template>
  <div class="submissions" id="cartoesSubms">
    <div class="card-grid">
      <div v-for="(submission, index) in formSubmissions" :key="index" class="card">
        <div class="card-header">
          Submission {{ index + 1 }}
        </div>
        <div class="card-body">
          <p><strong>Name:</strong> {{ submission.name }}</p>
          <p><strong>Email:</strong> {{ submission.email }}</p>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;
}

.card {
  /* Estilos do seu card */
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
</style>
