
<template>
  <link href='https://fonts.googleapis.com/css?family=Varela Round' rel='stylesheet'>
  <div class="page-containerTable">
    <div class="submissions" id="cartoesSubms">
      <p id="tituloTable">Projetos sugeridos</p>
      <div class="card-grid">
        <div v-for="(projeto, index) in projetos" :key="index" class="card" id="cartoesForms">
          <div class="card-header">
            Sugestão Nº {{ index + 1 }}
          </div>
          <div class="card-body">
            <p id="nomeUser"><strong>Nome:</strong> {{ projeto.attributes.users_permissions_user.data.attributes.username
            }}</p>
            <p id="emailUser"><strong>Email:</strong> {{ projeto.attributes.email }}</p>
            <p id="ideiaProjeto"><strong>Ideia:</strong> {{ projeto.attributes.ideia }}</p>
            <p><strong>Categorias:</strong></p>
            <ul>
              <li v-for="categoria in projeto.attributes.categorias.data" :key="categoria.id">{{ categoria.attributes.nome
              }}</li>
            </ul>
          </div>
          <div class="card-footer">
            <button id="btnLikes" @click="likeSubmission(index)">Like</button>
            <span id="numLikes"> {{ getLikes(projeto.id) }}</span>
            <button id="btnDislikes" @click="dislikeSubmission(index)">Dislike</button>
            <span id="numDislikes"> {{ getDislikes(projeto.id) }}</span>
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
      projetos: [],
    };
  },
  methods: {
    fetchData() {
      fetch('http://127.0.0.1:1337/api/projetos?populate=*')
        .then((response) => response.json())
        .then((data) => {
          this.projetos = data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    likeSubmission(index) {
      const projeto = this.projetos[index];
      const likes = this.getLikes(projeto.id) + 1;
      localStorage.setItem(`likes_${projeto.id}`, likes.toString());
    },
    dislikeSubmission(index) {
      const projeto = this.projetos[index];
      const dislikes = this.getDislikes(projeto.id) + 1;
      localStorage.setItem(`dislikes_${projeto.id}`, dislikes.toString());
    },
    getLikes(projetoId) {
      return parseInt(localStorage.getItem(`likes_${projetoId}`)) || 0;
    },
    getDislikes(projetoId) {
      return parseInt(localStorage.getItem(`dislikes_${projetoId}`)) || 0;
    },
  },
  computed: {
    updatedProjetos() {
      return this.projetos.map((projeto) => {
        return {
          ...projeto,
          likes: this.getLikes(projeto.id),
          dislikes: this.getDislikes(projeto.id),
        };
      });
    },
  },
  mounted() {
    this.fetchData();
    setInterval(() => {
      this.fetchData();
    }, 1000);
  },
};
</script>


<style>
body {
  font-family: 'Varela Round';
}

#tituloTable {

  text-align: center;
  color: #FF5D8F;
  font-weight: bold;
  font-family: 'Varela Round';
  padding-top: 10%;
  font-size: x-large;
}

#cartoesSubms {
  font-size: 10px;
  height: fit-content;
  width: fit-content;
  font-family: 'Varela Round';
}

.card-grid {
  display: flex;
  flex-direction: column;
  padding: 200px;
  max-width: 900px;
  box-sizing: border-box;
  grid-gap: 20px;
  padding-bottom: 80px !important;
}



.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.card-header {
  align-items: center;
  color: #FF5D8F !important;
  font-size: 12px;
}

#btnLikes {
  border: 2px solid #FF5D8F;
  border-radius: 4px;
  background-color: transparent;
  color: #FF5D8F;
  padding: 3px 12px;
}

#btnDislikes {
  border: 2px solid #FF5D8F;
  border-radius: 4px;
  background-color: transparent;
  color: #FF5D8F;
  padding: 3px 12px;
}

h1 {

  align-items: center;
  color: #FF5D8F;
  font-family: 'Varela Round';

}

.card-body {
  background-image: url("@/assets/images/fundoCards.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-right: 60px !important;
}

.card {
  background-color: #FFFBF0 !important;
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

#cartoesForms {
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #FF5D8F;
  font-family: 'Varela Round';
}
</style>




