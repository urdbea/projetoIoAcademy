<template>
  <div class="page-containerTable">
    <div class="submissions" id="cartoesSubms">
      <p id="tituloTable">Projetos sugeridos</p>
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
            <ul><li v-for="categoria in projeto.attributes.categorias.data" :key="categoria.id">{{ categoria.attributes.nome }}</li>            </ul>
          </div>
          <div class="card-footer">
            <button @click="likeSubmission(index)">Like</button>
            <span>Likes: {{ projeto.likes }}</span>
            <button @click="dislikeSubmission(index)">Dislike</button>
            <span>Dislikes: {{ projeto.dislikes }}</span>
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
      projetos: []
    };
  },
  methods: {
    fetchData() {
      fetch('http://127.0.0.1:1337/api/projetos?populate=*')
        .then(response => response.json())
        .then(data => {
          this.projetos = data.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>



<style>


#tituloTable {

  text-align: center;
  color: #FF5D8F;
font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  padding-top: 10%;
  font-size: x-large;
}

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
   background-color: #FFFBF0;
   align-items: flex-start; 
  padding-bottom: 1000px;
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




