<template>
	<div>
    <home-header :navInfo="navInfo" class="c-header"></home-header>
		<home-banner class="c-banner"></home-banner>
		<home-content></home-content>
		<home-footer></home-footer>
	</div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '@common/header/header.vue'
import homeBanner from './components/banner.vue'
import homeContent from './components/content.vue'
import homeFooter from './components/footer.vue'

export default {
  name: 'home',
  components: {
    homeHeader,
    homeBanner,
    homeContent,
    homeFooter
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

</style>