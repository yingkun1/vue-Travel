import Vue from 'vue'   //引入了vue
import Router from 'vue-router' //引入了vue-router
// import HelloWorld from '@/components/HelloWorld'  //@指的是src下的目录   
// import Home from '@/pages/home/Home'                 //导入Home组件
// import City from '@/pages/city/City'                 //导入City组件
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)       //注册vue-router

export default new Router({ 
  routes: [
    {
      path: '/',      //根路径的路由   
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path:'/city',
      name:'City',
      component: () => import('@/pages/city/City')
    },{
      path:'/detail/:id',    //动态路由
      name:'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior(to,from,savePosition){
    return {
      x:0,
      y:0
    }
  }
})
