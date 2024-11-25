// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'; // Only import createWebHashHistory
import HomePage from '@/components/Home.vue';
import LoginForm from '@/components/LoginForm.vue';
import DashBoard from '@/components/DashBoard.vue';
// import CriteriaManager from '@/components/CriteriaManager.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginForm },
  { path: '/dashboard', name: 'Dashboard', component: DashBoard }
];

// Create the router with hash history mode
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
