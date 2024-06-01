import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import Validator from './components/Validator.vue'

const app=createApp(App)
app.component('fooditem',FoodItem)
app.component('validator',Validator)
app.mount('#app')

