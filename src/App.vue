<script>
import calc from './calc';

export default {
  data() {
    return {
      formula: '',
      start: 0,
      end: 0,
      eps: 0,
      result: null,
    };
  },
  methods: {
    showInput() {},
    startCalc() {
      console.log(this);
      const {
        formula, start, end, eps,
      } = this;
      console.log(formula, [start, end], eps);
      try {
        this.result = calc(formula, [start, end], eps);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="column">
    <input type="text" placeholder="Корни какого уравнение необходимо найти?" v-model="formula" />
    <input type="number" placeholder="Введите начало интервала" v-model="start" />
    <input type="number" placeholder="Введите конец интервала" v-model="end" />
    <input type="number" placeholder="Введиет точность" v-model="eps" />
    <button @click="startCalc()">start</button>
    <div v-if="result">{{ result }}</div>
  </div>
</template>

<style>
.column {
  display: flex;
  flex-direction: column;
}
</style>
