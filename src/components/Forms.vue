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
          <select class="form-control" id="categoria" v-model="formData.categoria" required>
            <option value="">Seleciona uma Categoria</option>
            <option v-for="categoria in projeto.attributes.categorias.data" :key="categoria.id">
              {{ categoria.attributes.nome }}</option>
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
      formSubmissions: [] 
    };
  },
  created() {
    this.formSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];

    const utilizadorAtivo = localStorage.getItem('utilizadorAtivo');
    if (utilizadorAtivo) {
      this.formData.name = utilizadorAtivo;
    }

    const savedcategoria = localStorage.getItem('formDatacategoria');
    if (savedcategoria) {
      this.formData.categoria = savedcategoria;
    }
  },
  methods: {
    submitForm() {
      this.formSubmissions.push(this.formData);

      localStorage.setItem('formSubmissions', JSON.stringify(this.formSubmissions));

      localStorage.setItem('formDatacategoria', this.formData.categoria);

      this.formData.name = '';
      this.formData.email = '';
      this.formData.ideaProjeto = '';
      this.formData.categoria = '';
    },
    fetchData() {
      fetch('http://127.0.0.1:1337/api/projetos?populate=*')
        .then(response => response.json())
        .then(data => {
          this.projetos = data.data.filter(projeto => projeto.attributes.users_permissions_user.data.attributes.username === this.activeUser);
        })
        .catch(error => {
          console.error(error);
        });
    },
    mounted() {
    this.fetchData();
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
