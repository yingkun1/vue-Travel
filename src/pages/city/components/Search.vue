<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" v-model="keyword"  placeholder="输入城市名称或拼音"/>
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li  class="search-item border-bottom"  v-for="item in list" :key="item.id">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>

    
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    data(){
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.length
        }
    },
    props:{
        cities:Object
    },
    watch:{
        keyword(){
            // 节流
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return 
            }
            this.timer = setTimeout(()=>{
                let result = []
                for(let i in this.cities){
                    this.cities[i].forEach(element => {
                        if(element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1){
                            result.push(element)
                        }
                    });
                }
                this.list = result
            },100)

        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            box-sizing border-box
            height .62rem
            line-height .62rem
            width 100% 
            text-align center
            border-radius .06rem
            color #666
            padding 0 .1rem
    .search-content
        overflow hidden
        z-index 1
        background #eee
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background #fff
            
</style>
