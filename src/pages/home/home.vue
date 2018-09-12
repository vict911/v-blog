<template>
	<div>
    <home-header :navInfo="navInfo" class="c-header"></home-header>
		<home-banner></home-banner>
		<div class="wraper container">
      <div class='content-wraper'>
        <home-content></home-content>
      </div>
      <div class="side-bar-wraper">
        <side-bar></side-bar>
      </div>
    </div>
		<home-footer></home-footer>
	</div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@common/header/header'
import homeBanner from '@common/banner/banner'
import homeContent from '@common/content/content'
import homeFooter from '@common/footer/footer'
import sideBar from '@common/sideBar/sideBar'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeBanner,
    homeContent,
    homeFooter,
    sideBar
  },
  data () {
    return {
      navInfo:[{
        id:'0001',
        name:'家-HOME',
        url:'/'
      },{
        id:'0002',
        name:'碟-DISC',
        url:'/disc'
      },{
        id:'0003',
        name:'家-MEMMORY',
        url:'/memory'
      }]
    }
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
    padding:60px 0 60px 60px;
    @media screen and (max-width:900px){
      padding:0 0 60px;
    }
  }
</style>