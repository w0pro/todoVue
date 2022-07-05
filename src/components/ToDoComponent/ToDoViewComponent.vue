<template>
  <div class="todo">
    <to-do-categories/>
    <to-do-table-component/>
  </div>

</template>

<script>
import ToDoCategories from "@/components/ToDoComponent/ToDoCategoriesComponent";
import ToDoTableComponent from "@/components/ToDoComponent/ToDoTable/ToDoTableComponent";
export default {
  name: "ToDoViewComponent",
  components: {ToDoTableComponent, ToDoCategories},
}
</script>

<style scoped>
.todo {
  display: flex;
  width: 70%;
  height: 70%;
  min-width: 350px;
  background-color: #E5E5E5;
  border-radius: 10px;
}

</style>