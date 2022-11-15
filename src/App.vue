<template>
  <div id="app">
    <CostList></CostList>
    <button v-if="!toggleForm" v-on:click="toggleForm = !toggleForm">ADD</button>
    <CostForm v-if="toggleForm" v-on:toggle="toggleForm = !toggleForm">
    </CostForm>
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
      toggleForm: false,
    }
  },

  /* created() {
    setTimeout(() => this.$store.dispatch('start', this.$store.getters.getStartList), 500);
  } */
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
  border: 1px solid rgb(18, 149, 147);
  color: white;
  background-color: rgb(18, 149, 147);
}
</style>
