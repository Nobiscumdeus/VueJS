<template>

    <h1 class="font-bold">2.  Weather Search </h1>
    
        <span v-if="error" class="text-red-500 mb-2"> {{ error }} </span>
        <input type="text"  class="font-bold text-2xl w-full border rounded-md p-4 mb-4" v-model="location" placeholder="Enter location (city or zip code)" />
        <button @click="searchWeather"> Search </button>

        

    <WeatherApp :weather="weather"/>

</template>

<script>
import WeatherApp from './WeatherApp.vue'
import axios from 'axios'
export default{
    components:{
        WeatherApp
    },
    data(){
        return{
            location:'',
            weather:null,
            error:''
        }
    },
    methods:{
        async searchWeather(){
             const api_Key="cafd4cb652f41096c0e782eeb8f84428"
            try{
               
                //const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=api_Key`);
                const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${api_Key}&units=metric`)
                this.weather=response.data;
                this.error=''
            }catch(error){
                this.error='Error fetching weather data. Please try again!'
                console.error(error)

            }
        }
    }

}

</script>