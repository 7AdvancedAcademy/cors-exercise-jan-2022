<template>
    <div class="container">
        <h2 style="color:white;">user numero {{stud}} </h2>
        <button @click="getUser">index of user</button>
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    name: 'SingleUser',
    data(){
        return{
            stud: []
        }
    },
    methods : {
        getUser(){
            axios.get('http://localhost:8081//api/student/:id')
             .then((res) => {
              console.log( this.stud = res.data.students.id);
         })
           .catch((err) => {
            console.log(err)
      })
        }
    }
}
</script>

<style>

</style>