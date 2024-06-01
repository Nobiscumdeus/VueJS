<!--- Parent Component -->
<template>

    <Emit @button-clicked="handleButtonClick" />
    <p> {{ message }} </p>
</template>

<script>

import Emit from './Emit.vue'

export default {
    components:{
        Emit
    },
    data(){
        return{
            message:''
        }
    },
    methods:{
        handleButtonClick(message){
            //This method will be called whenever the button-clicked event is emitted 
            this.message=message //Set message received from the child 
        }
    }
}

</script>