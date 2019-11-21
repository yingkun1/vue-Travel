// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  //vue项目的路由配置内容
import fastClick from 'fastclick'     //解决移动端300ms延时的问题
import 'styles/reset.css'    //解决边距的问题
import 'styles/border.css'   //解决一像素边框的问题
import 'styles/iconfont.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
// 这个是根实例，挂载到index.html上
new Vue({
  el: '#app', //挂载点，index.html上<div id="app"></div>
  router,     //使用vue-router
  components: { App }, //这个App被认为是一个局部组件 
  template: '<App/>'  //根实例会将这个App局部组件渲染到页面上
})
