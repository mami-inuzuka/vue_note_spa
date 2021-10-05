import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const localStorage = window.localStorage
const savedNoteList = localStorage.getItem('note-list')

const store = new Vuex.Store({
  state: {
    noteList: savedNoteList ? JSON.parse(savedNoteList) : []
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

store.subscribe((mutation, state) => {
  localStorage.setItem('note-list', JSON.stringify(state.noteList))
})

export default store
