<template>
  <form>
    <table>
      <tbody>
        <tr>
          <td>StudentNm</td>
          <td>
            <input type="text" name="studentNm" id="inputStudentNm" v-model="student.studentNm" />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td><input type="text" name="email" id="inputEmail" v-model="student.email" /></td>
        </tr>
        <tr>
          <td>Phone</td>
          <td><input type="text" name="phone" id="inputPhone" v-model="student.phone" /></td>
        </tr>
      </tbody>
    </table>
  </form>
</template>

<script setup>
const props = defineProps(['student'])
</script>
