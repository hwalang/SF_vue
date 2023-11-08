<script setup>
import FoodList from './components/FoodList.vue';
import FoodCart from './components/FoodCart.vue';
import { ref, reactive } from 'vue';

let character = [
	{ name: '아루', type: '폭발', field: 'striker' },
	{ name: '몰루', type: '신비', field: 'striker' },
	{ name: '리얼루', type: '관통', field: 'supporter' },
]

let foodData = [
    {name: 'Chicken', price: 20000},
    {name: 'Tart', price: 7000},
    {name: 'Snack', price: 3000}
];

const foodList = ref(foodData);
const discountRate = ref(0.1);

const cartList = reactive([]);
const addProduct = (food, discountRate) => {
  cartList.push(food);
};
</script>

<template>
  <h1>Blue Achive Food</h1>
  <food-list v-bind:food-list="foodList" v-bind:discount-rate="discountRate" v-on:add-product="addProduct"></food-list>
  <food-cart v-bind:cart="cartList"></food-cart>


</template>

<style scoped>

</style>
