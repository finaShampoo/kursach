<script>
import calc from "./calc";

export default {
  data() {
    return {
      // x^3 - 0.2*x^2 + 0.5*x + 1.5 = 0
      formula: "",
      start: -1,
      end: 0,
      eps: 0.001,
      result: null
    };
  },
  methods: {
    showInput() {},
    startCalc() {
      console.log(this);
      const { formula, start, end, eps } = this;
      console.log(formula, [start, end], eps);
      try {
        this.result = calc(formula, [start, end], eps);
        console.log(this.result);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<template>
  <div class="column">
    <input type="text" placeholder="Корни какого уравнение необходимо найти?" v-model="formula" />
    <input type="number" placeholder="Введите начало интервала" v-model="start" />
    <input type="number" placeholder="Введите конец интервала" v-model="end" />
    <input type="number" placeholder="Введиет точность" v-model="eps" />
    <button @click="startCalc()">start</button>
    <div>{{ result }}</div>
  </div>
</template>

<style>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 8px;
  padding-left: 8px;
  width: 500px;
  height: 40px;
  border-radius: 4px;
  border-color: rgb(58, 59, 59);
  border-width: 0px;
  background-color: rgb(224, 238, 243);
  font-size: 16px;
}
button {
  margin-bottom: 8px;
  width: 200px;
  height: 30px;
  border-width: 0px;
  border-radius: 4px;
  background-color: rgb(212, 52, 127);
  color: honeydew;
  font-size: 16px;
}
</style>
