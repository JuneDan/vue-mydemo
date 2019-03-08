//导入路由组件
import VueRouter from 'vue-router'

//导入 主要路由组件
import Home from './components/tabber/Home.vue'
import Search from './components/tabber/Search.vue'
import Shopcar from './components/tabber/Shopcar.vue'
import Member from './components/tabber/Member.vue'

import NewsList from './components/news/NewsList.vue'
import Video from './components/video/video.vue'

//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' }, //redirect路由重定向
        { path: '/home', component: Home},
        { path: '/search', component: Search},
        { path: '/shopcar', component: Shopcar},
        { path: '/member', component: Member},
        { path: '/home/newslist', component: NewsList },
        { path: '/home/video', component: Video }
    ],
    linkActiveClass: 'mui-active'
})
//把路由对象暴露出去
export default router
