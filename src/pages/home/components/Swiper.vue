<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img"  :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    
</template>

<script>
export default {
    name:'HomeSwiper',
    data(){
        return {
            swiperOption:{
                pagination:'.swiper-pagination',
                loop:true
            },
            swiperList:[
                {
                    id:'001',
                    imgUrl:'https://imgs.qunarzz.com/sight/p0/1604/85/8557f0d167c9da5890.img.jpg_710x360_428adb19.jpg'
                },
                {
                    id:'002',
                    imgUrl:'https://imgs.qunarzz.com/sight/p79/201211/06/cb2677b88c36471c93835fbb.jpg_710x360_b92aaaf6.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper
        background : #eee
        .swiper-img
            width : 100%
            height : 2.5rem
</style>
