import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statusContextMenu: false,
    key: 'active',
    countCat: 0,
    tasks: {
      active: [],
      completed: [],
      deleted: [],
      categorias: [],
    },
    statusWindow: {
      active: true,
      completed: false,
      deleted: false,
    },

  },
  getters: {
    getCheckColors(state) {
      let result = [];
      state.tasks.active.forEach((el) => {
        el.color? result.push(el.color):''
      })
      return result
    },
    getCategorias(state) {
      let result = []
      let set = new Set
      state.tasks.active.forEach((el) => {
        el.categoria?set.add(el.categoria):''
      })
      for(let value of set ) {
        result.push(state.tasks.active.find((el) => el.categoria === value))
      }
    return result
    },

    statusContext (state) {
    return state.statusContextMenu
    },
    getTasks (state) {
     return state.tasks
    },
    getStatusWindow(state) {
     return state.statusWindow
    },
    checkCountCat (state) {
       return state.countCat
    },

    getKey(state) {
      return state.key
    }
  },
  mutations: {
    // addCategoria (state, payload) {
    //   if (state.tasks.categorias.length !== 0){
    //     state.tasks.categorias.forEach((el) => {
    //       el.name !== payload.name?state.tasks.categorias.push(payload):'';
    //     })
    //   } else {
    //     state.tasks.categorias.push(payload);
    //   }
    //
    //
    // },

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
      state.tasks.active.push(payload);


      //
      // let categoria = payload.categoria
      // if (categoria) {
      //   state.tasks[categoria] = [];
      //   state.tasks.active.forEach((el) => {
      //     el.categoria === categoria? state.tasks[categoria].push(el):''
      //   })
      // }



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
      if (!state.tasks[payload]) {
        state.tasks[payload] = [];
        state.tasks.active.forEach((el) => {
          el.categoria === payload?state.tasks[payload].push(el): ''
        })
      }


      state.statusWindow[payload] = true
     for (let key in state.statusWindow) {
       if (key === payload) {
         state.statusWindow[key] = true;
         state.key = key
       }else {
         state.statusWindow[key] = false
       }
     }
    },
    addCountCat(state) {
        if (state.countCat > 7) {
            return
        }
        state.countCat++
    },




  },
  actions: {
  },
  modules: {
  }
})
