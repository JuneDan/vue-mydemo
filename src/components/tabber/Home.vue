<template>
    <div>
        <!-- 轮播图区 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item>
            <mt-swipe-item></mt-swipe-item> 
        </mt-swipe>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui'
    export default {
        data() {
            return {
                lunbotulist: []
            }
        },
        created() {
            this.getswipe()
        },
        methods: {
            getswipe() {
                this.$http.get('http://vue.study.io/getlunbo').then(result =>{
                    // console.log(result.body);
                    if(result.body.status === 0) {
                        this.lunbotulist = result.body.message;

                    }else{
                        Toast('加载失败')
                    }
                });
            }
        }
    }
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
        img {
            width: 100%;
            height: 100%;
        }
    }

}
</style>