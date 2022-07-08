import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusContextMenu: false,
    tasks: {
      active: [],
      completed: [],
      deleted: [],
    },
    statusWindow: {
      actTaskShow: true,
      compTaskShow: false,
      delTaskShow: false,
    },


  },
  getters: {
   statusContext (state) {
     return state.statusContextMenu
   },
    getTasks (state) {
     return state.tasks
    },
    getStatusWindow(state) {
     return state.statusWindow
    },

    filterCategoria(state) {
       let arrCat = []
        state.tasks.active.forEach(el => {
        if (el.categoria || el.color) {
            arrCat.push(el)
        }
    })
      return arrCat

    }
  },
  mutations: {
    eventOpenContext(state) {
      state.statusContextMenu = !state.statusContextMenu
    },
    eventCloseContext(state){
      state.statusContextMenu = false
    },

    clearList(state) {
      state.tasks.deleted = []
    },


    addParamActive(state, payload) {
      state.tasks.active.push(payload)
    },

    checkedTask(state, payload) {
      let {id, where, whereFrom} = payload
      state.tasks[whereFrom] =  state.tasks[whereFrom].filter(el => {
        if (el.id !== id) {
          return el
        } else {
          el.status = where
          state.tasks[where].push(el)
        }
      })
    },
    updateLocal(state, arg) {
      localStorage.setItem(arg, JSON.stringify(state.tasks[arg]))
    },

    switchWindow (state, payload) {
     for (let key in state.statusWindow) {
       if (key === payload){
         state.statusWindow[key] = true
       } else {
         state.statusWindow[key] = false
       }
     }
    }



  },
  actions: {
  },
  modules: {
  }
})
