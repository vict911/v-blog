<template>
	<div>
    <home-header :navInfo="navInfo"></home-header>
    disc page
	</div>
</template>

<script>
import homeHeader from '@common/header/header.vue'

export default {
  name: 'disc',
  components:{
    homeHeader
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

<style lang="scss" scoped></style>