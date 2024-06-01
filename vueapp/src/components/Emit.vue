<!-- Child Component Emit vue -->
<template>

    <button @click="handleClick"> CLICK</button>

</template>


<script>

export default{
   methods:{
        handleClick(){
            //Emiting a custom event named button-clicked 
            this.$emit('button-clicked','Button has been clicked');
        }
   }

}

</script>