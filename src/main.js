//入口文件

//导入Vue框架
import Vue from 'vue'
//导入APP组件
import App from './App.vue'
//按需导入mint-ui框架
import  Header  from 'mint-ui/lib/header'
import 'mint-ui/lib/header/style.css'
Vue.component(Header.name, Header)
//导入MUI的样式
import './lib/mui/css/mui.min.css'


var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(App)
})