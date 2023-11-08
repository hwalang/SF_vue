<template>
    <h3>Food List</h3>
    <table>
        <thead>
            <th>이름</th>
            <th>가격</th>
            <th>할인가격</th>
            <th>장바구니</th>
        </thead>
        <tbody>
            <tr v-for="(food, index) in foodList" v-bind:key="index">
                <td>{{ food.name }}</td>
                <td>{{ food.price }}</td>
                <td>{{ food.price - food.price * discountRate }}</td>
                <td><button @click="addCart(food, discountRate)">담기</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
const prop = defineProps(['foodList', 'discountRate']);
const emit = defineEmits(['add-product']);

const addCart = (food, discountRate) => {
    console.log(food);
    console.log(discountRate);

    emit("add-product", food, discountRate);
}
</script>