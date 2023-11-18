<template>
  <nav-bar />
  <router-view></router-view>
</template>

<!-- script 에 setup 이 없으면 아래와 같은 오류 발생
  "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"? -->
<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from "./components/NavBar.vue";

  import { useAuthStore } from '@/stores/authStore'
  const authStore = useAuthStore()

  let isLogin = sessionStorage.getItem("isLogin");
  // console.log(isLogin)
  if( isLogin == "true" ){
      let userName = sessionStorage.getItem("userName");
      let userProfileImageUrl = sessionStorage.getItem("userProfileImageUrl");
      authStore.setLogin({ 
        isLogin: true,
        userName: userName,
        userProfileImageUrl: userProfileImageUrl 
      });
  }
</script>

<style scoped></style>
