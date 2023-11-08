<script setup>
import { ref, reactive } from 'vue'
import ProductList from './components/ProductList.vue';
import ProductCart from './components/ProductCart.vue';

// product list에 보낼 데이터( props: 부모 -> 자식 )
let data = [
	{ name: 'Tent', price: 40000 },
	{ name: 'Tarp', price: 50000 },
	{ name: 'Table', price: 70000 }
]

let gameData = [
	{ name: 'BlueArchive', company: 'nexon' },
	{ name: 'LostArk', company: 'smilegate' },
	{ name: 'BlackDesert', company: 'pearlabyss' },
]

const productList = ref(data);
const discountRate = ref(0.2);

const cartList = reactive([]);


const fromChild = (product, discountRate) => {
	console.log(discountRate);
	cartList.push(product);
};

</script>

<template>
  <h1>App</h1>
  <product-list v-bind:pdt-list="productList" :discount-rate="discountRate" v-on:call-parent="fromChild"></product-list>
  <product-cart v-bind:cart="cartList"></product-cart>
</template>

<style scoped>
</style>
