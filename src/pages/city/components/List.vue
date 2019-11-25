<template>
    <div class="list" ref="wrapper"> 
       <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <!-- <div class="button">{{this.$store.state.city}}</div> -->
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleClickCity(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom" >
                    {{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleClickCity(innerItem.name)">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    watch:{
        letter(){
            if(this.letter){
                const element =  this.$refs[this.letter][0]
                // console.log(element)
                this.scroll.scrollToElement(element)
            }
            // console.log("letter发生了变化:"+this.letter)
        }
    },
    computed:{
        // ...mapState(['city'])
        ...mapState({
            currentCity:'city'
        }),
    },
    methods:{
        // handleClickCity(e){
        //     this.$store.dispatch("changeCity",e.target.innerText)
        //     // console.log(e.target.innerText)
        // }
        handleClickCity(city){
            // console.log("点击后得到的城市:"+city)
            // this.$store.dispatch("changeCity",city)
            // this.$store.commit("changeCity",city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted(){
        this.scroll =  new BScroll(this.$refs.wrapper);
    },
}
</script>

<style lang='stylus' scoped>
     @import '~styles/varibles.styl'
     .list
        overflow hidden
        position absolute
        left 0
        top 1.58rem
        right 0
        bottom 0
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            color #666
            font-size .26rem
        .border-topbottom
            &:before
                border-color #ccc
            &:after
                border-color #ccc
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left
                width 33.33%
                .button
                    text-align center
                    margin .1rem
                    padding .1rem 0
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                height .76rem
                color #666
                padding-left .2rem
            .border-bottom
                &:before
                    border-color #ccc


</style>
