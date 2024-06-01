<script setup>
  import TodoList from './components/TodoList.vue'
  import WeatherSearch from './components/WeatherSearch.vue'
  import Calculator from './components/Calculator.vue'
  

  
</script>

<template>
  <div class="p-4">
    <Calculator />
    <WeatherSearch />
    
    
    <TodoList />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
