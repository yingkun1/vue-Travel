<template>
    <div>
       <home-header></home-header>
       <home-swiper></home-swiper>
       <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header'        //引入这个组件之后还需要注册，因为这是一个局部组件
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style>
</style>

// 单页应用，将当前页面删除，使用js重新渲染这个页面
