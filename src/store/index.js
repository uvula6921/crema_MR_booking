import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mr1: [
      {
        user: 'bbb',
        name: '프로젝트 회의3',
        start: '2020-12-06 14:00',
        end: '2020-12-06 15:00',
        color: 'blue',
        timed: false,
        mrIndex: '1',
      },
      {
        user: 'bbb',
        name: '프로젝트 회의2',
        start: '2020-11-05 16:00',
        end: '2020-11-06 19:00',
        color: 'green',
        timed: false,
        mrIndex: '1',
      },
      {
        user: 'aaa',
        name: '프로젝트 회의3',
        start: '2020-11-20 11:00',
        end: '2020-11-21 13:00',
        color: 'blue',
        timed: false,
        mrIndex: '1',
      }
    ],
    mr2: [
      {
        user: 'bbb',
        name: '프로젝트 회의',
        start: '2020-11-16 08:00',
        end: '2020-11-16 09:00',
        color: 'red',
        timed: false,
        mrIndex: '2',
      },
      {
        user: 'aaa',
        name: '프로젝트 회의2',
        start: '2020-11-05 16:00',
        end: '2020-11-06 19:00',
        color: 'green',
        timed: false,
        mrIndex: '2',
      },
    ],
    mr3: [
      {
        user: 'bbb',
        name: '프로젝트 회의',
        start: '2020-11-13 14:00',
        end: '2020-11-13 15:00',
        color: 'red',
        timed: false,
        mrIndex: '3',
      },
      {
        user: 'aaa',
        name: '프로젝트 회의2',
        start: '2020-11-05 16:00',
        end: '2020-11-06 19:00',
        color: 'green',
        timed: false,
        mrIndex: '3',
      },
      {
        user: 'aaa',
        name: '프로젝트 회의3',
        start: '2020-11-25 11:00',
        end: '2020-11-26 16:00',
        color: 'blue',
        timed: false,
        mrIndex: '3',
      },
      {
        user: 'bbb',
        name: '프로젝트 회의3',
        start: '2020-12-06 14:00',
        end: '2020-12-06 15:00',
        color: 'blue',
        timed: false,
        mrIndex: '3',
      }
    ],
    menus: ["Meeting Room 1", "Meeting Room 2", "Meeting Room 3"],
    newMeeting: {
      name: '',
      start: new Date().toISOString().substr(0, 16).replace('T', ' '),
      end: new Date().toISOString().substr(0, 16).replace('T', ' '),
      color: 'green',
      timed: false,
      mrIndex: 0,
    }
  },
  mutations: {
    setMr1(state, payload) {
      state.mr1 = payload;
    },
    setMr2(state, payload) {
      state.mr2 = payload;
    },
    setMr1(state, payload) {
      state.mr3 = payload;
    },
    setNewMeeting(state, payload) {
      state.newMeeting = payload
    },
    setUser(state, user) {
      let newMeeting = { ...state.newMeeting } // 깊은 복사
      newMeeting['user'] = user
      state.newMeeting = newMeeting
    },
    setName(state, name) {
      let newMeeting = { ...state.newMeeting } // 깊은 복사
      newMeeting['name'] = name
      state.newMeeting = newMeeting
    },
    setStart(state, start) {
      let newMeeting = { ...state.newMeeting } // 깊은 복사
      newMeeting['start'] = start
      state.newMeeting = newMeeting   
    },
    setEnd(state, end) {
      let newMeeting = { ...state.newMeeting } // 깊은 복사
      newMeeting['end'] = end
      state.newMeeting = newMeeting
    },
    setColor(state, color) {
      let newMeeting = { ...state.newMeeting } // 깊은 복사
      newMeeting['color'] = color
      state.newMeeting = newMeeting
    },
    setmrIndex(state, mrIndex) {
      let newMeeting = { ...state.newMeeting } // 깊은 복사
      newMeeting['mrIndex'] = mrIndex
      state.newMeeting = newMeeting
    }
  },
  actions: {
  },
  modules: {
  }
})
