import Vue from 'vue'
import Vuex from 'vuex'
import Location from './location'
import admin from './admin'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Location,
    admin,
  }
})
