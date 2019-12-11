<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 显示的是当前路由地址所对应的内容,在index.js中有对应的说明 -->
    <keep-alive exclude="Detail">  <!--不需要重新渲染包裹的组件，不需要重新执行钩子函数，只需要渲染以前的内容即可-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
