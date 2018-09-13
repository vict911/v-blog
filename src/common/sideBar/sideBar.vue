<template>
  <div class="side-bar">
  	<div class="title">
  		所有分类
  	</div>
  	<ul>
      <li v-for="(item, index) in styleList" :key="index">{{item.name+"("+item.count+")"}}</li>
  	</ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'sideBar',
  computed:{
    ...mapState(['albumList']),
    styleList () {
      const styleList = []
      let stylenames = []
      this.albumList.forEach((item,index) => {
        let styleItem = {
          name:'',
          count:0
        }
        if(stylenames.indexOf(item.style) < 0){
          styleItem.name = item.style
          styleItem.count = 1
          styleList.push(styleItem)
          stylenames.push(item.style)
        }else{
          styleList[stylenames.indexOf(item.style)].count ++
        }
      })
      return styleList
    }
  }
}
</script>

<style lang="scss" scoped>
	@import '@styles/variables.scss';
	@import '@styles/mixins.scss';
	.side-bar{
		border:1px solid $border-color;
		border-radius:$radius;
		background:#fff;
		padding:20px;
		@media screen and (max-width:900px){
			border:none;
			border-radius:0;
		}
		.title{
			font-size:.4rem;
			line-height:.8rem;
			border-bottom:1px solid $border-color;
		}
		ul{
			padding-top:.2rem;
			li{
				font-size:.28rem;
				line-height:.6rem;
			}
		}
	}
</style>
