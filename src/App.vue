<template>
  <div id="app">
    <home-header></home-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <home-footer></home-footer>
  </div>
</template>
<script>
  import homeHeader from '@common/header/header'
  import homeFooter from '@common/footer/footer'
  export default {
    name:'app',
    components:{
      homeHeader,
      homeFooter
    }
  }
</script>
<style lang="scss">

</style>
