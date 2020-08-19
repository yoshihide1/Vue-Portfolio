import Vue from 'vue'
import Vuex from 'vuex'
import { FadeIn } from '../store/type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    device: "pc"
  },
  mutations: {
    deviceName(state, device: string) {
      state.device = device
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
