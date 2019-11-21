import Vue from 'vue'   //引入了vue
import Router from 'vue-router' //引入了vue-router
// import HelloWorld from '@/components/HelloWorld'  //@指的是src下的目录   
import Home from '@/pages/home/Home'

Vue.use(Router)       //注册vue-router

export default new Router({ 
  routes: [
    {
      path: '/',      //根路径的路由   
      name: 'Home',
      component: Home
    }
  ]
})
