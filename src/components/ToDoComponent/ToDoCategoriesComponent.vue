<template>
  <div class="todo__categories">
    <button class="button__categories" v-if="btn.act" @click="$emit('showStatus', 'actTaskShow')">Active</button>
    <button class="button__categories" v-if="btn.comp" @click="$emit('showStatus', 'compTaskShow')">Completed</button>
    <button class="button__categories" v-if="btn.del" @click="$emit('showStatus', 'delTaskShow')">Deleted</button>

  </div>

</template>

<script>
export default {
  name: "ToDoCategories",
  props: {
    btn: Object
  },




}
</script>

<style scoped>
.todo__categories {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  height: 100%;
  border-right: 2px solid #D8D8D8;
}

.button__categories {
  margin-top: 20px;
  width: 100px;
  padding: 5px;
  border-radius: 10px;
  background-color: #EA5959;
}

</style>