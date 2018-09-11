<template>
	<div>
		<div class="top">
			<div class="container">
				<div class="contect">
					<font-awesome-icon :icon="['fab','weixin']" />
					<span>微信：rnr_911</span>
				</div>
				<div class="contect">
					<font-awesome-icon :icon="['fab','instagram']" />
					<span>Ins: hectorlance</span>
				</div>
				<div class="search">
					<animation-fade>
						<input type="text" class="search-ipt" placeholder="搜索专辑 歌手 文章" v-show="showSearch"/>
					</animation-fade>
					<font-awesome-icon :icon="['fas','search']" @click="showSearchIpt"/>
				</div>
			</div>
		</div>
		<div class="header">
			<div class="container">
				<router-link to="/">
					<div class="logo">
						<img src="http://vict911.top/static/v-blog/imgs/logo2.png">
					</div>
				</router-link>
				<ul class="nav">
					<li
					v-for="item in navInfo"
					:to="item.url"
					:key="item.id"
					:class="item.id == curNav ? 'cur' : ''"
					@click="handleSelect(item)"
					>{{item.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AnimationFade from '@common/animations/fade'
export default {
	name: 'homeHeader',
	data () {
		return {
			showSearch:false,
			curNavId:'0001'
		}
	},
	computed:{
		...mapState(['curNav'])
	},
	props:{
		navInfo:Array
	},
	components:{
		AnimationFade
	},
	methods: {
		...mapActions(['changeCurNav']),
		showSearchIpt () {
			this.showSearch = !this.showSearch
		},
		handleSelect (item) {
			this.changeCurNav (item)
			this.$router.push(item.url)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@styles/variables.scss';
	@import '@styles/mixins.scss';
	.top{
		line-height:$top-height;
		padding:0 10px;
		border-top:4px solid #000;
		background:$theme-color;
		color:#999;
		position:relative;
		@include box-sizing ();
		@include clear-both ();
		.contect{
			float:left;
			padding-right:10px;
			span{
				padding-left:5px;
			}
		}
		.search{
			position:absolute;
			height:100%;
			right:20px;
			cursor:pointer;
			@include v-center ();
			.search-ipt{
				width:200px;
				height:26px;
				border-radius:$radius;
				padding:0 $component-padding;
				margin-right:$component-margin;
				@include box-sizing ();
			}
		}
	}
	.header{
		height:$header-height;
		background:rgba(255,255,255,.86);
		z-index:1;
		.logo{
			float:left;
			height:$header-height;
			@include v-center ();
		}
		ul.nav{
			float:right;
			li{
				color:#aaa;
				float:left;
				padding:0 16px;
				line-height:$header-height;
				cursor:pointer;
			}
			li.cur{
				color:#333;
			}
		}
	}
</style>
