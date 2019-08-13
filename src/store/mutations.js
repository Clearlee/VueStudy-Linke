import * as types from './mutation-types'

const mutations = {
  [types.SET_FAST_NEWS](state, data) {
    state.currentData = data
  }
}

export default mutations
