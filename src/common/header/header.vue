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
      </div>
    </div>
    <div class="header">
      <div class="container">
        <router-link to="/">
          <div class="logo">
            <img src="http://vict911.top/static/v-blog/imgs/logo2.png">
          </div>
        </router-link>
        <font-awesome-icon
          class="bar-icon"
          :icon="['fas','bars']"
          @click="handleNavShow"
        />
        <ul class="nav">
          <li
          v-for="item in navInfo"
          :to="item.url"
          :key="item.id"
          :class="item.id == curNav ? 'cur' : ''"
          @click="handleSelect(item)"
          >{{item.name}}</li>
        </ul>
        <ul class="nav-mini" v-if="navMiniShow">
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
import axios from 'axios'

export default {
  name: 'homeHeader',
    data () {
      return {
      navInfo:[],
      curNavId:'0001',
      navMiniShow:false
    }
  },
  computed:{
    ...mapState(['curNav'])
  },
  // props:{
  //   navInfo:Array
  // },
  components:{
    AnimationFade
  },
  methods: {
    ...mapActions(['changeCurNav']),
    handleSelect (item) {
      this.changeCurNav (item)
      this.$router.push(item.url)
      this.navMiniShow = false
    },
    handleNavShow () {
      this.navMiniShow = !this.navMiniShow
    },
    getNavInfo () {
      axios.get('/static/v-blog/json/nav.json').then(this.getNavInfoSucc)
    },
    getNavInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.navInfo = data.navInfo
      }
    }
  },
  mounted () {
    this.getNavInfo ()
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
    @media screen and (max-width:900px){
      height:auto;
    }
    .logo{
      float:left;
      height:$header-height;
      @include v-center ();
    }
    .bar-icon{
      display:none;
    }
    @media screen and (max-width:900px){
      .logo{
        float:none;
        @include hv-center ();
      }

      .bar-icon{
        display:block;
        position:absolute;
        font-size:.4rem;
        top:40px;
        right:.4rem;
      }
    }
    ul.nav{
      float:right;
      @media screen and (max-width:900px){
      display:none;  
      }
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
    ul.nav-mini{
      display:none;
      @media screen and (max-width:900px){
        display:block;
        background:rgba(255,255,255,.86);
        padding:.2rem;
        text-align:center;
        border-top:1px solid $border-color;
        li{
          color:#333;
          font-size:.3rem;
          line-height:.6rem
        }
      }
    }
  }

</style>
