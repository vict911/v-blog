<template>
	<div>
	  <div class="cd-box">
	  	<h3 class="title">Ocean’s Kingdom</h3>
	  	<p class="author">paul McCartney</p>
	  	<span class="price">￥150</span>
	  	<img class="album-img" src="http://vict911.top/static/v-blog/imgs/cd-1.jpg">
	  	<p class="music-style">摇滚-ROCK N ROLL</p>
	  </div>
	</div>
</template>

<script>

export default {
  name: 'cdBox',

}
</script>

<style lang="scss" scoped>
	@import '@styles/variables.scss';
	@import '@styles/mixins.scss';
	.cd-box{
		border:1px solid $border-color;
		padding:.4rem .4rem 0;
		position:relative;

		.title{
			font-size:.5rem;
			font-weight:normal;
			line-height:.8rem;
		}
		.author{
			font-size:.32rem;
			line-height:.8rem;
		}
		.album-img{
			width:100%;
		}
		.price{
			position:absolute;
			top:1.2rem;
			right:.4rem;
			font-size:.5rem;
			line-height:.8rem;
			font-weight:bold;
		}
		.music-style{
			font-size:.24rem;
			line-height:.8rem;
			color:#999;
		}
	}
</style>
