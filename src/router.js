//导入路由组件
import VueRouter from 'vue-router'

//导入 主要路由组件
import Home from './components/tabber/Home.vue'
import Search from './components/tabber/Search.vue'
import Shopcar from './components/tabber/Shopcar.vue'
import Member from './components/tabber/Member.vue'

import NewsList from './components/function/NewsList.vue'
import Job from './components/function/Job.vue'
import Shopping from './components/function/Shopping.vue'
import Community from './components/function/Community.vue'
import Words from './components/function/words.vue'
import LAF from './components/function/LAF.vue'

import one from './components/setting/one.vue'
import two from './components/setting/two.vue'
import three from './components/setting/three.vue'
import four from './components/setting/four.vue'
import five from './components/setting/five.vue'


//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' }, //redirect路由重定向
        { path: '/home', component: Home},
        { path: '/search', component: Search},
        { path: '/shopcar', component: Shopcar},
        { path: '/member', component: Member},
        { path: '/home/newslist', component: NewsList },
        { path: '/home/job', component: Job },
        { path: '/home/shopping', component: Shopping },
        { path: '/home/community', component: Community },
        { path: '/home/words', component: Words },
        { path: '/home/laf', component: LAF },
        { path: '/member/one', component: one },
        { path: '/member/two', component: two },
        { path: '/member/three', component: three },
        { path: '/member/four', component: four },
        { path: '/member/five', component: five }
    ],
    linkActiveClass: 'mui-active'
})
//把路由对象暴露出去
export default router
