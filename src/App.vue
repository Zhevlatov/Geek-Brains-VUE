<template>
  <div id="app">
    <input type="number" v-model="operand1" />
    <input type="number" v-model="operand2" />
    <p>Результат: {{result}}</p>
    <button v-on:click="result=Number(operand1)+Number(operand2)">+</button>
    <button v-on:click="result=operand1-operand2">-</button>
    <button v-on:click="result=operand1*operand2">*</button>
    <button v-on:click="result=operand1/operand2">/</button>
    <button v-on:click="result=Math.pow(operand1,operand2)">^</button>
    <button v-on:click="result=Math.round(operand1/operand2)">//</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
      operand1: 0,
      operand1: 0,
      result: 0
    }
  }
}
</script>

<style lang="scss">

</style>
