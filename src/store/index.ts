import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface FadeIn {
  duration: number;
  origin: string;
  reset: boolean;
  delay: number;
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
      console.log(state.name)
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
    fadeInConfig: () => (duration: number, origin: string, delay: number = 0, reset = true, distance: string = "100" ): FadeIn => {
      return {
        duration: duration,
        origin: origin,
        delay: delay,
        reset: reset,
        distance: distance + "px",
        viewFactor: 0.3
      }
    }
  },

  modules: {

  }
})
