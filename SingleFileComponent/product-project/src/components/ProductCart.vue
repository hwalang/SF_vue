<template>
    <div>
        <h3>Cart List</h3>
        <ul>
            <li v-for="(product, index) in cart" :key="index">{{ product.name }} {{ product.price }}</li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(["cart"]);
</script>