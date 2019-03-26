export const moduleA = {
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