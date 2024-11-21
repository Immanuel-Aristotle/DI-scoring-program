// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home.vue';
import LoginForm from '@/components/LoginForm.vue';
import ContestManagement from '@/components/ContestManagement.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginForm },
  { path: '/contests', name: 'Contests', component: ContestManagement},
];





// Do not change these
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
