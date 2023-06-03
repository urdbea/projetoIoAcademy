
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faInfoCircle, faEnvelope, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// Rest of your code


const app = createApp(App)

app.use(router)



  library.add(faHome, faInfoCircle, faEnvelope, faSignOutAlt);
  
  app.component('font-awesome-icon', FontAwesomeIcon);

  
app.mount('#app')

const dadosUser = [
    {
      username: 'bia',
      password: '123',
    },
    {
      username: 'lili',
      password: '123',
    },
  ];
  
  localStorage.setItem('users', JSON.stringify(dadosUser));
  


  
