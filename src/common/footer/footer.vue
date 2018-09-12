<template>
  <div class="footer">
  	<div class="container">京ICP备16065801号-1</div>
  </div>
</template>

<script>

export default {
  name: 'homeFooter',

}
</script>

<style lang="scss" scoped>
	@import '@styles/variables.scss';
	@import '@styles/mixins.scss';
	.footer{
		line-height:$footer-height;
		color:#a5a5a5;
		background:#fff;
		box-shadow:0 0 5px rgba(0,0,0,.1);
	}
</style>
