<template>
    <div>
       <home-header></home-header>
       <home-swiper :list="swiperList"></home-swiper>
       <home-icons :list="iconList"></home-icons>
       <home-recommend :list="recommendList"></home-recommend>
       <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'        //引入这个组件之后还需要注册，因为这是一个局部组件
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data(){
        return {
            iconList:[],
            recommendList:[],
            swiperList:[],
            weekendList:[],
            lastCity:''
        }
    },
    methods:{
        getHomeInfo(){
            // console.log("getHomeInfo被调用了")
            axios.get('/static/mock/index.json?city' + this.city )
                .then(res=>this.getHomeInfoSync(res))
        },
        getHomeInfoSync(res){
            // console.log(res.data)
            if(res.data.ret && res.data.data){
                this.recommendList = res.data.data.recommendList;
                this.swiperList = res.data.data.swiperList;
                this.weekendList = res.data.data.weekendList;
                this.iconList = res.data.data.iconList;
            }
            
        }
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
        // console.log("页面被挂载了")
        this.lastCity = this.city
        console.log('mounted')
        this.getHomeInfo()
    },
    // 当我们使用keep-alive时，会尽可能的使用本地缓存，但有时我们又在某些位置不想使用本地缓存
    // 我们可以使用activated生命周期函数
    activated(){
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
        console.log("activated")
    }
}
</script>

<style>
</style>

// 单页应用，将当前页面删除，使用js重新渲染这个页面
