<template>
    <div>
        <!-- 轮播图区 -->
        <h1>home</h1>
        <mt-swipe :auto="5000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item> 
        </mt-swipe>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.mint-swipe {   
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1) {
            background-color: red;
        }
        &:nth-child(2) {
            background-color: green;
        }
        &:nth-child(3) {
            background-color: blue;
        }
    }

}
</style>