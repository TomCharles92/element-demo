<template>
  <div>
    <h1>RichText</h1>
    <editor
      v-model="content"
      api-key="a00hkgvtiginxy0do9pjwfxhsb9tpcmfymq7tuzqhn1hfeha"
      :init="initConfiguration"
    />

    <el-button @click="submit" type="primary" style="display: block; margin: 1em auto;">提交</el-button>

    <div v-html="content"></div>
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
      content: "",
      plugins: [
        "advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"
      ],
      toolbar: [
        "searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample",
        "hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"
      ],
      initConfiguration: {
        height: 500,
        plugins: plugins, // 插件
        toolbar: toolbar, // 工具栏
        language: "zh_CN",
        menubar: "file edit insert view format table", // 顶部菜单栏

        end_container_on_empty_block: true,
        powerpaste_word_import: "clean",
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: "square",
        advlist_number_styles: "default",
        // imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
        default_link_target: "_blank",
        link_title: false
        // nonbreaking_force_tab: true
      }
    };
  },
  methods: {
    submit() {
      console.log(this.content, typeof this.content);
    }
  }
};
</script>