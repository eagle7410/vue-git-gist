// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GitApiProvider from './plugins/GitApiProvider'
import Page from './components/Tools/Page'

Vue.component('page', Page);

Vue.config.productionTip = false;
Vue.use(GitApiProvider);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
