<template>
  <div class="container mt-2">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    <button type="button" class="btn btn-primary mt-2" @click="sendTellMe">Send</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const ckeditor = CKEditor.component
const editor = ClassicEditor
const editorData = ref('<p>Content of Editor</p>')
// toolbar를 수정할 수 있다.
const editorConfig = {
  removePlugins: ['Heading', 'Link', 'CKFinder'],
  toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote']
}

const sendTellMe = () => {
  alert(editorData.value)
}
</script>

<style scoped>
/* deep selector >>>  : 함수 deep() */
.container:deep(.ck-editor__editable) {
  height: 400px;
}
</style>
