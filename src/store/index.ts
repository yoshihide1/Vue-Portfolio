import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

interface FadeIn {
  duration: number;
  delay: number;
  origin: string;
  reset: boolean;
  distance: string;
  viewFactor: number;
}

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
    },
  },
  getters: {
    fadeInConfig: () => (duration: number, delay: number, origin: string, reset = false, distance = "100", viewFactor = 0.3): FadeIn => {
      return {
        duration: duration,
        delay: delay,
        origin: origin,
        reset: reset,
        distance: distance + "px",
        viewFactor: viewFactor
      }
    }
  },

  modules: {

  }
})
