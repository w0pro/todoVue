<template>
  <div class="todo__table">
    <to-do-table-input-component v-on:addTask="addTask($event)" :input-show="showInput()"/>
    <tasks-view-component v-if="statusWindow.actTaskShow" :tasks-list="active" v-on:checkedTask="checkedTask( ...arguments)" :check-show="showInput()"/>
    <tasks-view-component v-if="statusWindow.compTaskShow" :tasks-list="completed" v-on:checkedTask="checkedTask( ...arguments)" :check-show="showInput()"/>
    <tasks-view-component v-if="statusWindow.delTaskShow" :tasks-list="deleted" :check-show="showInput()"/>
    <button class="btn-clear" v-if="showBtnClear()" @click="clearList">Clear list</button>
  </div>

</template>

<script>
import ToDoTableInputComponent from "@/components/ToDoComponent/ToDoTable/ToDoTableInputComponent";
import TasksViewComponent from "@/components/ToDoComponent/ToDoTable/TasksViewComponent";
export default {
  name: "ToDoTableComponent",
  components: {TasksViewComponent, ToDoTableInputComponent},

  props:{
    statusWindow: {
      type: Object
    }
  },

  data() {
    return {
      active: [],
      completed: [],
      deleted:[],
      btn:{
        act: false,
        comp: false,
        del: false,

      }
    }
  },

  mounted() {
    if (localStorage.getItem('active').length !== 2) {
      this.active = JSON.parse(localStorage.getItem('active'))
    }
    if (localStorage.getItem('completed').length !== 2 ) {
      this.completed = JSON.parse(localStorage.getItem('completed'))
    }
    if (localStorage.getItem('deleted').length !== 2) {
      this.deleted = JSON.parse(localStorage.getItem('deleted'))
    }
  },
  watch:{
    active(newVal) {
      if (newVal.length !== 0) {
        this.btn.act = true
        this.$emit('btn', this.btn)
      } else {
        this.btn.act = false
      }
    },
    completed(newVal) {
      if (newVal.length !== 0) {
        this.btn.comp = true
        this.$emit('btn', this.btn)
      } else {
        this.btn.comp = false
      }
    },
    deleted(newVal) {
      if (newVal.length !== 0) {
        console.log(newVal)
        this.btn.del = true
        this.$emit('btn', this.btn)
      } else {
        this.btn.del = false
      }
    }

  },

  methods: {
    addTask (event) {
      this.active.push({text:event, id:Date.now(), status:'active'})
      this.updateLocal('active')
    },
    checkedTask(ind, toPush, arr) {
        this[arr] = this[arr].filter(el => {
          if (el.id !== ind){
            return el
          } else {
            el.status = toPush
            this[toPush].push(el)
          }
        })
      this.updateLocal(arr)
      this.updateLocal(toPush)
    },
    showInput() {
      if (this.statusWindow.actTaskShow === true) return 'act';
      if (this.statusWindow.compTaskShow === true) return 'comp';
      if (this.statusWindow.delTaskShow === true) return 'del'
    },

    updateLocal(arg) {
      localStorage.setItem(arg, JSON.stringify(this[arg]))
    },
    clearList() {
      this.deleted = [];
      this.updateLocal('deleted');
    },
    showBtnClear () {
      if (this.statusWindow.delTaskShow && this.deleted.length !== 0) {
        return true
      } else {
        return false
      }
    }


  }
}
</script>

<style scoped>
.todo__table {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 75%;
  height: 100%;
}

.btn-clear {
  font-family: 'Inconsolata', monospace;
  color: white;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-radius: 10px;
  background-color: #c53939;
  padding: 10px 10px;
  border: none;
}

.btn-clear:active {
  color: black;
  background-color: #c0bbc5;
}

</style>