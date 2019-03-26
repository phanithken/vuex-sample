import Vue from 'vue'
import Vuex from 'vuex'

import { moduleA } from '@/stores/storeA'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    a: moduleA
  },
  state: {
    count: 0,
    username: '',
    password: ''
  },
  mutations: {

    SET_USERNAME (state, { username }) {
      state.username = username
    },

    SET_PASSWORD (state, { password }) {
      state.password = password
    },

    INCREMENT (state) {
      state.count++
    },

    DECREMENT (state) {
      state.count--
    }

  },
  actions: {
    setUsername ({ commit }, username) {
      commit('SET_USERNAME', username)
    },

    setPassword ({ commit }, password) {
      commit('SET_PASSWORD', password)
    },

    increment ({ commit }) {
      commit('INCREMENT')
    },

    decrement ({ commit }) {
      commit('DECREMENT')
    }

  }
})
