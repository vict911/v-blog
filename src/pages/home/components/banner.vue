<template>
	<!-- swiper -->
	<swiper :options="swiperOption" ref="mySwiper">
	<!-- slides -->
		<swiper-slide>
			<img src="http://vict911.top/static/v-blog/imgs/banner.jpg">
		</swiper-slide>
		<swiper-slide>
			<img src="http://vict911.top/static/v-blog/imgs/banner.jpg">
		</swiper-slide>
	</swiper>
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

<style></style>
