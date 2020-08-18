import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "pc"
  },
  mutations: {
    deviceName(state, name: string) {
      state.name = name
    }
  },
  actions: {
    getDeviceSize({ commit }, size: number) {
      if (size > 768) {
        commit("deviceName", "pc")
      } else {
        commit("deviceName", "sp")
      }
    }
  },
  modules: {

  }
})
