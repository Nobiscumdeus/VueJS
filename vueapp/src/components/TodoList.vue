<template>
        
        
        <h1 class="font-bold mb-4">1. Todo List Application </h1>
            <input type="text" v-model="newTodo" @keyup.enter="addTodo" class="w-full text-2xl rounded-md p-2 mb-4 border" placeholder="Add new todo here and enter..."/>

            <ul>
                <li v-for="(todo,index) in todos" :key="index" class="flex item-center justify-between bg-gray-100 mb-2 p-2 rounded-md">
                    <span class="font-bold text-2xl text-gray-900">{{ index + 1}}. {{ todo }}</span>
                    <button @click="removeTodo(index)" class="text-red-500">X</button>
                </li>
            </ul>
        

</template>

<script>

export default{

    data(){
        return{
            todos:[],
            newTodo:''
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo.trim() !== ''){
                this.todos.push(this.newTodo);
                this.newTodo=''
            }
        },
        removeTodo(index){
            this.todos.splice(index,1);
        }
    }
}
   
</script>