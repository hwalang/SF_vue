<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->
      <router-link to="/" class="navbar-brand">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link to="/cafe" class="nav-link">Cafe</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Link</a> -->
            <router-link to="/blog" class="nav-link">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/mail/:from/:content" class="nav-link">Mail</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tellme" class="nav-link">TellMe</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            v-model="searchWord"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" @click="search">Search</button>
        </form>
        <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
          <!-- 비 login: noProfile.png, login: userProfileImageRrl -->
          <!-- logout, login 중 하나가 보여짐 -->
          <li class="nav-item pt-2">
            <!-- src에 imgUrl  -->
            <img
              v-bind:src="userData.userProfileImageUrl"
              alt=""
              style="width: 24px; height: 24px; border-radius: 50%"
            />
          </li>
          <li class="nav-item" v-show="isLogin">
            <a class="nav-link" href="#">{{ userData.userName }}Logout</a>
          </li>
          <li class="nav-item" v-show="!isLogin">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, reactive } from 'vue'

const searchWord = ref('')
const search = (e) => {
  e.preventDefault()
  alert(searchWord.value)
}

// 로그인 여부

// 로그인: 사용자 data( userName, userProfileImageUrl )
const isLogin = ref(false)
const userData = reactive({
  userName: '',
  userProfileImageUrl: '/src/assets/noProfile.png'
})
</script>
