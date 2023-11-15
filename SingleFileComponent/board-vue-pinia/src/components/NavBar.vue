<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0 float-end">
          <li class="nav-item pt-2">
            <img
              v-bind:src="authStore.userProfileImageUrl"
              alt=""
              style="width: 24px; height: 24px; border-radius: 50%"
            />
          </li>
          <li class="nav-item" v-show="!authStore.isLogin">
            <!-- <a class="nav-link" href="#">Login</a> -->
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-show="authStore.isLogin">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import http from '@/common/axios.js'
import notLoginUserProfileImageUrl from '/src/assets/noProfile.png'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const { authStore, setLogin } = useAuthStore()

const logout = async () => {
  try {
    let { data } = await http.get('/logout')
    console.log(data)

    if (data.result == 'success') {
      // session storage 삭제
      sessionStorage.removeItem('isLogin')
      sessionStorage.removeItem('userName')
      sessionStorage.removeItem('userProfileImageUrl')

      // authStore 변경
      setLogin({
        isLogin: false,
        userName: '',
        userProfileImageUrl: notLoginUserProfileImageUrl
      })

      // page 이동 -> login
      router.push('/login')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
