<template>
    <div>
      <div class="item" v-for="(item,index) of list" :key="index">
          <div class="item-title border-bottom">
              <span class="item-title-icon"></span>
              {{item.title}}
          </div>
          <!-- 递归组件的使用 -->
          <div v-if="item.children">
            <detail-list :list="item.children" class="item-children"></detail-list>
          </div>
      </div>  
    </div>
</template>

<script>
export default {
    name:'DetailList',
    data(){
        return {
           
        }
    },
    props:{
        list:Array
    },
    methods:{
       
    },
    activated(){
        
    },
    deactivated(){
        
    }
}
</script>

<style lang='stylus' scoped>
    .item-title{
        line-height : .8rem
        font-size : .32rem
        padding : 0 .2rem
    }
    .border-bottom{

    }
    .item-title-icon{
        position : relative
        left : .06rem
        top : .06rem
        display:inline
        width : .36rem
        height : .36rem
        background:no-repeat url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem; 
    }

    .item-children{
        padding : 0 .4rem

    }
</style>
  