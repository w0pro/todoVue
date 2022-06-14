<template>
  <div class="table-input" v-if="showInput()">
    <input type="text" class="input" v-model.trim="inputTask" :placeholder="placeholder">
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
    showInput() {
      if (this.inputShow === 'act') {
        return true
      }
      return false
    }
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
  border: none;
  border-radius: 10px;
  background-color: #07f69c;
  cursor: pointer;
}

.btn-add:active {
  background-color: #EA5959;
}

</style>