<template>
  <ul class="tasks__view">
    <li v-for="item in tasksList" :key="item.id" class="task__item">
      <input type="checkbox" :id="item.id" :value="item.text"  @change="$emit('checkedTask', item.id)">
      <label :for="item.id"></label>
      <span>{{item.text}}</span>
    </li>
  </ul>

</template>

<script>
export default {
  name: "TasksViewComponent",

  props: {
    tasksList: Array
  },

  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.tasks__view {
 align-self: baseline;
  width: 100%;
}

.task__item {
  list-style: none;
  padding: 15px;
  width: 80%;
  background-color: #a9a8a7;
  margin-bottom: 10px;
  border-radius: 10px;
}


</style>