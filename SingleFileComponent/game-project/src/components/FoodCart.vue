<template>
    <h3>Cart List</h3>
    <ul>
    <li v-for="(food, index) in cart" v-bind:key="index">{{ food.name }} {{ food.price }}</li>
  </ul>
</template>

<script setup>
const props = defineProps(['cart']);
</script>