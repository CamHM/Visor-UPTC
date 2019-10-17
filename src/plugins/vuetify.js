import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#1e1e2f', // #E53935
        secondary: '#27293d', // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },
  }
});
