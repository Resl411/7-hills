<template>
  <div class="aboutus">
    <navbar/>
    <div class="container">
      <div class="row justify-content-md-center border border-black">
        <div class="col">
          <img src="@/assets/user.png" style="height: 100px; margin-right: 10px;" class="rounded float-right" alt="logo">
          <h4>Teresa</h4>
          <p>Project Manager</p>
        </div>      
      </div>
      <div class="row justify-content-md-center border border-black">
        <div class="col">
          <img src="@/assets/user.png" style="height: 100px; margin-right: 10px;" class="rounded float-left" alt="logo">
          <h4>Tiago</h4>
          <p>User Research Lead</p>
        </div>      
      </div>
      <div class="row justify-content-md-center border border-black">
        <div class="col">
          <img src="@/assets/user.png" style="height: 100px; margin-right: 10px;" class="rounded float-right" alt="logo">
          <h4>Clara</h4>
          <p>Front-End Lead</p>
        </div>      
      </div>
      <div class="row justify-content-md-center border border-black">
        <div class="col">
          <img src="@/assets/user.png" style="height: 100px; margin-right: 10px;" class="rounded float-left" alt="logo">
          <h4>Ricardo</h4>
          <p>Back-End Lead</p>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Menu/navbar.vue'

export default {
  name: 'about',
  components: {
    navbar
  },
  data(){
    return{
      picked: ''
    }
  }
}
</script>

<style scoped>
.touri {
  z-index: -1;
}
.container {
  margin-top: 70px;
}
.row {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  background: rgb(207, 205, 205);
}
</style>
