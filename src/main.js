// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from './components/goods/goods.vue'
import seller from './components/seller/seller.vue'
import ratings from './components/ratings/ratings.vue'
import vueresource from 'vue-resource'
Vue.use(vueresource)
Vue.use(VueRouter)
const routes = [
  { path: '/goods', component: goods },
  { path: '/seller', component: seller },
  { path: '/ratings', component: ratings },
  { path: '*', redirect: '/goods' }
]
Vue.config.productionTip = false
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
