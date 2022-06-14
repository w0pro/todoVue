<template>
  <div class="todo">
    <to-do-categories :btn="btn" v-on:showStatus="showStatus($event)"/>
    <to-do-table-component v-on:btn="seeBtn($event)" :status-window="statusWindow"/>

  </div>

</template>

<script>
import ToDoCategories from "@/components/ToDoComponent/ToDoCategoriesComponent";
import ToDoTableComponent from "@/components/ToDoComponent/ToDoTable/ToDoTableComponent";
export default {
  name: "ToDoViewComponent",
  components: {ToDoTableComponent, ToDoCategories},

  data() {
    return {
      btn: {},
      statusWindow: {
        actTaskShow: true,
        compTaskShow: false,
        delTaskShow: false
      }
    }
  },

  methods: {
    seeBtn(event) {
      this.btn = event;
    },
    showStatus(event){
      for (let key in this.statusWindow) {
        if (key === event) {
          this.statusWindow[key] = true
        } else {
          this.statusWindow[key] = false
        }
      }
    }
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  width: 70%;
  height: 70%;
  min-width: 400px;
  background-color: #E5E5E5;
  border-radius: 10px;
}

</style>