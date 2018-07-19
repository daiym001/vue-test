import Vue from 'vue'
// 0. 使用模块化机制编程，导入VueRouter，并调用 Vue.use(VueRouter)
import VueRouter from 'vue-router'
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import index from './content.vue'

Vue.use(VueRouter)
// 2. 定义路由
const routes = [
  // ps:router本身的匹配是从上到下的。
  //   如果在前面找到了匹配的路由,就跳转了;没有找到，就继续匹配下一条路由
  {path: '/:index(.*)', component: index}
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
/* eslint-disable no-new */
new Vue({
  el: '#indexArea',
  router: router
})
