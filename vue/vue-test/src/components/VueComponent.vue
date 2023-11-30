<template>
    <div>
        <label><input type="text" v-model="msg"></label>
        <p>{{ msg }}</p>
        
    </div>
</template>

<script>
    export default {
        name : 'VueComponent',
        data(){
            return{
                msg : '2023-11-30' //여기에 값을 넣어주면 실시간으로 실행창에 반영이 된다. 오..
            }
        }
    }
</script>

<style scoped>  
 p{
    background-color: cadetblue;
 }
</style>
