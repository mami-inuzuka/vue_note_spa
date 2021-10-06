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
      const id = new Date().getTime()
      state.noteList.push({ noteText: payload.noteText, id: id })
    },
    deleteNote (state, payload) {
      state.noteList.splice(payload.noteIndex, 1)
    },
    updateNote (state, payload) {
      Vue.set(state.noteList[payload.noteIndex], state.noteText, payload.textToEdit)
    }
  },
  actions: {
    addNote (context, payload) {
      context.commit('addNote', payload)
    },
    deleteNote (context, payload) {
      context.commit('deleteNote', payload)
    },
    updateNote (context, payload) {
      context.commit('updateNote', payload)
    }
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('note-list', JSON.stringify(state.noteList))
})

export default store
