<script setup>
import { RouterView } from 'vue-router'

import NavBar from './components/NavBar.vue'
import FooterPage from './components/FooterPage.vue'
</script>

<template>
  <div class="container">
    <nav-bar></nav-bar>
    <!-- router/index.js에 기술된 path(name): component가 이곳에 보임 -->
    <router-view></router-view>
    <footer-page></footer-page>
  </div>
</template>

<style scoped></style>
