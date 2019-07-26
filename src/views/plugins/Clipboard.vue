<template>
  <div>
    <p>
      <el-button @click="openDialog">打开对话框</el-button>
    </p>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <!-- Target -->
      <input id="foo" value="https://github.com/zenorocha/clipboard.js.git" />

      <!-- Trigger -->
      <button class="btn" data-clipboard-target="#foo">复制01</button>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
export default {
  name: "Clipboard",
  data() {
    return {
      dialogVisible: false
    };
  },
  created() {
    
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
      new ClipboardJS(".btn");
    }
  }
};
</script>

