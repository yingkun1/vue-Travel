<template>
    <div>
       <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header'        //引入这个组件之后还需要注册，因为这是一个局部组件
export default {
    name:'Home',
    components:{
        HomeHeader
    }
}
</script>

<style>
</style>

// 单页应用，将当前页面删除，使用js重新渲染这个页面
