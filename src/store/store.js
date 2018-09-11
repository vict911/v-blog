import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCurNav = localStorage.curNav ? localStorage.curNav : '0001'

export default new Vuex.Store({
  state: {
  	curNav:defaultCurNav
  },
  actions: {
  	changeCurNav (ctx,cur) {
  		ctx.commit('changeCurNavAction',cur)
  	}
  },
  mutations: {
  	changeCurNavAction (state,cur) {
  		state.curNav = cur.id;
  		try{
  			localStorage.curNav = state.curNav
  		}catch (e) {}
  	}
  }
})
