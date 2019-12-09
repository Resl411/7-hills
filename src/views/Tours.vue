<template>
  <div class="tours">    
    <div class="touri">
      <ul class="nav nav-tabs fixed-bottom justify-content-center nav-fill" style="height: 105px; margin: 10px; padding-left: 15px; padding-right: 15px;" id="myTab" role="tablist">
        <li class="nav-item" style="width: 10vw; margin-right: 5px;">
          <a class="nav-link bg-dark text-white" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i class="fas fa-gift"></i> Predefined</a>
        </li>
        <li class="nav-item" style="width: 10vw; margin-left: 5px;">
          <a class="nav-link bg-dark text-white" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><i class="fas fa-edit"></i> Customize</a>
        </li>
      </ul>
      <div class="tab-content" style="margin: 50px; background: white;" id="myTabContent">
        <div class="tab-pane fade show active fixed-bottom" style="bottom: 100px; margin: 30px;" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div id="accordion">
            <div class="card border border-dark" style="margin: 5px;">              
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  Make the most out of your time and visit the hotspots of Lisbon like historic Alfama, busy Baixa Chiado, vibrant Bairro Alto and other spots downtown!
                  <div class="next" style="text-align: right;padding-top: 10px;">
                    <router-link to="/detailstour">
                      <button type="submit" class="btn btn-outline-dark active"><i class="fa fa-angle-right" aria-hidden="true"></i> Select</button>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link-dark" style="width: 299px;" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img src="@/assets/lisbon1.png" style="height: 80px; margin-right: 10px;" class="rounded float-left" alt="logo">
                    <h4 style="text-align: ;"><i class="fas fa-clock"></i> Rush</h4>Lisbon in 1 day 
                  </button>
                </h5>
              </div>            
            </div>
            <div class="card border border-dark" style="margin: 5px;">
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  Enjoy your time in Lisbon with a traditional Pastel de Belem and a coffee after visiting several places across the city.
                  <div class="next" style="text-align: right; padding-top: 10px;">
                    <router-link to="/detailstour">
                      <button type="submit" class="btn btn-outline-dark active"><i class="fa fa-angle-right" aria-hidden="true"></i> Select</button>
                    </router-link>
                  </div>
              </div>
              </div>
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link-dark collapsed" style="width: 299px;" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <img src="@/assets/lisbon3.png" style="height: 80px; margin-right: 10px;" class="rounded float-left" alt="logo">
                    <h4 style="text-align: ;"><i class="fas fa-coffee"></i> Enjoy</h4>Lisbon in 2 days
                  </button>
                </h5>
              </div>              
            </div>
            <div class="card border border-dark" style="margin: 5px;">
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Take your time to explore Lisbon and its surroundings, especially the famous palace of Sintra as well as the beautiful center of Cascais. 
                  <div class="next" style="text-align: right;">
                    <router-link to="/detailstour">
                      <button type="submit" class="btn btn-outline-dark active"><i class="fa fa-angle-right" aria-hidden="true"></i> Select</button>
                    </router-link>
                  </div>
              </div>
              </div>
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link-dark collapsed" style="width: 299px;" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <img src="@/assets/lisbon4.png" style="height: 80px; margin-right: 10px;" class="rounded float-left" alt="logo">
                  <h4 style="text-align: ;"><i class="fas fa-binoculars"></i> Explore</h4>Lisbon in 3 days             
                  </button>
                </h5>
              </div>              
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">   
          <div class="tab-pane fade show active fixed-bottom" style="bottom: 100px; margin: 30px;" id="home" role="tabpanel" aria-labelledby="home-tab">      
            <div id="accordion">
              <div class="card border border-dark" style="margin: 5px;">              
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                      <label class="btn btn-dark active">
                        <input type="radio" name="options" id="option1" autocomplete="off" checked> 1 day
                      </label>
                      <label class="btn btn-dark">
                        <input type="radio" name="options" id="option2" autocomplete="off"> 2 days
                      </label>
                      <label class="btn btn-dark">
                        <input type="radio" name="options" id="option3" autocomplete="off"> 3 days
                      </label>
                    </div>                  
                  </div>
                </div>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link-dark" style="width: 299px;" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <h4 style="text-align: left;"><i class="fas fa-clock"></i> Define the time!</h4>
                    </button>
                  </h5>
                </div>            
            </div>            
            <div class="card border border-dark" style="margin: 5px;">
              <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  <div class="tour-selection">
                    <div class="form-check" style="padding-bottom: 3px;">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Architecture
                      </label>
                    </div>
                    <div class="form-check" style="padding-bottom: 3px;">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Food
                      </label>
                    </div>
                    <div class="form-check" style="padding-bottom: 3px;">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">History
                      </label>
                    </div>
                    <div class="form-check" style="padding-bottom: 3px;">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Museum
                      </label>
                    </div>
                    <div class="form-check" style="padding-bottom: 3px;">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Music
                      </label>
                    </div>
                    <div class="form-check" style="padding-bottom: 3px;">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Secret Lisbon
                      </label>
                    </div>
                    <div class="form-check" style="padding-bottom: 3px;">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" value="">Street Art
                      </label>
                    </div>    
            </div>  
              </div>
              </div>
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link-dark collapsed" style="width: 299px;" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <h4 style="text-align: left;"><i class="fas fa-binoculars"></i> Select your interests!</h4>         
                  </button>
                </h5>
              </div>                           
            </div>
            <div class="next" style="text-align: right; padding-right: 10px;">
              <router-link to="/detailstour">
                <button type="submit" class="btn btn-outline-dark active">Next</button>
                </router-link>
            </div> 
          </div>            
        </div>
        </div>
      </div>
    </div>
    <navbartours />
  </div>
</template>

<script>
import navbartours from '@/components/Menu/navbartours.vue'

export default {
  name: 'tours',
  components: {
    navbartours
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
</style>
