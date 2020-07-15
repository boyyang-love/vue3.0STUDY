import {
  createRouter,
  createWebHashHistory
} from "vue-router";

// import Home from '@/views/Home.vue'
const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import ('@/views/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import ('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('@/views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;