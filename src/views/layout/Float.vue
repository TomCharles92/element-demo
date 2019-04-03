<template>
    <div>
        <p>从图中可以看出，两个 float 元素虽然包含在第一个 container 中，但是却超出了第一个 container 的范围，在文档流中，父元素的高度默认是被子元素撑开的，也就是子元素多高，父元素就多高。 
            但是当为子元素设置浮动以后，子元素会完全脱离文档流，此时将会导致子元素无法撑起父元素的高度，导致父元素的高度塌陷。
            原文：https://blog.csdn.net/zhang6223284/article/details/81909600 
        </p>
        <div class=container>       
        <span class=left>float</span>
        <span>我是字</span>
        <span class=right>float</span>
        </div>
        <div class="container2"></div>

        <h3>清除浮动的方法：</h3>
        <p>1. 父元素设置 overflow: auto 或者 overflow: hidden</p>
        <div class="container" style="overflow: auto">       
        <span class=left>float</span>
        <span>我是字</span>
        <span class=right>float</span>
        </div>
        <div class="container2"></div>

        <p>2. 给父元素加一个 after 伪类</p>
        <div class="container clearFix">       
        <span class=left>float</span>
        <span>我是字</span>
        <span class=right>float</span>
        </div>
        <div class="container2"></div>
    </div>
</template>

<script>
export default {
    name: 'layout-float'
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.container{
    width: 200px;
    background-color:red;
}

.container2{
    width: 200px;
    height: 200px;
    background-color:blue;
    margin-bottom: 20px;
}

.left{
    background-color: yellow; 
    float: left;
    height: 50px;
    width:50px;
}
.right{
    background-color: yellow; 
    float: right;
    height: 50px;
    width:50px;
}

p {
    text-align: left;
}

.clearFix:after {
    content:'';
        clear:both;
        display:block;
        visibility:hidden;
        height:0; 
}
</style>

