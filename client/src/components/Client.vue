<template>
  <div class="container">
  <div class="row" >

    <div class="col-sm-3" v-for="res in stud" :key="res.id">
      <div class="card">
        <div class="card-image">
          <!-- <img class="img-responsive" src="https://unsplash.it/400/400"> -->
          <img class="img-responsive" src={{res.image}} alt="">
          <span class="card-title">Material Cards</span>
        </div>

        <div class="card-content">
          <h3> <strong> {{res.name}} </strong></h3>
        </div>

        <div class="card-action">
          <p><i class="fa fa-bookmark-o" style="color: red;"></i> Program: {{res.program}} </p>
          <p><i class="fa fa-pagelines" style="color: red;"></i> Age: {{res.age}} </p>
          <p><i class="fa fa-intersex" style="color: red;"></i> Sex: {{res.sex}} </p>
          <p><i class="fa fa-home" style="color: red;"></i> Location: {{res.location}} </p>
        </div>
      </div>

    </div>
    
    
    

  </div>
            <div class="content-btn">
              <button class="btn btn-info" @click="getStudent">display</button>
            </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Client',
  data(){
    return{
      stud: [],
    }
  },
  methods: {
    add(a,b){
      return a + b;
    },
    getStudent(){
      axios.get('http://localhost:8081/api/students')
      .then((res) => {
        console.log( this.stud = res.data.students);
      })
      .catch((err) => {
        console.log(this.erreur = err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  justify-content: center;
}
.card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.card {
  margin-top: 10px;
  box-sizing: border-box;
  border-radius: 2px;
  background-clip: padding-box;
  min-height:400px;
}

.card span.card-title {
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
}

.card .card-image {
  position: relative;
  overflow: hidden;
}

.card .card-image img {
  border-radius: 2px 2px 0 0;
  background-clip: padding-box;
  position: relative;
  z-index: -1;
}

.card .card-image span.card-title {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 16px;
}

.card .card-content {
  padding: 16px;
  border-radius: 0 0 2px 2px;
  background-clip: padding-box;
  box-sizing: border-box;
}

.card .card-content p {
  margin: 0;
  color: inherit;
}

.card .card-content span.card-title {
  line-height: 48px;
}

.card .card-action {
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  padding: 16px;
}

.card .card-action a {
  color: #ffab40;
  margin-right: 16px;
  transition: color 0.3s ease;
  text-transform: uppercase;
}

.card .card-action a:hover {
  color: #ffd8a6;
  text-decoration: none;
}
.content-btn{
  display: flex;
  justify-content: center;
}
.btn{
  text-align: center;
  display: flex;
  justify-content: center;
  width: 205px;
  margin-top: 45%;
  border-radius: 10px;
  transition: 1s;
}
.btn:hover{
  background: white;
  color: black;
}
</style>
