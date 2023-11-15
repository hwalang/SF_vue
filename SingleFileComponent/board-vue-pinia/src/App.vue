<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
const { setLogin } = useAuthStore()

// session storage에 login된 상태를 확인하면
// session storage에 있는 값을 이용해서 authStore를 갱신
// 페이지 이동 및 refresh 해도 login을 유지할 수 있다. -> server 껐다키면 session이 날라간다.
let isLogin = sessionStorage.getItem('isLogin')
if (isLogin == 'true') {
  let userName = sessionStorage.getItem('userName')
  let userProfileImageUrl = sessionStorage.getItem('userProfileImageUrl')
  setLogin({
    isLogin: true,
    userName: userName,
    userProfileImageUrl: userProfileImageUrl
  })
}
</script>

<style scoped></style>
