<template>
  <div class="todo__table">
    <to-do-table-input-component v-on:addTask="addTask($event)" :input-show="showInput()"/>
    <tasks-view-component v-if="statusWindow.actTaskShow" :tasks-list="active" v-on:checkedTask="checkedTask( ...arguments)" :check-show="showInput()"/>
    <tasks-view-component v-if="statusWindow.compTaskShow" :tasks-list="completed" v-on:checkedTask="checkedTask( ...arguments)" :check-show="showInput()"/>
    <tasks-view-component v-if="statusWindow.delTaskShow" :tasks-list="deleted" :check-show="showInput()"/>
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
        act: true,
        comp: false,
        del: false
      }
    }
  },
  watch:{
    active(newVal) {
      if (newVal) {
        this.btn.act = true
        this.$emit('btn', this.btn)
      }
    },
    completed(newVal) {
      if (newVal) {
        this.btn.comp = true
        this.$emit('btn', this.btn)
      }
    },
    deleted(newVal) {
      if (newVal) {
        this.btn.del = true
        this.$emit('btn', this.btn)
      }
    }

  },

  methods: {
    addTask (event) {
      this.active.push({text:event, id:Date.now(), status:'active'})
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
    },
    showInput() {
      if (this.statusWindow.actTaskShow === true) return 'act';
      if (this.statusWindow.compTaskShow === true) return 'comp';
      if (this.statusWindow.delTaskShow === true) return 'del'
    }


  }
}
</script>

<style scoped>
.todo__table {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 75%;
  height: 100%;

}

</style>