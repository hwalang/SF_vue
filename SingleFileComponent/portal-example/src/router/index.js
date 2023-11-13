import { createRouter, createWebHistory } from 'vue-router'

// @: src 폴더를 가리킨다
import MainPage from '@/components/MainPage.vue'
import CafePage from '@/components/CafePage.vue'
import BlogPage from '@/components/BlogPage.vue'
import MailPage from '@/components/MailPage.vue'
import LoginPage from '@/components/LoginPage.vue'

import TellMe from '@/components/TellMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/cafe',
      component: CafePage
    },
    {
      path: '/blog',
      component: BlogPage,
      beforeEnter: (to, from, next) => {
        console.log('/blog - beforeEnter');
        let userRole = '';
        if (userRole != '') {
          return next();
        } else {
          next('/login');
        }
      }
    },
    // path: '/mail',    // name + query로 보낼 때
    {
      path: '/mail/:from/:content',  // nav-bar의 link도 맞춰야 한다
      name: 'Mail',   // data를 보내기 위함
      component: MailPage,
    },

    {
      path: '/tellme',
      component : TellMe
    },
    {
      path: '/login',
      name: 'Login',
      component : LoginPage
    }
  ]
});

// Global NavigationGuard: without next()
// router.beforeEach((to, from) => {
//   let isLogin = false;

//   if (isLogin || to.path == '/' || to.name == 'Login') {
//     return true;    // 통과
//   } else {
//     console.log('router - beforeEach - else')
//     // 단순 이동 거부
//     // return false;
//     return { name: 'Login' };
//   }
// })
// router.beforeEach((to, from, next) => {
//   let isLogin = false;

//   if (isLogin || to.path == '/' || to.name == 'Login') {
//     next();
//   } else {
//     console.log('router - beforeEach - else')
//     // 단순 이동 거부
//     next('/login');
//     next({ name: 'Login', })
//   }
// })
export default router;