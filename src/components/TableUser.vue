<template>
  <link href='https://fonts.googleapis.com/css?family=Varela Round' rel='stylesheet'>
 
  <div id="page-containere">
    <p id="tituloTableUser">Os teus projetos sugeridos</p>
    <div class="submissions" id="cartoesSubms">
      <div class="card-grid">
        <div v-for="(projeto, index) in projetos" :key="index" class="card" id="cartoesForms">
          <div class="card-header">
            Sugestão Nº {{ index + 1 }}
            <button class="delete-button" @click="deleteProject(index)">Delete</button>
          </div>
          <div class="card-body">
            <p id="nomeUser"><strong>Nome:</strong> {{ projeto.attributes.users_permissions_user.data.attributes.username
            }}</p>
            <p id="emailUser"><strong>Email:</strong> {{ projeto.attributes.email }}</p>
            <p id="ideiaProjeto"><strong>Ideia:</strong> {{ projeto.attributes.ideia }}</p>
            <p><strong>Categorias:</strong></p>
            <ul>
              <li v-for="categoria in projeto.attributes.categorias.data" :key="categoria.id">
                {{ categoria.attributes.nome }}
              </li>
            </ul>
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
      activeUser: '',
      projetos: []
    };
  },
  created() {
    this.activeUser = localStorage.getItem('utilizadorAtivo');
    this.fetchData();
  },
  methods: {
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
    deleteProject(index) {
      const projectId = this.projetos[index].id;
      const deleteURL = `http://127.0.0.1:1337/api/projetos/${projectId}`;

      fetch(deleteURL, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => {
          this.projetos.splice(index, 1);
        })
        .catch(error => {
          console.error(error);
        });
    },
    mounted() {
      this.fetchData();
    }
  }
}
</script>


<style>
#cartoesSubms {
  font-size: 10px;
  height: 100vh;
  width: 100vw;
  font-family: 'Varela Round' !important;
}

#cartoesForms {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #FF5D8F;
  font-family: 'Varela Round' !important;
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
  font-weight: bold;
  font-family: 'Varela Round';
  padding-top: 10%;
  font-size: x-large;
}



.card-grid {
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;
  grid-gap: 20px;
  padding-bottom: 80px !important;
  background-color: #FFFBF0;
  font-family: 'Varela Round' !important;
}

.card {
  background-color: #FFFBF0 !important;
  margin-bottom: 20px;
}

.delete-button {
  background-color: transparent;
  color: #FF5D8F;
  border: none;
  padding: 0;
  cursor: pointer;
  float: right;
  margin-right: 10px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 10px;
  background-color: #FFFBF0;
  border-bottom: 2px solid #FF5D8F;
}

body {
  font-family: 'Varela Round';
}
</style>
  