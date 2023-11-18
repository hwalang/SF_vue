<template>
  <h1>BoardPage.vue</h1>
  <input type="text" v-model="boardState.searchWord" /><br />
  limit: {{ boardState.limit }} offset: {{ boardState.offset }} totalCount: {{ totalCount }}
  <br />
  <button @click="search">검색</button>
  <!-- offset이 변하는 경우 -->
  <button @click="nextPage">다음 페이지</button>
  <button @click="changeTotalCount">총 건수 바꾸기</button>

  <h4>목록</h4>
  <table>
    <tr
      v-for="board in boardState.boardListData"
      :key="board.boardId"
      @click="detailBoard(board.boardId)"
    >
      <td>{{ board.boardId }}</td>
      <td>{{ board.userSeq }}</td>
      <td>{{ board.title }}</td>
      <td>{{ board.content }}</td>
    </tr>
  </table>
  <button @click="listBoard">목록 가져오기</button>

  <h4>상세</h4>
  <table>
    <tr>
      <td>{{ boardState.boardData.boardId }}</td>
      <td>{{ boardState.boardData.userSeq }}</td>
      <td>{{ boardState.boardData.title }}</td>
      <td>{{ boardState.boardData.content }}</td>
    </tr>
  </table>
</template>

<script setup>
import { useBoardStore } from '@/stores/boardStore'
import { storeToRefs } from 'pinia' // ref를 사용하기 위함

const store = useBoardStore()
console.log(store)
// destructuring
const { boardState, listBoard, detailBoard } = store
const { totalCount } = storeToRefs(store) // ref 데이터를 가져오는 방법

const search = () => {
  console.log(boardState)
}
const nextPage = () => {
  boardState.offset = boardState.offset + boardState.limit
}
const changeTotalCount = () => {
  // ref인 경우
  // store.totalCount로 가져온 것이 아니라 totalCount로 가져온다.
  // 그래서 .value가 붙음
  totalCount.value = 100
}
</script>
