<template>
  <div>
    <h1>XMLHttpRequest</h1>
    <div id="status"></div>
  </div>
</template>

<script>
export default {
  name: "XMLHttpRequest",
  created() {
    // this.synchronous();
    // this.asynchronous();

    this.progressEvent();
  },
  methods: {
    // 同步方法
    synchronous() {
      let xhr = new XMLHttpRequest();
      // open表示启动一个请求，以备发送
      xhr.open("get", "/zhihu/api/2/news/latest", false);
      xhr.send(null);

      // 这里是同步请求，所以直接在请求之后写
      if ((xhr.status >= 200) & (xhr.status < 300) || xhr.status === 304) {
        console.log(xhr.responseText);
      } else {
        this.$message.error(`请求失败${xhr.status}`);
      }
    },

    // 异步方法
    asynchronous() {
      let xhr = new XMLHttpRequest();
      // 添加一个事件监听
      xhr.onreadystatechange = () => {
        // xhr.readyState === 4，表示接收到全部响应数据
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200) & (xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.responseText);
          } else {
            this.$message.error(`请求失败${xhr.status}`);
          }
        }
      };

      xhr.open("get", "/zhihu/api/2/news/latest", true);
      // 可以设置 Http Header
      xhr.setRequestHeader("MyHeader", "MyValue");
      xhr.send(null);
    },

    // 进度事件
    progressEvent() {
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if ((xhr.status >= 200) & (xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
        } else {
          this.$message.error(`请求失败${xhr.status}`);
        }
      };

      xhr.onprogress = (event) => {
        let divStatus = document.getElementById("status");
        if (event.lengthComputable) {
          divStatus.innerHTML = `接收到${event.position} of ${event.totalSize} bytes`;
        }
      }

      xhr.open("get", "/speedtest/100MB-london.bin", true);
      // xhr.setRequestHeader("responseType", "blob")
      xhr.send(null);

      console.log(xhr)
    }
  }
};
</script>