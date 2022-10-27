<template>
  <div v-if="this.load" id="app">
    <CostList :data="list"></CostList>
    <button v-if="!toggleForm" v-on:click="toggleForm = !toggleForm">ADD</button>
    <CostForm v-if="toggleForm" v-on:add="addNewCost"></CostForm>
  </div>
</template>

<script>
import CostList from './components/CostList.vue'
import CostForm from './components/CostForm.vue'

export default {
  name: 'App',
  components: {
    CostList,
    CostForm
  },
  data() {
    return {
      list: [],
      toggleForm: false,
      load: false
    }
  },
  methods: {

    addNewCost(date, category, value) {
      this.list.push({ number: this.list[this.list.length - 1].number + 1, date, category, value });
      this.toggleForm = !this.toggleForm
    }
  },

  created() {
    setTimeout(() => {
      this.list = [
        { number: '#', date: 'Date', category: 'Category', value: 'Value' },
        { number: 1, date: '01.01.2000', category: 'Food', value: '50' },
        { number: 2, date: '02.01.2000', category: 'Transport', value: '100' },
        { number: 3, date: '03.01.2000', category: 'Clothing', value: '200' }
      ];
      this.load = true;
    }
      , 500);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin: 0 auto;
  margin-top: 10px;
  width: 100px;
  height: 30px;
  border: none;
  color: white;
  background-color: rgb(18, 149, 147);
}
</style>
