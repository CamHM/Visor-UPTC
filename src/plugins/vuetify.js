import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#1e1e2f',
        secondary: '#27293d',
        accent: '#FCFF29',
        warning: '#FFCC29',
        success: '#91FF29',
        info: '#29FFCC',
        danger: '#CC29FF',
      },
    },
  }
});
