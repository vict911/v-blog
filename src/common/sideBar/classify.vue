<template>
  <div class="side-bar">
    <div class="title">
    所有分类
    </div>
    <ul>
      <li @click="selectAllStyles">全部分类 ({{this.albumList.length}})</li>
      <li 
        v-for="(item, index) in styleList" 
        :key="index"
        @click="changeStyle(item.name)"
      >{{item.name+" ("+item.count+")"}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'sideBarClassify',
  computed:{
    ...mapState(['albumList']),
    styleList () {
      const styleList = []
      let stylenames = []
      this.albumList.forEach((item) => {
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
  },
  methods:{
    changeStyle (style) {
      this.$emit('searchStyle')
      this.changeStyleAction(style)
    },
    ...mapActions(['changeStyleAction']),
    ...mapMutations(['selectAllStyles'])
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
    margin-bottom:10px;
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
        cursor:pointer;
        &:hover{
          color:#999;
        }
			}
		}
	}
</style>
