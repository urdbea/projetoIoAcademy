<template>
  <div id="page-containere">
    <p id="tituloTableUser">Os teus projetos sugeridos</p>
    <div class="submissions" id="cartoesSubms">
      <div class="card-grid">
        <div v-for="(projeto, index) in projetos" :key="index" class="card" id="cartoesForms">
          <div class="card-header">
            Submission {{ index + 1 }}
          </div>
          <div class="card-body">
            <p id="nomeUser"><strong>Name:</strong> {{ projeto.attributes.users_permissions_user.data.attributes.username }}</p>
            <p id="emailUser"><strong>Email:</strong> {{ projeto.attributes.email }}</p>
            <p id="ideiaProjeto"><strong>Ideia de Projeto:</strong> {{ projeto.attributes.ideia }}</p>
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
      projetos:[]
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
  /* Set the height to 100% of the viewport height */
  width: 100vw;
  /* Set the width to 100% of the viewport width */
  font-family: "Roboto", Arial, sans-serif;
}

#cartoesForms{
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #FF5D8F; 
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
  flex-direction: column;
  /* Change to column layout */
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
  box-sizing: border-box;
  grid-gap: 20px;

  background-color: #FFFBF0;

}

.card {
  /* Styles for your card */
  margin-bottom: 20px;
  /* Add margin-bottom to create space between cards */
}
</style>
  