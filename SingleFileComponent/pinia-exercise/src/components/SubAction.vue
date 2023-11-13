<template>
  <h1>SubAction.vue</h1>
  <button @click="changeYear">Change Year</button>
  <button @click="changeMonth">Change Month</button>
  <input type="text" v-model.lazy="store.day" />
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore'

const store = useMainStore()

// store 변경
const changeYear = () => {
  // store.year = '2024'
  store.setYear('2025')
}

const changeMonth = () => {
  store.setMonth('10')
}
</script>
