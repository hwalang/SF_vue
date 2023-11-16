<template>
  <div class="container mt-3">
    <h4 class="text-center">게시판 - Main</h4>

    <div class="input-group mb-3 mt-3">
      <input id="inputSearchWord" type="text" class="form-control" placeholder="Search" />
      <button id="btnSearchWord" class="btn btn-success" type="button">Search</button>
    </div>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일시</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boardStore.list" v-bind:key="board.boardId">
          <td>{{ board.boardId }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.userName }}</td>
          <td>{{ util.makeDateStr(board.regDt.date, '/') }}</td>
          <td>{{ board.readCount }}</td>
        </tr>
      </tbody>
    </table>

    <PaginationUI></PaginationUI>

    <insert-modal></insert-modal>
    <update-modal></update-modal>
    <detail-modal></detail-modal>

    <button class="btn btn-sm btn-primary" @click="showInsertModal">글쓰기</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// component
import PaginationUI from '@/components/PaginationUI.vue'
import InsertModal from '@/components/modals/InsertModal.vue'
import UpdateModal from '@/components/modals/UpdateModal.vue'
import DetailModal from '@/components/modals/DetailModal.vue'

//common
import util from '@/common/util.js'
// boootstrap 객체 생성
import { Modal } from 'bootstrap'

import { useBoardStore } from '@/stores/boardStore'
// import { useRouter } from 'vue-router'
const { boardStore, boardList } = useBoardStore()
// const router = useRouter()

let insertModal = null
let updateModal = null
let detailModal = null

// mount 단계에서 document를 인식할 수 있다.
// 지금은 create 단계
onMounted(() => {
  insertModal = new Modal(document.getElementById('insertModal'))
  updateModal = new Modal(document.getElementById('updateModal'))
  detailModal = new Modal(document.getElementById('detailModal'))
})

const showInsertModal = () => insertModal.show()
// 이번에는 store에서 server에 다녀와서 데이터를 가져온다.
boardList()
</script>
