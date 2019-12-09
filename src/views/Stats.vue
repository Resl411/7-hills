<template>
  <div class="stats">
    <navbar />
    <div class="card">      
      <div class="table-responsive table-success">
        <h5 class="statstitle text-center">Tour Statistics</h5>
        <table class="table table-hover">
          <tbody class="tbody">
            <tr>
              <th scope="row"><i class="fa fa-map-marker"></i> spots visited</th>
              <td>4</td>                                 
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-hourglass-end"></i> time needed</th>
              <td>03:45:00</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-flag-checkered"></i> km walked</th>
              <td>6.8</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-blind"></i> steps made</th>
              <td>8.736</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-home"></i> floors climbed</th>
              <td>84</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-arrow-circle-up"></i> m in elevation </th>
              <td>270</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-fire"></i> calories burned</th>
              <td>2.107</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-leaf"></i> CO2 saved</th>
              <td>6 g</td>
            </tr>
          </tbody>
        </table> 
        <router-link to="/home">
         <button type="submit" class="btn btn-outline-dark active"><i class="fas fa-globe"></i> Home</button>
        </router-link>
      </div>
      
    </div>        
  </div>
</template>

<script>

import navbar from '@/components/Menu/navbar.vue'

export default {
  name: 'stats',
  components: {
    navbar
  }
}
</script>

<style scoped>
.card {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 70px;
}
.statstitle {
  margin-top: 20px;
  margin-bottom: 10px;
}
.table {
  margin-left: 20px;
  margin-right: 60px;
  width: 90%;
}
.table th {
  padding-right: 0px;
}
.table td {
  padding-left: 0px;
}
.btn {
  margin: 15px;
  
  float: right;
}

</style>
