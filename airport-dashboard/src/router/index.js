import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/LoginPage.vue';
import DashboardPage from '../components/DashboardPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/dashboard', component: DashboardPage }
];

const router = createRouter({
  history: createWebHistory(),  // Create a history mode for Vue Router
  routes
});

export default router;

