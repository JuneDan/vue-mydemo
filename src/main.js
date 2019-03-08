//配置入口文件

//导入 Vue 框架
import Vue from 'vue'

//导入APP组件
import App from './App.vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入 router.js 路由模块
import router from './router.js'

//按需导入 mint-ui 框架
import { Header, Swipe, SwipeItem, CellSwipe } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(CellSwipe.name, CellSwipe)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(App),
    router
})