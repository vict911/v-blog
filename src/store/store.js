import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albumList:[],
    albumShowList:[]
  },
  actions: {
    getAlbumInfoAction (ctx, list) {
      ctx.commit('getAlbumInfoMutation',list)
    },
    changeStyleAction(ctx, style){
      ctx.commit('changeStyleMutation',style)
    }
  },
  mutations: {
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
