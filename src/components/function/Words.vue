// 引用shopcar组件
<template>
    <div id="shopcar" class="shopcar"></div>
</template>
<script>
import { Indicator } from 'mint-ui'
export default {
    data() {
        return {
        }
    },
    created() {
        this.A();
    },
    methods: {
        A() {      
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'

            });
            setTimeout(function () {
                   Indicator.close() 
                } ,2000);
            setTimeout(function () {
                   document.getElementById('shopcar').innerHTML="<p>加载失败...</p>"
                } ,3000);
            clearTimeout();          
        }
    }
}
</script>
<style lang="scss" scoped>
.shopcar {
    margin-top: 70%;
    text-align: center;
}
</style>