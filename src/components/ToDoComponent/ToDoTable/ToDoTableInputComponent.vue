<template>
  <div class="table-input" >
    <input type="text" class="input" v-model.trim.lazy="inputTask" :placeholder="placeholder" @change="taskTransfer" >
    <button class="btn-add" @click="taskTransfer">Add</button>
  </div>

</template>

<script>
export default {
  name: "ToDoTableInputComponent",
  props: {
    inputShow: String
  },

  data () {
    return {
      inputTask : '',
      placeholder: 'Add a new task insdie ‘All’ category'
    }
  },

  methods: {
    taskTransfer () {
      if (this.inputTask) {
        this.$emit('addTask', this.inputTask)
        this.inputTask = '';
      } else {
        setTimeout(() => this.placeholder = 'You cannot add an empty task!!!', 300)
        setTimeout(() => this.placeholder = 'Add a new task insdie ‘All’ category', 1000)
      }
    },
    // showInput() {
    //   if (this.inputShow === 'act') {
    //     return true
    //   }
    //   return false
    // }
  }
}
</script>

<style scoped>
.table-input {
  display: flex;
  gap: 10px;
  margin-top: 10%;
  width: 85%;
  height: 40px;
}
.input {
  font-family: 'Inconsolata', monospace;
  padding: 5px;
  width: calc(100% - 8px);
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #F3F3F3;
}

.input:focus {
  border: 2px solid #EA5959;
}

.btn-add {
  font-family: 'Inconsolata', monospace;
  color: white;
  padding: 0 20px;
  border: none;
  border-radius: 10px;
  background-color: #81776f;
  cursor: pointer;
}

.btn-add:active {
  color: black;
  background-color: #c0bbc5;
}

</style>