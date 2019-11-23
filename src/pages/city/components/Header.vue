<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-icon">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .header
        position relative
        height $headerHeight
        line-height $headerHeight
        overflow hidden
        color #fff
        text-align center
        background $bgColor
        font-size .32rem
        .header-icon
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            position absolute
            color #fff
</style>
