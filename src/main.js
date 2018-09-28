import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './registerServiceWorker'
//全局样式
import '@styles/reset.css'
import '@styles/main.scss'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAd, faCoffee, faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { faWeixin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
library.add([
		faAd,
		faCoffee,
		faWeixin,
		faInstagram,
		faFolderOpen,
		faSearch,
		faBars
	])
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//fuse-search
import VueFuse from 'vue-fuse'
Vue.use(VueFuse)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
