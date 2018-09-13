<template>
	<div class="banner-container">
		<!-- swiper -->
		<swiper class="banner" :options="swiperOption" ref="mySwiper">
		<!-- slides -->
			<swiper-slide>
				<img src="http://vict911.top/static/v-blog/imgs/banner.jpg">
				<div class="banner-title">
					<h3>THE VICT'S</h3>
					<P>Enjoy what you enjoy…</P>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>

export default {
	name: 'homeBanner',
	data () {
		return {
			swiperOption:{
				autoplay:false
			}
		}
  }
}
</script>

<style lang="scss" scoped>
@import '@styles/mixins.scss';
.banner-container{
	width:100%;
	position:relative;
	img{
		width:100%;
	}

	.banner-title{
		background:rgba(0,0,0,.6);
		color:#fff;
		text-align:center;
		z-index:2;
		padding:30px;
		@include pos-hv-center ();
		h3{
			font-size:40px;
			margin-bottom:20px;
			font-weight:normal;
		}
		p{
			font-size:16px;
		}
		@media screen and (max-width:900px){
			display:none;
		}
	}
}
</style>
