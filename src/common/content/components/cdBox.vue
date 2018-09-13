<template>
	<div>
	  <div class="cd-box">
	  	<h3 class="title">{{this.albumInfo.title}}</h3>
	  	<p class="author">{{this.albumInfo.author}}</p>
	  	<span class="price">{{this.albumInfo.price}}</span>
	  	<img class="album-img" :src="albumInfo.imgUrl">
	  	<p class="music-style">{{this.albumInfo.style}}</p>
	  </div>
	</div>
</template>

<script>

export default {
  name: 'cdBox',
  props:{
    albumInfo: Object
  }
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
      @include ellipsis ();
		}
		.author{
			font-size:.32rem;
			line-height:.8rem;
      @include ellipsis ();
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
      @include ellipsis ();
		}
		.music-style{
			font-size:.24rem;
			line-height:.8rem;
			color:#999;
      @include ellipsis ();
		}
	}
</style>
