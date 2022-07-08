<template>
  <div class="table-input" >
    <input :id="inputcrop" type="text" class="fix input" v-model.trim.lazy="newTask.text" :placeholder="placeholder" v-on:keyup.enter="taskTransfer" >
    <label :for="inputcrop" class="btn-add-context" @click="showMenu">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" >
        <path d="M128,26A102,102,0,1,0,230,128,102.1153,102.1153,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.10217,90.10217,0,0,1,128,218Zm10-90a10,10,0,1,1-10-10A10.01146,10.01146,0,0,1,138,128Zm48,0a10,10,0,1,1-10-10A10.01177,10.01177,0,0,1,186,128Zm-96,0a10,10,0,1,1-10-10A10.01146,10.01146,0,0,1,90,128Z" fill="#81776f"/>
      </svg>
    </label>
    <input-context-menu :show-context="statusContext" v-on:transferCategoria="transferCategoria"/>
    <button class="btn-add" @click="taskTransfer">Add</button>
  </div>

</template>

<script>


import InputContextMenu from "@/components/ToDoComponent/ToDoTable/TodoInputContextMenu/InputContextMenu";
export default {
  name: "ToDoTableInputComponent",
  components: {InputContextMenu},
  computed: {
    statusContext(){
      return this.$store.getters.statusContext
    }
  },
  data () {
    return {
      newTask: {
        text : '',
        categoria:'',
        color: '',
      },
      inputcrop: '1',
      placeholder: 'Add a new task insdie ‘All’ category',
    }
  },
  methods: {
    taskTransfer () {
      if (this.newTask.text) {
        this.$store.commit('addParamActive', {
          text:this.newTask.text,
          categoria:this.newTask.categoria,
          id:Date.now(),
          status: 'active',
          color: this.newTask.color
        } )

        this.$store.commit('switchWindow', 'actTaskShow')
        this.$store.commit('updateLocal', 'active')
        this.newTask = {};
      } else {
        setTimeout(() => this.placeholder = 'You cannot add an empty task!!!', 300)
        setTimeout(() => this.placeholder = 'Add a new task insdie ‘All’ category', 1000)
      }
    },
    showMenu(event) {
      if (event.target.tagName === 'svg') {
        this.$store.commit('eventOpenContext')
      }
    },
    transferCategoria(event){
      this.newTask.color = event.color;
      this.newTask.categoria = event.name
    }
  },
}
</script>

<style scoped>
.input:focus ~ .btn-add-context,
.input:not(:placeholder-shown) ~ .btn-add-context  {
  opacity: 1;
}

.btn-add-context {
  opacity: 0;
  transition: opacity 0.003ms ;
  top: 20%;
  right: 75px;
  position: absolute;
  cursor: context-menu;
}
.btn-add-context svg {
  width: 25px;
  height: 25px;
}

.table-input {
  position: relative;
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
  outline: none;
  background-color: #F3F3F3;
  border: 2px solid #F3F3F3;
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