import { createRouter, createWebHistory } from 'vue-router'
import UsersView from '@/views/UsersView.vue'
import LoginView from '@/views/LoginView.vue'
import BoardView from '@/views/BoardView.vue'

import { useAuthStore } from '@/stores/authStore'
// 여기에 store를 만들면 안되고, createRouter 내부에 만든다.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BoardView
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/board',
      name: 'Board',
      component: BoardView,
      beforeEnter: (to, from, next) => {
        // authStore과 sessionStorage에서 isLogin 확인 후 분기
        const { authStore } = useAuthStore();
        let sessionStorageLogin = sessionStorage.getItem("isLogin");
        if (authStore.isLogin || sessionStorageLogin == "true") {
          next(); // 통과
        } else {
          next('/login'); // 로그인 해라
        }
      } 
    },
  ]
})

export default router
