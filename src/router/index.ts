import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import ComponentsPage from './views/ComponentsPage.vue';
import CardsPage from './views/CardsPage.vue';
import WatcherPage from './views/WatcherPage.vue';
import FetchPage from './views/FetchPage.vue';
import ErrorPage from './views/ErrorPage.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsPage
  },
  {
    path: '/cards',
    name: 'cards',
    component: CardsPage
  },
  {
    path: '/watcher',
    name: 'watcher',
    component: WatcherPage
  },
  {
    path: '/fetch',
    name: 'fetch',
    component: FetchPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
});

export default router;
