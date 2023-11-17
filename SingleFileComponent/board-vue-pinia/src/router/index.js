import { createRouter, createWebHistory } from 'vue-router'
import BoardView from "@/views/BoardView.vue";
import LoginView from "@/views/LoginView.vue";
import UsersView from "@/views/UsersView.vue";
import { useAuthStore } from '@/stores/authStore'

// vue + vite 에서는 이곳에 store 를 선언하고 beforeEnter, beforeEach 에서 사용하면 오류 발생
// getActivePinia was called with no active Pinia. Did you forget to install pinia
// 각각 메소드 안에서 선언해야 한다.
// const store = useAuthStore()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: BoardView,
      beforeEnter: (to, from, next) => {

         const { authStore } = useAuthStore()
         // console.log(authStore)
         // console.log('/', authStore.isLogin);

         let isLogin = sessionStorage.getItem("isLogin")
         if ( authStore.isLogin || isLogin == "true ") {
            next();
         } else {
            next("/login");
         }
      },
   },

   {
      name: "Board",
      path: "/board",
      component: BoardView,
      beforeEnter: (to, from, next) => {
         
         const { authStore } = useAuthStore()
         // console.log(authStore)
         // console.log('/board', authStore.isLogin);

         let isLogin = sessionStorage.getItem("isLogin")
         if ( authStore.isLogin || isLogin == "true ") {
            return next();
         } else {
            next("/login");
         }
      },
   },

   {
      name: "Login",
      path: "/login",
      component: LoginView,
   },

   {
      name: "Users",
      path: "/users",
      component: UsersView,
   },
  ]
})

export default router
