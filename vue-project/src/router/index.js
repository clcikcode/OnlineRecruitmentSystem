import { createRouter, createWebHistory } from 'vue-router'
import navbar from '../components/navbar.vue'
import HomeView from '../views/HomeView.vue'
import RecommendView from '../views/RecommendView.vue'
import SearchView from '../views/SearchView.vue'
import LoginView from '../views/LoginView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'navbar',
    component: navbar,
    props: (route) => ({ afterLogin: route.params.afterLogin }),
    children: [{
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/recommend',
      name: 'RecommendView',
      component: RecommendView
    },
    {
      path: '/search',
      name: 'SearchView',
      component: SearchView
    },]
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }]
})

export default router
