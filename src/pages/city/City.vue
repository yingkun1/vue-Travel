<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter" ></city-list>
        <city-alphabet :cities="cities" @change="change" @changeLetter="changeLetter"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/static/mock/city.json')
                .then(res => this.getCityInfoSync(res))
        },
        getCityInfoSync(res){
            // console.log(res)
            res = res.data
            if(res.ret && res.data){
                this.cities = res.data.cities
                this.hotCities = res.data.hotCities
                // console.log("cities:"+this.cities)
                // console.log("hotCities"+this.hotCities)
            }
        },
        change(letter){
            // console.log("从List组件中带出来的值为:"+key)
            this.letter = letter
        },
        changeLetter(letter){
            // console.log("滑动带出来的值为："+letter)
            this.letter = letter
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style>

</style>
