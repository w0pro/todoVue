<template>
  <ul class="tasks__view">
    <li v-for="item in tasksList" :key="item.id" class="task__item">
      <input class="custom-checkbox" type="checkbox" v-if="statusInput" :id="item.id" :value="item.text"  @change="checkedTask({id:item.id, where:'completed', whereFrom:'active'})" >
      <label :for="item.id"></label>
      <span>{{item.text}}</span>
      <button class="btn-del" @click="checkedTask({id:item.id, where:'deleted', whereFrom:'completed'})" v-if="statusBtn">
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66667 3.33333L6.25 1H9.75L10.3333 3.33333M15 3.33333H2.16667L3.33333 17.3333H12.6667L13.8333 3.33333H1H15ZM8 6.83333V13.8333V6.83333ZM10.9167 6.83333L10.3333 13.8333L10.9167 6.83333ZM5.08333 6.83333L5.66667 13.8333L5.08333 6.83333Z" stroke="#FF0000" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </li>

  </ul>

</template>

<script>
export default {
  name: "TasksViewComponent",
  props: {
    tasksList: Array,
    checkShow: String
  },

  watch: {
    checkShow(newVal) {
      if (newVal === 'comp') {
        this.statusInput = false
        this.statusBtn = true
      } else if (newVal === 'del') {
        this.statusInput = false
        this.statusBtn = false
        this.statusClear = true
      } else {
        this.statusInput = true
        this.statusBtn = false
      }
    }
  },

  data() {
    return {
        statusInput: true,
        statusBtn: false,
        statusClear: false
    }
  },

  methods: {
    checkedTask(arg) {
      let {where, whereFrom} = arg
      this.$store.commit('checkedTask', arg)
      this.$store.commit('updateLocal', where)
      this.$store.commit('updateLocal', whereFrom)
    }
  }
}
</script>

<style scoped>
.tasks__view {
  display: flex;
  flex-direction: column;
  top: 20%;
  width: 85%;
  overflow-y: scroll;
  padding-left: 0!important;
}

.task__item {
  font-family: 'Inconsolata', monospace;
  position: relative;
  display: flex;
  list-style: none;
  padding: 15px;
  border-radius: 10px;
}

.btn-del {
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #EA5959;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:not(:disabled):active+label::before {
  background-color: #EA5959;
  border-color: #EA5959;
}



</style>