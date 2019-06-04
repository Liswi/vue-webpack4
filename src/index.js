
import Vue from 'vue';
import Index from './views/App.vue';

// 引入路由
import router from './router';

new Vue({
  el: '#app',
  router: router,
  render: h => h(Index)
});