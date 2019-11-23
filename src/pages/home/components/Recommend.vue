<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul class="item-wrapper">
            <li class="item border-bottom " v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    data(){
        return {
                recommendList:[
                {
                    id:'0001',
                    imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/f660af7d-9607-4329-a5e4-9a335af2f8c2.jpg_r_480x320x90_c38b894c.jpg',
                    title:'大连亚圣海洋世界',
                    desc:'浪漫大连首站,浪漫的海洋主题乐园'
                },
                {
                    id:'0002',
                    imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/f660af7d-9607-4329-a5e4-9a335af2f8c2.jpg_r_480x320x90_c38b894c.jpg',
                    title:'大连亚圣海洋世界',
                    desc:'浪漫大连首站,浪漫的海洋主题乐园'
                },
                {
                    id:'0003',
                    imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/f660af7d-9607-4329-a5e4-9a335af2f8c2.jpg_r_480x320x90_c38b894c.jpg',
                    title:'大连亚圣海洋世界',
                    desc:'浪漫大连首站,浪漫的海洋主题乐园'
                },
                {
                    id:'0004',
                    imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/f660af7d-9607-4329-a5e4-9a335af2f8c2.jpg_r_480x320x90_c38b894c.jpg',
                    title:'大连亚圣海洋世界',
                    desc:'浪漫大连首站,浪漫的海洋主题乐园'
                },
                {
                    id:'0005',
                    imgUrl:'https://imgs.qunarzz.com/vs_ceph_vs_tts/f660af7d-9607-4329-a5e4-9a335af2f8c2.jpg_r_480x320x90_c38b894c.jpg',
                    title:'大连亚圣海洋世界',
                    desc:'浪漫大连首站,浪漫的海洋主题乐园'
                }
            ]
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
        .item
            overflow : hidden
            display : flex
            height : 1.9rem
            .item-img
                width : 1.7rem
                height : 1.7rem
                padding : .1rem
            .item-info
                flex : 1
                padding : .1rem
                .item-title
                    line-height : .54rem
                    font-size: .32rem
                .item-desc  
                    line-height : .4rem
                    color : #ccc
                    ellipsis()
                .item-button
                    line-height : .44rem
                    background : #ff9300
                    padding : 0 .1rem
                    margin-top : .2rem
                    border-radius : .06rem
                    color : #fff         
</style>
