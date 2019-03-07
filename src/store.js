import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    test: 0
  },
  mutations: {
    SET_TEST (state) {
      state.test++
    }
  },
  actions: {
    setTest ({ commit }) {
      console.log('***** set test ******')
      commit('SET_TEST')
    }
  }
}

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
