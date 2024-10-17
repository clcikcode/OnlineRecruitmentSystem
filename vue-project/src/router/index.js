import { createRouter, createWebHistory } from 'vue-router'
import navbar from '../components/navbar.vue'
import HomeView from '../views/HomeView.vue'
import RecommendView from '../views/RecommendView.vue'
import SearchView from '../views/SearchView.vue'
import LoginView from '../views/LoginView.vue'
import ChatView from '../views/ChatView.vue'
import ResumeView from '../views/ResumeView.vue'
import PersonalCenterView from '../views/PersonalCenterView.vue'
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
    },{
      path: '/chat',
      name: 'ChatView',
      component: ChatView
    },{
      path: '/resume',
      name: 'ResumeView',
      component: ResumeView
    },{
      path:'/personal',
      name:'PersonalCenterView',
      component:PersonalCenterView
    }]
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }]
})

export default router
