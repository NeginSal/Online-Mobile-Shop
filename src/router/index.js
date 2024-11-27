import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Cart from '../components/Cart.vue';
import Offers from '../components/Offers.vue';
import PageNotFound from '../components/PageNotFound.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/offers', name: 'Offers', component: Offers },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;