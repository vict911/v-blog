<template>
	<div class="content-container">
		<div class="content-item" v-for="item in showList" :key="item.id"><cd-box :albumInfo="item"></cd-box></div>
	</div>
</template>

<script>
import cdBox from './components/cdBox'
import { mapState } from 'vuex'

export default {
  name: 'homeContent',
  components:{
   cdBox
  },
  props: {
    results:Array
  },
  computed: {
    showList () {
      return (this.results && this.results.length!=0) ? this.results : this.albumShowList
    },
    ...mapState(['albumShowList'])
  }
}
</script>

<style lang="scss" scoped>
	@import '@styles/variables.scss';
	@import '@styles/mixins.scss';
	.content-container{
		border:1px solid $border-color;
		border-radius:$radius;
		background:#fff;
		padding:20px;
		display:flex;
		flex-wrap: wrap;
		@media screen and (max-width:900px){
			border-radius:0;
			border:none;
		}
	}
	.content-item{
		flex:1;
		min-width:250px;
		max-width:300px;
		margin:.2rem;
		@media screen and (max-width:900px){
			max-width:100%;	
		}
	}
</style>
