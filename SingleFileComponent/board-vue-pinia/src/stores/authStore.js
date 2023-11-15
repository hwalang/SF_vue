import { reactive } from 'vue'
import { defineStore } from 'pinia'

import notLoginUserProfileImageUrl from '/src/assets/noProfile.png'
// id: authStore
export const useAuthStore = defineStore('authStore', () => {
  
  // 서버의 return 값과 맞춘다.
  // login 여부, 사용자 이름, 프로필 이미지, 로그인 항목
  const authStore = reactive({
    isLogin: false,

    userName: '',
    userProfileImageUrl: notLoginUserProfileImageUrl, // build했을 때 image를 가져올 수 있도록 세팅

    userEmail: 'hong@n.com',  // 개발을 위해 ''가 아니라 DB값으로 세팅
    userPassword: '1234',
  })

  // login 후에 현재 user 정보를 authStore에 반영
  const setLogin = (payload) => {
    console.log(payload)
    authStore.isLogin = payload.isLogin;
    authStore.userName = payload.userName;
    authStore.userProfileImageUrl = payload.userProfileImageUrl;
    console.log(authStore)
  }

  return { authStore, setLogin }
})
