<template>

    <p> {{ foodName }} </p>
    <p> {{ foodDesc }} </p>
    <p> {{ isFavorite }} </p>


</template>


<script>

export default{

    

    props:{
        foodName:{
            type:String,
            required:true
        },
        foodDesc:{
            type:String,
            required:true,
            default:'This is the default Description',
            validator:function(value){
                if(20<value.length && value.length <50){
                    return true
                }
                else{
                    return false
                }
            }

        },
        isFavorite:{
            type:Boolean,
            required:false,
            default:false
        }
    }
}

</script>