<template>
<h1 class="font-bold mb-4 mx-auto">3.  Calculator Project </h1>
    <div class="calculator mx-auto mb-4 bg-black p-6 rounded shadow-lg">
       
        <div class="display bg-gray-100 p-4 rounded text-right text-2xl text-black font-bold mb-4"> {{ display }}</div>
        <div class="buttons grid grid-cols-4 gap-2"> 

        <button @click="clear" class="btn-clear col-span-2 bg-red-500 text-white py-2 rounded">C</button>
        <button @click="deleteLast" class="btn-delete bg-yellow-500 text-white text-center py-2 rounded">DEL</button>
        <button @click="appendOperator('/')" class="btn-operator bg-blue-500 text-white py-2 rounded">/</button>
        <button @click="appendNumber(7)" class="btn-number bg-slate-300 py-2 rounded">7</button>
        <button @click="appendNumber(8)" class="btn-number bg-slate300 py-2 rounded">8</button>
        <button @click="appendNumber(9)" class="btn-number bg-slate300 py-2 rounded">9</button>
        <button @click="appendOperator('*')" class="btn-operator bg-blue-500 text-white py-2 rounded">*</button>
        <button @click="appendNumber(4)" class="btn-number bg-slate-300 py-2 rounded">4</button>
        <button @click="appendNumber(5)" class="btn-number bg-slate-300 py-2 rounded">5</button>
        <button @click="appendNumber(6)" class="btn-number bg-slate-300 py-2 rounded">6</button>
        <button @click="appendOperator('-')" class="btn-operator bg-blue-500 text-white py-2 rounded">-</button>
        <button @click="appendNumber(1)" class="btn-number bg-slate-300 py-2 rounded">1</button>
        <button @click="appendNumber(2)" class="btn-number bg-slate-300 py-2 rounded">2</button>
        <button @click="appendNumber(3)" class="btn-number bg-slate-300 py-2 rounded">3</button>
        <button @click="appendOperator('+')" class="btn-operator bg-blue-500 text-white py-2 rounded">+</button>
        <button @click="appendNumber(0)" class="btn-number col-span-2 bg-slate-300 py-2 rounded">0</button>
        <button @click="appendDot" class="btn-dot bg-slate-300 py-2 rounded">.</button>
        <button @click="calculate" class="btn-equal bg-green-500 text-white py-2 rounded">=</button>
    </div>
     <button @click="toggleScientific" class="w-full bg-purple-500 mt-4 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Scientific Mode</button>
    <div v-if="scientificMode" class="scientific-buttons  mb-4 grid grid-cols-4 gap-2 mt-4">
      <button @click="appendScientific('Math.sin')" class="btn-sin bg-slate-300 py-2 rounded">sin</button>
      <button @click="appendScientific('Math.cos')" class="btn-cos bg-slate-300 py-2 rounded">cos</button>
      <button @click="appendScientific('Math.tan')" class="btn-tan bg-slate-300 py-2 rounded">tan</button>
      <button @click="appendScientific('Math.log')" class="btn-log bg-slate-300 py-2 rounded">log</button>
      <button @click="appendScientific('Math.sqrt')" class="btn-sqrt bg-slate-300 py-2 rounded">√</button>
      <button @click="appendScientific('Math.pow')" class="btn-pow bg-slate-300 py-2 rounded">^</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: '',
       scientificMode: false,
    };
  },
  methods: {
    clear() {
      this.display = '';
      
    },
    deleteLast() {
      this.display = this.display.slice(0, -1);
    },
    appendNumber(number) {
      this.display += number;
    },
    appendOperator(operator) {
      if (this.display && !this.isOperator(this.display.slice(-1))) {
        this.display += operator;
      }
    },
    appendDot() {
      if (this.display && !this.display.includes('.')) {
        this.display += '.';
      }
    },
    isOperator(char) {
      return ['+', '-', '*', '/'].includes(char);
    },
    calculate() {
      try {
        this.display = eval(this.display).toString();
      } catch {
        this.display = 'Error';
      }
    },

     toggleScientific() {
      this.scientificMode = !this.scientificMode;
    },
    
     appendScientific(func) {
      if (this.display) {
        this.display = `${func}(${this.display})`;
      }
    },

  },
};
</script>

<style scoped>
.calculator {
  width: 320px;
}
.display {
  height: 60px;
}

</style>