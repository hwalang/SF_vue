import { createRouter, createWebHistory } from 'vue-router'

// @: src 폴더를 가리킨다
import MainPage from '@/components/MainPage.vue'
import CafePage from '@/components/CafePage.vue'
import BlogPage from '@/components/BlogPage.vue'
import MailPage from '@/components/MailPage.vue'

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
      component: BlogPage
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
    }
  ]
});

export default router;