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
          <label for="categoria">Categoria</label>
          <div class="checkbox-list">
            <label v-for="categoria in categorias" :key="categoria.id">
              <input type="checkbox" v-model="formData.categorias" :value="categoria.id">
              {{ categoria.attributes.nome }}
            </label>
          </div>
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
        categorias: []  
      },
      formSubmissions: [],
      categorias: []
    };
  },
  created() {
    this.formSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];

    const utilizadorAtivo = localStorage.getItem('utilizadorAtivo');
    if (utilizadorAtivo) {
      this.formData.name = utilizadorAtivo;
    }

    this.fetchCategorias();
  },
  methods: {
    submitForm() {
      const projectData = {
        ideia: this.formData.ideaProjeto,
        email: this.formData.email,
        categorias: this.formData.categorias
      };

      fetch('http://127.0.0.1:1337/api/projetos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: projectData })
      })
        .then(response => response.json())
        .then(data => {
          // Handle the API response if needed
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });

      // Reset form data
      this.formData.name = '';
      this.formData.email = '';
      this.formData.ideaProjeto = '';
      this.formData.categorias = [];
    },

    fetchCategorias() {
      fetch('http://127.0.0.1:1337/api/categorias')
        .then(response => response.json())
        .then(data => {
          this.categorias = data.data;
        })
        .catch(error => {
          console.error(error);
        });
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
