<template>

    <link href='https://fonts.googleapis.com/css?family=Varela Round' rel='stylesheet'>

  <div class="page-containerForms">
    <div class="container">
      <p id="tituloForms" >Deixa aqui a tua sugestão!</p>
      <form @submit="submitForm">
        <div class="form-group">
          <label for="name">Nome:</label>
          <label id="name" class="form-control">{{ formData.name }}</label>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="text">Ideia:</label>
          <input type="text" class="form-control" id="ideia" v-model="formData.ideaProjeto" required>
        </div>
        <div class="form-group">
          <label for="categoria">Categorias:</label>
          <div class="checkbox-list">
            <label id="categoriasCheckbox" v-for="categoria in categorias" :key="categoria.id">
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
   // this.formSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];

    const utilizadorAtivo = localStorage.getItem('utilizadorAtivo');
    if (utilizadorAtivo) {
      this.formData.name = utilizadorAtivo;
    }

    this.fetchCategorias();
  },
  methods: {
    submitForm() {
      const utilizadorAtivo = localStorage.getItem('utilizadorAtivo');
  fetch('http://127.0.0.1:1337/api/users')
    .then(response => response.json())
    .then(users => {
      const matchingUser = users.find(user => user.username === utilizadorAtivo);

      if (matchingUser) {
        const projectData = {
          ideia: this.formData.ideaProjeto,
          email: this.formData.email,
          categorias: this.formData.categorias,
          users_permissions_user: matchingUser.id
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
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });

        this.formData.name = '';
        this.formData.email = '';
        this.formData.ideaProjeto = '';
        this.formData.categorias = [];
      } else {
        console.error(`User "${this.utilizadorAtivo}" not found.`);
      }
    })
    .catch(error => {
      console.error(error);
    });
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
  background-image: url("@/assets/images/1.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Varela Round';
  padding-left: 20px !important;
  padding-right: 20px !important;
  font-size: 13px;
}
body {
  font-family: 'Varela Round';
}

#tituloForms {
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #FF5D8F;
  z-index: 1;
  font-family: 'Varela Round';
  padding-top:10px;
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
}

#categoriasCheckbox{
font-weight: normal;
margin-right: 10px;
display: block;
flex-direction: column;
}


</style>
