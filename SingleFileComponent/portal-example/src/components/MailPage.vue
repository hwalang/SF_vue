<template>
  <div class="card mt-2">
    <img src="https://picsum.photos/1024/400/?image=25" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Mail</h5>
      <p class="card-text">
        from: {{ from }}
        <br />
        content: {{ content }}
      </p>
      <a href="#" class="btn btn-primary" @click="checkMail">Check Mail</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const from = ref('')
const content = ref('')

// router가 보낸 데이터를 route로 받는다.
const checkMail = () => {
  // 1. name + query 데이터 받기
  // from.value = route.query.from
  // content.value = route.query.content

  from.value = route.params.from
  content.value = route.params.content
}
</script>
