import FoodItem from './FoodItem.vue'

<template>
    <h3> Component with v-for based on an array </h3>
   
</template>


<script>

export default{

    data(){
        return{
            foods:['apples','mango','oranges','pineapple','palmkernel'],

        }
    }

}
</script>