<template>
    <div class="banner">
        <img class="banner-img" src="https://imgs.qunarzz.com/p/tts5/1811/2a/f605ec46c493b302.jpg_r_390x260x90_ab06434f.jpg" alt="">
        <div class="banner-info">
            <div class="banner-title">大连圣亚海洋公园(AAAA景区)</div>
            <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;</span>
                39
            </div>
        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom  55%
        color #fff
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                padding 0 .4rem
                height .32rem
                line-height .32rem
                margin-top .14rem
                border-radius .2rem
                background rgba(0,0,0,8)
                font-size .24rem
                .banner-icon
                    font-size .24rem
</style>
