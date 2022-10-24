<template>
  <div id="app">
    <input v-on:click="currentWindow=1" type="number" v-model="operand1">
    <input v-on:click="currentWindow=2" type="number" v-model="operand2">
    <p>Результат: {{result}}</p>
    <button v-for="operator of operators" v-on:click="currentOperator=operator">{{operator}}</button>
    <br>
    <button v-on:click="showKeyboard=!showKeyboard">Клавиатура</button>
    <br>
    <button v-if="showKeyboard" v-for="number of numbers" v-on:click="doInput(number)">{{number}}</button>
    <button v-if="showKeyboard" v-on:click="doBackspace">backspace</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      operand1: '',
      operand2: '',
      operators: ['+', '-', '*', '/', '^', '//'],
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      currentOperator: '',
      currentWindow: 1,
      showKeyboard: false
    }
  },
  computed: {
    result() {
      return this.doCalc()
    }
  },
  methods: {
    doBackspace() {
      if (this.currentWindow == 1) {
        this.operand1 = this.operand1.slice(0, -1);
      } else {
        this.operand2 = this.operand2.slice(0, -1);
      }
    },
    doInput(number) {
      if (this.currentWindow == 1) {
        this.operand1 = this.operand1 + number;
      } else {
        this.operand2 = this.operand2 + number;
      }
    },
    doCalc() {
      if (this.currentOperator == '+') {
        return this.adding();
      };
      if (this.currentOperator == '-') {
        return this.subtract();
      };
      if (this.currentOperator == '*') {
        return this.multiply();
      };
      if (this.currentOperator == '/') {
        return this.division();
      };
      if (this.currentOperator == '^') {
        return this.exponent();
      };
      if (this.currentOperator == '//') {
        return this.division_round();
      };
    },
    adding() {
      return Number(this.operand1) + Number(this.operand2);
    },
    subtract() {
      return this.operand1 - this.operand2;
    },
    multiply() {
      return this.operand1 * this.operand2;
    },
    division() {
      return this.operand1 / this.operand2;
    },
    exponent() {
      return Math.pow(this.operand1, this.operand2);
    },
    division_round() {
      return Math.round(this.operand1 / this.operand2);
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
<!-- 
<button v-on:click="result=Number(operand1)+Number(operand2)">+</button>
<button v-on:click="result=operand1-operand2">-</button>
<button v-on:click="result=operand1*operand2">*</button>
<button v-on:click="result=operand1/operand2">/</button>
<button v-on:click="result=Math.pow(operand1,operand2)">^</button>
<button v-on:click="result=Math.round(operand1/operand2)">//</button> -->