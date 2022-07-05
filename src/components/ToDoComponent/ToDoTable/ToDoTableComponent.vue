<template>
  <div class="todo__table">
    <to-do-table-input-component />
    <tasks-view-component v-if="getStatusWindow.actTaskShow" :tasks-list="getTasks.active" />
    <tasks-view-component v-if="getStatusWindow.compTaskShow" :tasks-list="getTasks.completed" />
    <tasks-view-component v-if="getStatusWindow.delTaskShow" :tasks-list="getTasks.deleted" />
    <button class="btn-clear" v-if="getTasks.deleted.length !== 0 && getStatusWindow.delTaskShow" @click="clearList">Clear list</button>
  </div>

</template>

<script>
import ToDoTableInputComponent from "@/components/ToDoComponent/ToDoTable/ToDoTableInputComponent";
import TasksViewComponent from "@/components/ToDoComponent/ToDoTable/TasksViewComponent";

export default {
  name: "ToDoTableComponent",
  components: {TasksViewComponent, ToDoTableInputComponent},

  computed: {
    getTasks() {
      return this.$store.getters.getTasks
    },
    getStatusWindow() {
      return this.$store.getters.getStatusWindow
    }
  },


  mounted() {
    if (localStorage.getItem('active') !== null) {
      this.$store.state.tasks.active = JSON.parse(localStorage.getItem('active'))
    }
    if (localStorage.getItem('completed') !== null) {
      this.$store.state.tasks.completed = JSON.parse(localStorage.getItem('completed'))
    }
    if (localStorage.getItem('deleted') !== null) {
      this.$store.state.tasks.deleted = JSON.parse(localStorage.getItem('deleted'))
    }
  },
  methods: {
    clearList() {
      this.$store.commit('clearList')
      this.$store.commit('updateLocal', 'deleted')
    },
  }
}
</script>

<style scoped>
* {
  padding: 0;
}

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
  cursor: pointer;
}

.btn-clear:active {
  color: black;
  background-color: #c0bbc5;
}

</style>