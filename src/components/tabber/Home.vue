<template>
    <div>
        <!-- 轮播图区 -->
        <mt-swipe :auto="3000">
            <!-- 调用接口API -->
            <!-- <mt-swipe-item v-for="i in lunbotulist" :key="i.url"><a href="#"><img :src="i.img"></a></mt-swipe-item> -->
            <!-- 不调用API -->
            <mt-swipe-item><a href="#"><img src="../../images/01210.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href="#"><img src="../../images/timg.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href="#"><img src="../../images/nv.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href="#"><img src="../../images/kii.jpg"></a></mt-swipe-item>
            <mt-swipe-item><a href="#"><img src="../../images/kouhong.jpg"></a></mt-swipe-item> 
            <mt-swipe-item><a href="#"><img src="../../images/t.jpg"></a></mt-swipe-item>
        </mt-swipe>
        <!--功能区-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		        <img src="../../images/menu1.png">
		        <div class="mui-media-body">校园资讯</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shopping">
		        <img src="../../images/menu2.png">
		        <div class="mui-media-body">物品转转</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/community">
		        <img src="../../images/menu3.png">
		        <div class="mui-media-body">社区分享</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/words">
		        <img src="../../images/menu4.png">
		        <div class="mui-media-body">今日留言</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/job">
		        <img src="../../images/menu5.png">
		        <div class="mui-media-body">兼职发布</div></router-link></li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/laf">
		        <img src="../../images/menu6.png">
		        <div class="mui-media-body">失物招领</div></router-link></li>
		</ul> 
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
                this.$http.get('http://www.liulongbin.top:3005/api/getlunbo').then(result =>{
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
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.mui-table-view{
    background-color: #fff;
    img {
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
</style>