<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <!-- <swiper :options="swiperOption" v-if="showSwiper"> -->
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="item of imgs" :key="item">
                    <img class="gallery-img"  :src="item" alt="">
                </swiper-slide>   
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallery',
    data(){
        return {
            swiperOption:{
                pagination:"swiper-pagination",
                paginationType:'fraction',
                observeParents:true,
                observer:true
            }
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
        
    },
    props:{
        imgs:{
            type:Array,
            default(){
                return [
                ]
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            background #fff
            height 0
            width 100%
            padding-bottom 100%
            .gallery-img
                width 100%
                height 100%
            .swiper-pagination
                color #fff
</style>
