<template>
  <div>
    <navbar />
    <GMap />
    <div class="arrived container">
      <div class="card">
        <div class="card-content">          
          <div id="alertcol" class="alert alert-success" role="alert">
            <h2>Holy guacamole!</h2>
            <hr>
            <p>You made it!</p> 
          </div>
          <div class="form-group" style="margin: 15px; padding-top: 30px; padding-bottom: 40px;" id="rating-ability-wrapper">
              <label class="control-label" for="rating">
              <span class="field-label-header">How would you rate your experience with 7hills?</span><br>
              <span class="field-label-info"></span>
              <input type="hidden" id="selected_rating" name="selected_rating" value="" required="required">
              </label>
              <h2 class="bold rating-header" style="">
              <span class="selected-rating">0</span><small> / 5</small>
              </h2>
              <button type="button" class="btnrating btn btn-default btn-lg" data-attr="1" id="rating-star-1">
                  <i class="fa fa-star" aria-hidden="true"></i>
              </button>
              <button type="button" class="btnrating btn btn-default btn-lg" data-attr="2" id="rating-star-2">
                  <i class="fa fa-star" aria-hidden="true"></i>
              </button>
              <button type="button" class="btnrating btn btn-default btn-lg" data-attr="3" id="rating-star-3">
                  <i class="fa fa-star" aria-hidden="true"></i>
              </button>
              <button type="button" class="btnrating btn btn-default btn-lg" data-attr="4" id="rating-star-4">
                  <i class="fa fa-star" aria-hidden="true"></i>
              </button>
              <button type="button" class="btnrating btn btn-default btn-lg" data-attr="5" id="rating-star-5">
                  <i class="fa fa-star" aria-hidden="true"></i>
              </button>
          </div>            
          <p>
            <a class="btn btn-info" style="margin-right: 10px;" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i class="fa fa-info" aria-hidden="true"></i> Learn more
            </a>
            <router-link to="/stats">
              <button class="btn btn-dark" style="margin-right: 10px;" type="button">
                <i class="fa fa-address-card" aria-hidden="true"></i> Statistics
              </button>
            </router-link>
            <router-link to="/home">
              <button id="donecol" class="btn btn-success" type="button">
                <i class="fa fa-angle-right" aria-hidden="true"></i> Done
              </button>
            </router-link>            
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              <a href="https://www.visitlisboa.com/" class="alert-link">Visit Lisboa</a> for more information
            </div>
          </div>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Menu/navbar.vue'
import GMap from '@/components/Menu/GMap.vue'

export default {
  name: 'arrived',
  components: {
    navbar,
    GMap
  },
  data() {
    return {
    }
  },

  methods:{
    rating() {
      console.log('lala');
      jQuery(document).ready(function($){
  
      $(".btnrating").on('click',(function(e) {
      
      var previous_value = $("#selected_rating").val();
      
      var selected_value = $(this).attr("data-attr");
      $("#selected_rating").val(selected_value);
      
      $(".selected-rating").empty();
      $(".selected-rating").html(selected_value);
      
      for (var i = 1; i <= selected_value; ++i) {
      $("#rating-star-"+i).toggleClass('btn-warning');
      $("#rating-star-"+i).toggleClass('btn-default');
      }
      
      for (var ix = 1; ix <= previous_value; ++ix) {
      $("#rating-star-"+ix).toggleClass('btn-warning');
      $("#rating-star-"+ix).toggleClass('btn-default');
      }
      }));         
      })
    }
  },
  mounted(){
    this.rating()
  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrived {
  text-align: center;  
  margin-top: 80px;
}
.alert {
  margin: 25px;
}
.rating-header {
    margin-top: 5px;
    margin-bottom: 5px;
}
#donecol {
  background-color: #4E8E6C;
}
.btnrating {
  margin: 4px;
  padding: 10px;
}

</style>
