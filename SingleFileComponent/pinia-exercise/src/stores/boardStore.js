import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('boardStore', () => {

  // state
  const boardState = reactive({
    limit: 10,
    offset: 0,
    searchWord: '검색어',
    boardData: {
      boardId: 0,
      userSeq: 0,
      title: '',
      content: '',
    },
    boardListData: [],
  })

  const totalCount = ref(3);

  const testBoardListData = [
    { boardId: 1, userSeq: 100, title: '111', content: '111111' },
    { boardId: 2, userSeq: 100, title: '222', content: '222222' },
    { boardId: 3, userSeq: 100, title: '333', content: '333333' },
  ]
  const testBoardData = {boardId: 2, userSeq: 100, title: '222', content: '222222'}
  // action
  function listBoard() {
    // async 작업
    boardState.boardListData = testBoardListData;
    console.log(boardState.boardListData)
  }

  function detailBoard(boardId) {
    console.log(boardId)
    boardState.boardData = testBoardData;
  }

  return { boardState, listBoard, detailBoard, totalCount }
})
