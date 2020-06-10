<template>
  <div>
    <h1>RichText</h1>
    <editor
      v-model="content"
      api-key="no-api-key"
      :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
    />

    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "RichText",
  components: {
    editor: Editor
  },
  data() {
    return {
      content: ""
    }
  },
  methods: {
    submit() {
      console.log(this.content, typeof this.content);
      
    }
  }
};
</script>