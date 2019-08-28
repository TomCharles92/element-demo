<template>
  <div>
    <el-button @click="downloadTxt">下载一个本地字符串</el-button>
    <el-button @click="blobDownload">从ABS云轻系统中下载一个文件</el-button>
  </div>
</template>

<script>
export default {
  name: "Blob",
  methods: {
    // https://github.com/progit/progit2/releases/download/2.1.161/progit.pdf

    // 下载一个字符串
    downloadTxt() {
      var myBlob = new Blob(["hello", "world"], { type: "text/plain" });
      this.download(myBlob);
    },

    // 从ABS云轻系统中下载一个文件
    blobDownload() {
      this.$axios({
        // 用axios发送post请求
        method: "post",
        url: "/downloadTest/downLoadYiModel", // 请求地址
        responseType: "blob" // 表明返回服务器返回的数据类型
      }).then(res => {
        console.log(res.headers["content-disposition"])
        // 这里 content-disposition 的值是：attachment; filename="assetModel.xlsx"
        // 从中取出 filename，最终的文件名要与这个名字保持一致
        let disposition = res.headers["content-disposition"];
        let start = disposition.indexOf('filename') + 10;
        let fileName = disposition.slice(start, -1);

        let blob = res.data.slice(0, res.data.size, "application/vnd.ms-excel");
        this.download(blob, fileName)
      });
    },

    // 创建一个a标签，给它附上url，然后模拟下载
    download(blob, fileName = "fileName") {
      const a = document.createElement("a");
      // 指定文件名
      a.download = fileName;
      a.style.display = "none";
      // 创建一个新的URL 对象，表示指定的 File 对象或 Blob 对象
      a.href = URL.createObjectURL(blob);
      document.body.appendChild(a);
      a.click();
      // 释放URL 对象
      URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    }
  }
};
</script>

