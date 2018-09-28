<template>
    <div class="wraper container">
      <div class="side-bar-wraper">
        <vue-fuse
          placeholder="搜索专辑、作者、分类"
          class="search-ipt"
          :keys="keys"
          :list="albumList"
          :defaultAll="true"
          event-name="resultsFunc"
        ></vue-fuse>
        <side-bar-classify @searchStyle="handleSearchStyle"/>
      </div>
      <div class='content-wraper'>
        <ul>
          <!-- <li v-for="item in results" :key="item.id">{{item.title}}</li> -->
        </ul>
        <home-content :results="results"/>
      </div>
    </div>
</template>

<script>
import sideBarClassify from '@common/sideBar/classify'
import homeContent from '@common/content/content'
import axios from 'axios'
import { mapState,mapActions } from 'vuex'
export default {
  name: 'disc',
  components: {
    sideBarClassify,
    homeContent
  },
  data () {
    return {
    keys:['title','author','style'],
    results: []
    }
  },
  computed: {
    ...mapState(['albumList'])
  },
  methods: {
    ...mapActions(['getAlbumInfoAction']),
    handleSearchStyle () {
      this.results = []
    },
    getAlbumInfo () {
      axios.get('/static/v-blog/json/albums.json?' + new Date().getTime()).then(this.getAlbumInfoSucc)
    },
    getAlbumInfoSucc (res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data.albumInfo)
        this.getAlbumInfoAction(data.albumInfo)
      }
    }
  },
  mounted () {
    this.getAlbumInfo()
    this.$on('resultsFunc', results => {
      this.results = results
    })

  }
}
</script>

<style lang="scss" scoped>
  @import '@styles/variables.scss';
  @import '@styles/mixins.scss';
  .wraper{
    display:flex;
    @media screen and (max-width:900px){
      display:block;
    }
  } 
  .content-wraper{
    padding:60px 0;
    flex:3;
  }
  .side-bar-wraper{
    flex:1;
    padding:60px 60px 60px 0;
    @media screen and (max-width:900px){
      padding:60px 0 0;
    }
  .search-ipt{
    @include box-sizing ();
    width:100%;
    border:1px solid #ccc;
    border-radius:$radius;
    line-height:$input-height;
    padding:0 $input-padding;
    margin-bottom:10px;
  }
  } 
</style>