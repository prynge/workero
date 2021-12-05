import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
  theme: {
    themes: {
      light: {
        fond: '#f2f5fa',
        ombre: '#e6e8eb',
        texte: '#1d3046',
        bleu_clair: '#e2e9f5' 
      }
    }
  }
});
