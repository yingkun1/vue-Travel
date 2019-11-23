<template>
    <ul class="list">
        <li 
        class="item" 
        v-for="item of letters" 
        :key="item"
        :ref="item" 
        @click="handleLetterClick(item)"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove" 
        @touchend="handTouchEnd">{{item}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data(){
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters;
        }
    },
    methods:{
        handleLetterClick(key){
            this.$emit("change",key);
        },
        handleTouchStart(){
            // console.log("开始滑动")
            this.touchStatus = true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                // 函数节流，延时一些频率高的操作
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    // console.log("滑动运行")
                    const startY = this.startY
                    let touchY = e.touches[0].clientY -79 
                    let index = Math.floor((touchY - startY)/20)
                    // console.log("第"+index+"个字母")
                    // console.log(this.letters[index])
                    if(index >= 0 && index < this.letters.length){
                        this.$emit("changeLetter",this.letters[index])
                    }
                    // console.log(startY)
                },16)
            }
        },
        handTouchEnd(){
            // console.log("滑动结束")
            this.touchStatus = false
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .4rem
            color $bgColor
</style>
