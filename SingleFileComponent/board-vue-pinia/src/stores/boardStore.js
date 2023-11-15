import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import http from '@/common/axios.js'

// store에서 router를 사용하려면 defineStore 안에 선언해야 한다.
// const router = useRouter(); -> 불가, 일반 component가 아니기 때문

export const useBoardStore = defineStore('boardStore', () => {
  
  const router = useRouter();
  
  const boardStore = reactive({
    limit: 10,
    offset: 0,
    list: [],
  })

  const setBoardList = (list) => {
    boardStore.list = list;
  }
  const boardList = async () => {

    let params = {
      limit: boardStore.limit,
      offset: boardStore.offset,
    }

    // 이번에는 store에서 server에 다녀와서 데이터를 가져온다.
    try {
      let { data } = await http.get('/boards', {params})  // {params: params}의 shorthand property
      console.log(data)

      // interceptor
      if (data.result == "login") {
        // result: "login" -> login 안 된 상태: login 페이지로 이동
        // index.js에서 beforeEnter를 지정하지 않으면 깜빡임이 발생한다.
        router.push('/login')
      } else {
        setBoardList(data.list);
      }



    } catch (error) {
      console.log(error)
    }
  }
  

  return { boardStore, boardList }
})
