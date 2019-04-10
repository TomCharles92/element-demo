<template>
  <div>
    <p style="text-align: left;">
      table布局是一种早期布局方式，也是最简单的布局方式。它也有自身的局限性，占用更多字节，
      会造成下载延时，占用服务器更多流量资源
    </p>
    <table class="container1">
      <tbody>
        <tr>
          <td class="left">
            左
          </td>
          <td class="right">
            右
          </td>
        </tr>
      </tbody>
    </table>

    <table class="container2">
      <tbody>
        <tr>
          <td class="left">
            左
          </td>
          <td class="right">
            右
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Table'
}
</script>

<style lang="less" scoped>
.container1 {
    height:200px;
    width: 100%;
    .left{
        background-color: red
    }
    .right{
        background-color: green
    }
}

.container2 {
    display: table;
    height:200px;
    width: 100%;
    .left {
        display: table-cell;
        background-color: red
    }
    .right {
        display: table-cell;
        background: green;
    }
}
</style>


