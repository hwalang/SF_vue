<template>
  <h1>MainPage.vue</h1>
  {{ store.year }} {{ store.month }} {{ store.day }}

  <sub-page></sub-page>
  <sub-action></sub-action>
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore'
import SubPage from '@/components/SubPage.vue'
import SubAction from '@/components/SubAction.vue'

//console.log(useMainStore)
const store = useMainStore()
//console.log(store)
</script>
