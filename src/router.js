//导入路由组件
import VueRouter from 'vue-router'

//导入 主要路由组件
import Home from './components/tabber/Home.vue'
import Search from './components/tabber/Search.vue'
import Shopcar from './components/tabber/Shopcar.vue'
import Member from './components/tabber/Member.vue'

import NewsList from './components/function/NewsList.vue'
import Video from './components/function/video.vue'
import Photo from './components/function/Photo.vue'
import Shopping from './components/function/Shopping.vue'
import Words from './components/function/words.vue'
import Contacts from './components/function/contacts.vue'

//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' }, //redirect路由重定向
        { path: '/home', component: Home},
        { path: '/search', component: Search},
        { path: '/shopcar', component: Shopcar},
        { path: '/member', component: Member},
        { path: '/home/newslist', component: NewsList },
        { path: '/home/video', component: Video },
        { path: '/home/photo', component: Photo },
        { path: '/home/shopping', component: Shopping },
        { path: '/home/words', component: Words },
        { path: '/home/contacts', component: Contacts }
    ],
    linkActiveClass: 'mui-active'
})
//把路由对象暴露出去
export default router
