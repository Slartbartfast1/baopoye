import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      todo: [{work: 123131}, {work: 1232}, {work: 123112331}, {work: 12312131}],
  },
  mutations: {
    add(state,todo){
      state.todo.push(todo)
    },
      remove(state,i){
          state.todo.splice(i,1)
      }

  },
  actions: {
  },
    plugins: [createPersistedState()],
})
