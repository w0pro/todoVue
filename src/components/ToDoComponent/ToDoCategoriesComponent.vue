<template>
  <div class="todo__categories">
    <div class="categories__wrapper">
      <button class="button__categories" v-if="btn.act" @click="$emit('showStatus', 'actTaskShow')">Active</button>
      <button class="button__categories" v-if="btn.comp" @click="$emit('showStatus', 'compTaskShow')">Completed</button>
      <button class="button__categories" v-if="btn.del" @click="$emit('showStatus', 'delTaskShow')">Deleted</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "ToDoCategories",

  props: {
    btn: Object,
    activeTasks:{
      type: Array
    }
  },

}
</script>

<style scoped>
.todo__categories {
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border-right: 2px solid #D8D8D8;
}
.categories__wrapper {
  width: 100%;
  margin-top: 30%;
  row-gap: 20px;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button__categories {
  font-family: 'Inconsolata', monospace;
  color: white;
  font-size: 16px;
  line-height: 1em;
  max-width: 200px;
  width: 50%;
  min-width: 80px;
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  background-color: rgba(42, 147, 116, 0.4);
  cursor: pointer;
}

.button__categories:active {
  color: black;
  background-color: #c0bbc5;
}

</style>