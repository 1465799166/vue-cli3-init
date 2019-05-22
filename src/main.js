import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import Cookies from 'js-cookie'
// import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'
import '@/icons'

import common from '@/utils/common' // 全局方法
import filters from '@/utils/filters' // 全局过滤器
import '@/utils/permission'

import autoComputeFirstScreenTime from 'auto-compute-first-screen-time'

autoComputeFirstScreenTime({
  onReport: function (result) {
      if (result.success) {
        console.log(result)
        console.log(`首屏时间：${result.firstScreenTime}ms`)
      } else {
          console.log(result);
      }
  }
});

Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// 注册过滤器
for (let key in filters) {
  Vue.filter(key, filters[key])
}

Vue.use(common)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
