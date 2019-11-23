<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul class="item-wrapper">
            <li class="item border-bottom " v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        list:Array
    },
    data(){
         return{
             
         }
         
    }

}
</script>

<style lang='stylus' scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        margin-top : .4px
        line-height : .8rem
        background : #eee
        text-indent : .2rem
    .item-wrapper
            .item-img-wrapper
                overflow : hidden
                height : 0 
                padding-bottom : 37.09%
                .item-img
                    width : 100%
            .item-info
                .item-title
                    line-height : .54rem
                    font-size: .32rem
                .item-desc  
                    line-height : .4rem
                    color : #ccc
                    ellipsis()   
</style>

