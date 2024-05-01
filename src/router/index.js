import { createRouter,createWebHashHistory,createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    component:HomeView
  },
  {
    path: '/about',
    component:AboutView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router;