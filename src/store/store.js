import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCurNav = localStorage.curNav ? localStorage.curNav : '0001'

export default new Vuex.Store({
  state: {
    curNav:defaultCurNav,
    albumList:[],
    albumShowList:[]
  },
  actions: {
    changeCurNav (ctx, cur) {
      ctx.commit('changeCurNavAction',cur)
    },
    getAlbumInfoAction (ctx, list) {
      ctx.commit('getAlbumInfoMutation',list)
    },
    changeStyleAction(ctx, style){
      ctx.commit('changeStyleMutation',style)
    }
  },
  mutations: {
    changeCurNavAction (state, cur) {
      state.curNav = cur.id;
      try{
        localStorage.curNav = state.curNav
      }catch(e){console.log(e)}
    },
    getAlbumInfoMutation (state, list) {
      state.albumList = list
      state.albumShowList = state.albumList
    },
    changeStyleMutation (state, style) {
      state.albumShowList = state.albumList.filter((item) => {
        return item.style === style
      })
    },
    selectAllStyles (state) {
      state.albumShowList = state.albumList
    }
  }
})
