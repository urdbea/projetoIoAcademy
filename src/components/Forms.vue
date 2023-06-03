<template>
  <div class="page-containerForms">
    <div class="container">
      <h2>Deixa aqui a tua sugestão!</h2>
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
        <div class="form-group">
          <label for="categoria">Categoria:</label>
          <select id="categoria" class="form-control" v-model="formData.categoria" required>
            <option value="">Selecione uma opção</option>
            <option value="educação">Educação</option>
            <option value="arte">Arte</option>
            <option value="ciência">Ciência</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="desporto">Desporto</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
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
        categoria: ''
      },
      formSubmissions: [] // Array to store all form submissions
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

    // Set the categoria field to the value of the "formDatacategoria" key from localStorage
    const savedcategoria = localStorage.getItem('formDatacategoria');
    if (savedcategoria) {
      this.formData.categoria = savedcategoria;
    }
  },
  methods: {
    submitForm() {
      // Add the current form data to the formSubmissions array
      this.formSubmissions.push(this.formData);

      // Store the updated formSubmissions array in localStorage
      localStorage.setItem('formSubmissions', JSON.stringify(this.formSubmissions));

      // Save the categoria value in localStorage
      localStorage.setItem('formDatacategoria', this.formData.categoria);

      // Clear the form data
      this.formData.name = '';
      this.formData.email = '';
      this.formData.ideaProjeto = '';
      this.formData.categoria = '';
    }
  }
};
</script>

<style>
.page-containerForms {
  margin: 0;
  padding: 0;
  background-image: url("@/assets/images/fundoTudo.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

h2 {
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #FF5D8F;
  z-index: 1;
  font-family: Arial, sans-serif;
}
</style>
