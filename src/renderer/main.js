import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'

var height=screen.height
var width=screen.width
Vue.use(VueDirectiveImagePreviewer,{
  previewSize:10,
  maxWidth:width,
  maxHeight:height,
  background: {    
    color: '#000' 
  },
  
  //2. 转换动画
  animate: {
    duration: 700,
    delay: 0
  },

  //3. 鼠标样式(css)
  cursor: 'pointer',
})

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
Vue.use(ElementUI, {
  size: 'medium'
})

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
