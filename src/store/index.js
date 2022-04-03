import Vue from 'vue'
import Vuex from 'vuex'
import {textarea, projects, important, pomodoro, taskChoices, general} from './modules/user'
import listTodo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    closeAllPopUp({commit}){
      commit('textarea/closeAllPopUp', {root: true})
      commit('projects/closeAllPopUp', {root: true})
      commit('important/closeAllPopUp', {root: true})
      commit('pomodoro/closeAllPopUp', {root: true})
      commit('general/closeAllPopUp', {root: true})
      commit('projects/setModeWriteSection', 'full' ,{root: true})
      commit('projects/setEmptydataEditor', {root: true})
      commit('important/setModeWriteSection', 'full' ,{root: true})
      commit('pomodoro/setModeWriteSection', 'full' ,{root: true})
      commit('pomodoro/setModeWriteSectionMotivation', 'full' ,{root: true})
      commit('taskChoices/closePopUp' ,{root: true})
      commit('taskChoices/backToListFolder' ,{root: true})
      // commit('important/setEmptydataEditor', {root: true})
    }
  },
  modules: {
    projects, // setting project
    important, // setting important
    pomodoro, // setting pomodoro
    textarea,
    listTodo,
    taskChoices,
    general,
  }
})
