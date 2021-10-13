import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ower:false
  },

  mutations: {
    setOwer(state,status) {
      state.ower = status;
    }
  },
  actions: {},
  modules: {},
  
});
