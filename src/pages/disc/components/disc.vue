<template>
    <div class="wraper container">
      <div class="side-bar-wraper">
        <side-bar></side-bar>
      </div>
      <div class='content-wraper'>
        <home-content></home-content>
      </div>
    </div>
</template>

<script>
import sideBar from '@common/sideBar/sideBar'
import homeContent from '@common/content/content'

export default {
  name: 'disc',
  components: {
    sideBar,
    homeContent
  }
}
</script>

<style lang="scss" scoped>
  @import '@styles/variables.scss';
  @import '@styles/mixins.scss';
  .wraper{
    display:flex;
    @media screen and (max-width:900px){
      display:block;
    }
  } 
  .content-wraper{
    padding:60px 0;
    flex:3;
  }
  .side-bar-wraper{
    flex:1;
    padding:60px 60px 60px 0;
    @media screen and (max-width:900px){
      padding:0 0 60px;
    }
  } 
</style>