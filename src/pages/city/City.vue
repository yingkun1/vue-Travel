<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
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
            hotCities:[]
        }
    },
    methods:{
        getCityInfo(){
            axios.get('/static/mock/city.json')
                .then(res => this.getCityInfoSync(res))
        },
        getCityInfoSync(res){
            console.log(res)
            res = res.data
            if(res.ret && res.data){
                this.cities = res.data.cities
                this.hotCities = res.data.hotCities
                console.log("cities:"+this.cities)
                console.log("hotCities"+this.hotCities)
            }
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style>

</style>
