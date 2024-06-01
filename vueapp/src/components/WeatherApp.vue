<template>

    <div v-if="weather" class="font-bold text-2xl mb-4 p-4">
        
        <h2 class="underline"> {{ weather.name}} Weather results</h2>
        <p>Temperature: {{ weather.main.temp }}°C</p>
        <p>Humidity: {{ weather.main.humidity }}%</p>
        <p>Wind Speed: {{ weather.wind.speed }} m/s</p>
    </div>
    
</template>

<script>
export default {
  props:{
    weather:Object
  }
}
</script>