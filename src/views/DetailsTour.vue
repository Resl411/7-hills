<template>
  <div class="home">
    <navbardetails />
    <GMap3 />
    <div id="carddetails" class="card" style="display: none;">      
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th class="align-middle" scope="col"><i class="fa fa-arrow-down"></i> Route Details </th>
              <th scope="col"><router-link to="/arrived">
                      <button type="submit" class="btn btn-outline-dark active">Clever</button>
                    </router-link></th>
              <th scope="col"><router-link to="/arrived">
                      <button type="submit" class="btn btn-outline-dark active">Sporty</button>
                    </router-link></th>                        
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><i class="fa fa-battery-full"></i> Energy</th>
              <td>medium</td>
              <td>high</td>                       
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-hourglass-end"></i> Time</th>
              <td>31 min</td>
              <td>23 min</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-flag-checkered"></i> Distance</th>
              <td>2.5 km</td>
              <td>1.9 km</td>
            </tr>
            <tr>
              <th scope="row"><i class="fas fa-arrow-circle-up"></i> Elevation</th>
              <td>50 m</td>
              <td>90 m</td>
            </tr>
          </tbody>
        </table> 
        <img class="elevProfile" alt="logo" src="@/assets/elProfile.png">       
      </div>        
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import navbardetails from '@/components/Menu/navbardetails.vue'
// import ui from '@/components/Menu/ui.vue'
import GMap3 from '@/components/Menu/GMap3.vue'
// import autocomplete from '@/components/Menu/Autocomplete.vue'

export default {
  name: 'detailstours',
  components: {
    navbardetails,
    GMap3
  }
}
</script>

<style scoped>
.card {
  position: relative;
  margin-top: 611px; 
  margin-bottom: 55px;
  color: #343a40;;
  max-height: 30%;
  overflow: auto;
  padding-left: 15px;
  padding-right: 15px;
}
.card h4 {
  margin-top: 20px;
  margin-bottom: 20px;
  border: black;
}
.elevProfile {
  margin-bottom: 4px;
  width: 80vw;
  height: 130px;

}
.table {
  color: #343a40;;
}
</style>