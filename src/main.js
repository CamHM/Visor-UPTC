import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import apolloProvider from './graphql/ApolloClient';
import router from "./plugins/router";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  apolloProvider,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
