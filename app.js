import './bootstrap';
import { createApp } from 'vue';


import Posts from './components/Posts.vue';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import CreatePost from './pages/CreatePost.vue';


import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/create', component: CreatePost },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


const app = createApp({});
app.component('Posts', Posts);
app.use(router);
app.mount('#app');
