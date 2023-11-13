import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('mainStore', () => {
  // state
  const year = ref('2023')
  const month = ref('11')
  const day = ref('3')

  // getter ( computed )
  const date = computed(() => year.value + month.value + day.value);
  const formattedDate = computed(() => {
    // 한 자리수 -> 0X로 formatting
    //month.value = month.value.length == 1 ? `0${month.value}` : month.value;
    //day.value = day.value.length == 1 ? `0${day.value}` : day.value;
    // -> 옳바르지 않은 결과: SubPage에만 적용하고 싶은데, MainPage도 적용된다.

    let tempMonth = month.value.length == 1 ? `0${month.value}` : month.value;
    let tempDay = day.value.length == 1 ? `0${day.value}` : day.value;

    return `${year.value} / ${tempMonth} / ${tempDay}`;
  });

  // action ( method )
  function setYear(y) {year.value = y; }
  function setMonth(m) { month.value = m; }

  return { year, month, day, date, formattedDate, setYear, setMonth }
})
