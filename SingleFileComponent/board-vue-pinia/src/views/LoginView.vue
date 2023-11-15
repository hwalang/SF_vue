<template>
  <div class="container">
    <div class="mb-3 mt-5 d-flex justify-content-center">
      <h1 class="display-4">몰?루</h1>
    </div>
    <div class="mb-3">
      <h2>Login</h2>
    </div>
    <div class="mb-3">
      <label for="userEmail" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="userEmail"
        name="userEmail"
        v-model="authStore.userEmail"
      />
    </div>
    <div class="mb-3">
      <label for="userPassword" class="form-label">제목</label>
      <input
        type="password"
        class="form-control"
        id="userPassword"
        name="userPassword"
        v-model="authStore.userPassword"
      />
    </div>
    <div>
      <button class="btn btn-primary" @click="login">로그인</button>&nbsp;
      <!-- <a href="#" class="btn btn-success">회원가입</a> -->
      <router-link to="/users" class="btn btn-success">회원가입</router-link>
    </div>
  </div>
</template>

<script setup>
import http from '@/common/axios.js'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'
const { authStore, setLogin } = useAuthStore()
const router = useRouter()

const login = async () => {
  let loginObj = {
    // userEmail.value
    userEmail: authStore.userEmail, // v-model로 store와 input tag의 value를 연동
    userPassword: authStore.userPassword
  }

  try {
    let { data } = await http.post('/login', loginObj)
    console.log(data)

    if (data.result == 'success') {
      // local storage: 브라우저를 닫아도 저장됨
      // session storage에 저장
      // - 페이지 이동 및 refresh해도 login 상태를 유지하기 위해서 App.vue에서 처리
      sessionStorage.setItem('isLogin', 'true')
      sessionStorage.setItem('userName', data.userName)
      sessionStorage.setItem('userProfileImageUrl', data.userProfileImageUrl)

      // authStore 변경
      setLogin({
        isLogin: true,
        userName: data.userName,
        userProfileImageUrl: data.userProfileImageUrl
      })

      // page 이동 -> board
      router.push('/board')
    } else if (data.result == 'fail') {
      // DB에 접근했지만 일치하는 데이터가 없다.
      alert('이메일 또는 비밀번호를 확인해주세요')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
