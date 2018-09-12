<template>
  <div class="side-bar">
  	<div class="title">
  		所有分类
  	</div>
  	<ul>
  		<li>摇滚-rock n roll (4)</li>
  		<li>摇滚-rock n roll (4)</li>
  		<li>摇滚-rock n roll (4)</li>
  		<li>摇滚-rock n roll (4)</li>
  	</ul>
  </div>
</template>

<script>

export default {
  name: 'sideBar',

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
