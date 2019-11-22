<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <dir class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </dir>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>   
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return {
            swiperOption:{},
            iconList:[
                {
                    id:'001',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'热门景点'
                },
                {
                    id:'002',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'滑雪季'
                },
                {
                    id:'003',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'泡温泉'
                },
                {
                    id:'004',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'动植物园'
                },
                {
                    id:'005',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'热门景点'
                },
                {
                    id:'006',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'热门景点'
                },
                {
                    id:'007',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'热门景点'
                },
                {
                    id:'008',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'热门景点'
                },
                {
                    id:'009',
                    imgUrl:'https://s.qunarzz.com/homenode/images/touchheader/innBnb.png',
                    desc:'一日游'
                },
            ]
        }
    },
    computed:{
        pages(){
            const pages = []
            this.iconList.forEach((item,index)=>{
                const page = Math.floor(index/8)
                //对于pages[0]也是一个数组，假如还没有创建该数组，先进行创建，如果存在，就直接往里面添加///元素
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages;
        }
    }

}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'    
    .icons >>> .swiper-container
        height:0
        padding-bottom : 50%
        .icon
            position : relative
            overflow : hidden
            float : left 
            padding-bottom : 25%
            width : 25%
            height : 0
            .icon-img   
                position : absolute
                top : 0
                left : 0
                right : 0 
                bottom : .44rem
                box-sizing :border-box
                padding : .1rem
                .icon-img-content   
                    height : 100%
                    display : block
                    margin :0 auto
            .icon-desc
                position: absolute
                bottom : 0
                left : 0
                right : 0
                line-height: .44rem
                height: .44rem
                color : $darkTextColor
                text-align : center
                ellipsis()

</style>
