<template>
   <div class="container">
		<div class="mb-3 d-flex justify-content-center">
	  		<h1 class="display-4">삐따기 세상</h1>
		</div>
		<div class="mb-3">
			<h2>Login</h2>
		</div>
      <div class="mb-3">
         <input type="email" class="form-control" v-model="authStore.userEmail" placeholder="Email"/>
      </div>
      <div class="mb-3">
         <input type="password" class="form-control" v-model="authStore.userPassword" placeholder="Password"/>
      </div>
      <div>
         <button @click="login" class="btn btn-primary">로그인</button>
         <router-link to="/users" class="btn btn-success float-end">회원가입</router-link>
      </div>
   </div>
</template>

<script setup>
   import http from "@/common/axios.js";
   import { useAuthStore } from '@/stores/authStore';
   import { useRouter } from 'vue-router'

   // import VueAlertify from "vue-alertify";

   const { authStore, setLogin } = useAuthStore()
   const router = useRouter()

   console.log(authStore);
   const login = async () => {
         // #1 Not JSON Way : application/x-www-form-urlencoded;charset=UTF-8

         // backend 는 @RequestBody X
         // let options = {
         //   headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
         // }

         // application/x-www-form-urlencoded 일 때 param 은 URLSearchParams() 를 이용
         // const params = new URLSearchParams();
         // params.append('userEmail', authStore.userEmail);
         // params.append('userPassword', authStore.userPassword);

         // #2 JSON Way : application/json
         let loginObj = {
            userEmail: authStore.userEmail,
            userPassword: authStore.userPassword,
         };

         try {
            // #1
            // let {data} = await  http.post('/login', params, options );

            // #2
            let { data } = await http.post("/login", loginObj);

            console.log("LoginVue: data : ");
            console.log(data);
            console.log(data.userName);

            if( data.result == "success" ){
               setLogin({ isLogin: true, userName: data.userName, userProfileImageUrl: data.userProfileImageUrl });
               // board 로 이동
               router.push("/board");
            }else if( data.result == "fail" ){
               // this.$alertify.error('이메일 또는 비밀번호를 확인하세요.');
               alert('이메일 또는 비밀번호를 확인하세요.');
            }
         } catch (error) {
            // LoginController 에서 ResponseEntity 로 404 보내면 여기로 떨어진다.
            console.log("LoginVue: error : ");
            console.log(error);
            // this.$alertify.error('로그인 과정에서 오류가 발생했습니다.');
            alert('로그인 과정에서 오류가 발생했습니다.');
         }
      }

</script>
