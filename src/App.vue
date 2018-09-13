<template>
  <div id="app">
    <home-header></home-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import homeHeader from '@common/header/header'
  export default {
    name:'app',
    components:{
      homeHeader
    }
  }
</script>
<style lang="scss">

</style>
