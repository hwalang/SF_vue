<template>
  <h1>Student 관리 - axios</h1>
  <hr />
  <student-list
    v-bind:student-list="studentList"
    v-on:call-parent-detail="detailStudent"
  ></student-list>
  <hr />
  <student-detail v-bind:student="student"></student-detail>

  <div style="border: 1px; margin: auto; text-align: center">
    <button @click="insertStudent">등록</button>
    <button @click="updateStudent">수정</button>
    <button @click="deleteStudent">삭제</button>
    <button @click="clearStudent">초기화</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import StudentList from './components/StudentList.vue'
import StudentDetail from './components/StudentDetail.vue'

const student = ref({}) // 상세
const studentList = ref([]) // 목록

const clearStudent = () => {
  student.value = {
    studentId: 0,
    studentNm: '',
    email: '',
    phone: ''
  }
}

const listStudent = async () => {
  try {
    let { data } = await axios.get('http://localhost:8080/axios/students') // 여기서 js 객체
    // console.log(data);
    studentList.value = data
  } catch (error) {
    console.error(error)
  }
}

const detailStudent = async (studentId) => {
  try {
    let { data } = await axios.get('http://localhost:8080/axios/students/' + studentId)
    student.value = data
  } catch (error) {
    console.error(error)
  }
}

const insertStudent = async () => {
  // http://192.168.203.108:8080 111 108
  try {
    let { data } = await axios.post('http://localhost:8080/axios/students', student.value)
    console.log(data)
    listStudent()
    clearStudent()
  } catch (error) {
    console.error(error)
  }
}

const updateStudent = async () => {
  try {
    let { data } = await axios.put(
      'http://localhost:8080/axios/students/' + student.value.studentId,
      student.value
    )
    console.log(data)
    listStudent()
    clearStudent()
  } catch (error) {
    console.error(error)
  }
}

const deleteStudent = async () => {
  try {
    let { data } = await axios.delete(
      'http://localhost:8080/axios/students/' + student.value.studentId
    )
    console.log(data)
    listStudent()
    clearStudent()
  } catch (error) {
    console.error(error)
  }
}

listStudent() // 데이터 가져오기
</script>

<style scoped></style>
