<template>
  <div class="table-input">
    <input type="text" class="input" v-model="inputTask">
    <button class="btn-add" @click="taskTransfer">Add</button>
  </div>

</template>

<script>
export default {
  name: "ToDoTableInputComponent",

  data () {
    return {
      inputTask : '',
    }
  },
  methods: {
    taskTransfer () {
      this.$emit('addTask', this.inputTask)
      this.inputTask = ''
      ;
    }

  }
}
</script>

<style scoped>
.table-input {
  display: flex;
  gap: 10px;
  margin-top: 100px;
  width: 80%;
  height: 40px;
}
.input {
  width: calc(100% - 8px);
  height: calc(100% - 6px);
  border-radius: 10px;
}

.btn-add {
  border-radius: 10px;
  background-color: #07f69c;
  cursor: pointer;
}


</style>