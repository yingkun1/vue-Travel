<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
   name:'Fade'
}
</script>

<style  scoped>
    .v-enter{
        opacity: 0;
    }
    .v-leave-to{
        opacity: 0;
    }
    .v-enter-active{
        transition: opacity .5s;
    }
    .v-leave-active{
        transition: opacity .5s;
    }

</style>
