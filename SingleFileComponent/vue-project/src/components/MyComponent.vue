<template>
  <div>컴포넌트 데이터: {{data1}}</div>
  <button v-on:click="func1">클릭</button>
  <button v-on:click="func2">클릭2</button>
</template>

<script setup>
import { ref } from 'vue'
	const data1 = ref(200);
  const func1 = () => console.log(data1.value);
  const func2 = () => (data1.value = 1000);
</script>