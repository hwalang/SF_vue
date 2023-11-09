<template>
  <div class="card mt-2">
    <img src="https://picsum.photos/1024/400/?image=2" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Cafe</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <a href="#" class="btn btn-primary" @click="sendMail">Send Mail</a>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const sendMail = () => {
  let data = {
    from: 'hong@gildong.com',
    content: '안녕'
  }

  // router.push()를 통해서 dynamic routing으로 component를 변경(이동)
  // data를 포함해서 처리할 수 있다.

  // 1. name + query로 전달: url에 데이터가 보인다
  // router.push({
  //   name: 'Mail',
  //   query: data
  // })

  // 2. path + params로 전달: url에 데이터가 보이지 않는다.
  router.push({
    path: `/mail/${data.from}/${data.content}`
  })
}
</script>
