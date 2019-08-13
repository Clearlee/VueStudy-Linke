import * as types from './mutation-types'

export const saveCurrentData = function({ commit }, data) {
  commit(types.SET_FAST_NEWS, data)
}
