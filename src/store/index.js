import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    // 相当于data
  state: {
        language: 'en'
  },
  // 相当于methods
  mutations: {
   switchen(state){
        state.language = 'en';
        // Vue.config.lang = state.language;
    },
    switchzh(state){
        state.language = 'zh';
        // Vue.config.lang = state.language;
    }
  }
});


export default store;