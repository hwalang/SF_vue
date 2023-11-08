<template>
  <table>
    <thead>
      <tr>
        <td>StudentID</td>
        <td>StudentNm</td>
        <td>Email</td>
        <td>Phone</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(student, index) in studentList"
        v-bind:key="index"
        @click="detailStudent(student.studentId)"
      >
        <td>{{ student.studentId }}</td>
        <td>{{ student.studentNm }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps(['studentList'])
const emit = defineEmits(['call-parent-detail'])

const detailStudent = (studentId) => emit('call-parent-detail', studentId)
</script>
