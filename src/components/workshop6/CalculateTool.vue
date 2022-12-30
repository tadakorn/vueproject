<template>
  <div class="calculator">
    <div class="calculator-display">
      <h1>{{ valueDisplay }}</h1>
    </div>
    <div class="calculator-button">
      <button @click="callOperator('+')" class="operator">+</button>
      <button @click="callOperator('-')" class="operator">-</button>
      <button @click="callOperator('*')" class="operator">x</button>
      <button @click="callOperator('/')" class="operator">÷</button>
      <button @click="setNumberValue('7')">7</button>
      <button @click="setNumberValue('8')">8</button>
      <button @click="setNumberValue('9')">9</button>
      <button @click="setNumberValue('4')">4</button>
      <button @click="setNumberValue('5')">5</button>
      <button @click="setNumberValue('6')">6</button>
      <button @click="setNumberValue('1')">1</button>
      <button @click="setNumberValue('2')">2</button>
      <button @click="setNumberValue('3')">3</button>
      <button @click="addDecimal" class="decimal">.</button>
      <button @click="setNumberValue('0')">0</button>
      <button @click="resetAll" class="clear-btn" id="clear-btn">C</button>
      <button @click="callOperator('=')" class="equal operator">=</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      temp: 0,
      valueDisplay: "0",
      currentOperator: null,
      isOnOperate: false,
      afterResult: false,
    };
  },
  methods: {
    setNumberValue(value) {
      if (this.afterResult) {
        this.afterResult = false;
        this.valueDisplay = value;
        return;
      }

      if (this.isOnOperate) {
        this.temp = parseFloat(this.valueDisplay);
        this.valueDisplay = value;
        this.isOnOperate = false;
      } else {
        if (this.valueDisplay === "0") {
          this.valueDisplay = value;
        } else {
          this.valueDisplay += value;
        }
      }
    },
    callOperator(value) {
      if (value === "=") {
        if (this.currentOperator !== null) {
          let result;
          if (this.currentOperator === "+") {
            result = this.temp + parseFloat(this.valueDisplay);
          } else if (this.currentOperator === "-") {
            result = this.temp - parseFloat(this.valueDisplay);
          } else if (this.currentOperator === "*") {
            result = this.temp * parseFloat(this.valueDisplay);
          } else {
            result = this.temp / parseFloat(this.valueDisplay);
          }
          this.valueDisplay = result.toString();
          this.currentOperator = null;
          this.afterResult = true;
        }
      } else {
        this.currentOperator = value;
        this.isOnOperate = true;
      }
    },
    addDecimal() {
      if (!this.valueDisplay.includes(".")) {
        this.valueDisplay += ".";
      }
    },
    resetAll() {
      this.temp = 0;
      this.valueDisplay = "0";
      this.currentOperator = null;
      this.isOnOperate = false;
      this.afterResult = false;
    },
  },
};
</script>

<style scoped>
.calculator {
  background: white;
  width: 400px;
  border-radius: 12px;
  box-shadow: 0 5px 30px -5px rgba(0, 0, 0, 0.6);
  margin-left: auto;
  margin-right: auto;
}

.calculator-display {
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px 10px 0 0;
}
.calculator-display h1 {
  margin: 0;
  font-size: 45px;
  padding: 25px;
  font-weight: 100;
  overflow-x: auto;
}
.calculator-button {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
}
.equal {
  grid-column: -2;
  grid-row: 2 / span 4;
}
button {
  min-height: 50px;
  font-size: 20px;
  font-weight: 100;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  background-color: rgb(199, 199, 199);
}
button:hover {
  filter: brightness(110%);
}
button:active {
  transform: translateY(1px);
}
.operator,
.equal {
  background: orange;
  color: white;
  font-size: 30px;
}

@media screen and (max-width: 600px) {
  .calculator {
    width: 95%;
  }
}
</style>
