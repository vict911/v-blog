import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let defaultCurNav = localStorage.curNav ? localStorage.curNav : '0001'

export default new Vuex.Store({
  state: {
    curNav:defaultCurNav,
    albumList:[]
  },
  actions: {
    changeCurNav (ctx,cur) {
      ctx.commit('changeCurNavAction',cur)
    },
    getAlbumInfoAction (ctx,list) {
      ctx.commit('getAlbumInfoMutation',list)
    }
  },
  mutations: {
    changeCurNavAction (state,cur) {
      state.curNav = cur.id;
      try{
        localStorage.curNav = state.curNav
      }catch(e){console.log(e)}
    },
    getAlbumInfoMutation (state,list) {
      state.albumList = list
    }
  }
})
