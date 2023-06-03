
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Rest of your code


const app = createApp(App)

app.use(router)

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
  

