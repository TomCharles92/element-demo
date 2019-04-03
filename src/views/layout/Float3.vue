<template>
    <div>
        <div class=container>       
            <div class=left></div>
            <div class=right></div>
            <div class="middle"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    width: 400px;
    height: 200px;
}

.left{
    background-color: yellow; 
    float: left;
    height: 100%;
    width:100px;
}
.right{
    background-color: green; 
    float: right;
    height: 100%;
    width:100px;
}
.middle{
    background-color: red; 
    margin-left: 100px;
    margin-right: 100px;
    height:100%;
}
.container::after{
    content: '';
    display: block;
    visibility: hidden;
    clear: both
}
</style>


