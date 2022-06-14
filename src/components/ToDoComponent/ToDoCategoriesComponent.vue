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
    btn: Object
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
  max-width: 200px;
  width: 50%;
  min-width: 50px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  background-color: #EA5959;
  cursor: pointer;
}

.button__categories:active {
  background-color: #07f69c;
}

</style>