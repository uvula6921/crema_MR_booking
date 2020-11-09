import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mr1: [
      {
          name: '프로젝트 회의',
          start: '2020-11-13 14:00',
          end: '2020-11-13 15:00',
          color: 'red',
          timed: false,
        },
        {
          name: '프로젝트 회의2',
          start: '2020-11-05 16:00',
          end: '2020-11-06 19:00',
          color: 'green',
          timed: false,
        },
        {
          name: '프로젝트 회의3',
          start: '2020-11-20 11:00',
          end: '2020-11-21 13:00',
          color: 'blue',
          timed: false,
        }
    ]
  },
  mutations: {
    setMr1(state, payload) {
      state.mr1 = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
