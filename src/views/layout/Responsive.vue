<template>
  <div>
    <h1>响应式布局</h1>
    <h3>1. meta 标签</h3>
    <p>{{ html1 }}</p>

    <h3>2. 使用rem</h3>
    <p>
      rem 指的是 html 元素的 font-size，html 元素的 font-size 默认是 16px，
      所以 1 rem = 16px；然后根据 rem 来计算各个元素的宽高，然后配合 media query 就可以实现自适应
    </p>

    <h3>3. media query</h3>
    <p>{{ html2 }}</p>
    <p>有一个需要注意的点是范围大的要放在上面，范围小的放在下面。</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            html1: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
            html2: `
            @media screen and (max-width: 360px) {  
                html { font-size: 12px;    }
            }
            `
        }
    }
}
</script>

<style scoped>

* {
    text-align: left;
}

</style>





