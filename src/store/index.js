import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    noteList: []
  },
  mutations: {
    addNote (state, payload) {
      const id = new Date().getTime().toString()
      state.noteList.push({ noteText: payload.noteText, id: id })
    }
  },
  actions: {
    addNote (context, payload) {
      context.commit('addNote', payload)
    }
  },
  modules: {
  }
})
