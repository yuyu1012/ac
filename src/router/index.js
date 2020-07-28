import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history', // 不带#的模式
    routes, // 配置所有路由
})

export default router