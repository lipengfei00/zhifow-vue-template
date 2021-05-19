import Vue from 'vue'
import App from './App.vue'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}
{{#if_eq thirdParty "element-ui"}}
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
{{/if_eq}}
{{#if_eq thirdParty "ant-design-vue"}}
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
{{/if_eq}}

Vue.config.productionTip = false

new Vue({
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  render: h => h(App)
}).$mount('#app')
