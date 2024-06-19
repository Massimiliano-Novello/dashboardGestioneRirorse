import { createWebHistory, createRouter } from 'vue-router'

import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Registrazione from './components/Registrazione.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/Dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/Registrazione",
      name: "Registrazione",
      component: Registrazione,
    },
  ],
});


export {router} ;