<template>
    <h1>Product List</h1>
    <table>
        <thead>
            <th>제품</th>
            <th>가격</th>
            <th>할인가격</th>
            <th>카트에 담기</th>
        </thead>
        <tbody>
            <tr v-for="(product, index) in pdtList" v-bind:key="index">
                <td>{{ product.name }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.price - discountRate * product.price }}</td>
                <td><button @click="addCart(product, discountRate)">add cart</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
// object, list를 인자로 넘길 수 있다
// product-list attribute를 가져온다.
const props = defineProps(['pdtList', 'discountRate']);
const emit = defineEmits(['call-parent']);

// 부모 component에 함수를 이용해서 데이터를 넘긴다.
const addCart = (product, discountRate) => {
    console.log(product);
    console.log(discountRate);

    // event 발생
    emit('call-parent', product, discountRate);
}

</script>