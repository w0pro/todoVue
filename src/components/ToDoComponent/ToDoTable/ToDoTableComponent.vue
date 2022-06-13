<template>
  <div class="todo__table">
    <to-do-table-input-component v-on:addTask="addTask($event)" />
    <tasks-view-component v-if="statusWindow.actTaskShow" :tasks-list="active" v-on:checkedTask="checkedTask($event)"/>
    <tasks-view-component v-if="statusWindow.compTaskShow" :tasks-list="completed"/>

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
    }
  },
  methods: {
    addTask (event) {
      this.active.push({text:event, id:Date.now(), status:'active'})
    },
    checkedTask(event) {
      this.active = this.active.filter(el => {
        if (el.id !== event){
          return el
        } else {
          el.status = 'completed'
          this.completed.push(el)
        }
      })
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
  width: 75%;
  height: 100%;

}

</style>