// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/Home.vue';
import LoginForm from '@/components/LoginForm.vue';
import DashBoard from '@/components/DashBoard.vue';
// import CriteriaManager from '@/components/CriteriaManager.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginForm },
  { path: '/dashboard', name: 'Dashboard', component: DashBoard}
];





// Do not change these
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
