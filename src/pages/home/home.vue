<template>
	<div>
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
import homeBanner from '@common/banner/banner'
import homeContent from '@common/content/content'
import homeFooter from '@common/footer/footer'
import sideBar from '@common/sideBar/sideBar'

export default {
  name: 'home',
  components: {
    homeBanner,
    homeContent,
    homeFooter,
    sideBar
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