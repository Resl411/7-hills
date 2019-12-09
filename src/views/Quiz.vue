<template>
  <div>
    <navbar />
    <GMap2 />
    <div class="quiz container">
      <div class="card">
        <div class="card-content">
          <div class="smile">
            <h2 class="black-text">QUIZ time</h2>
          </div>
          <div class="question">
            <h2>When was the castle finally restored?</h2>
            <form @submit.prevent="CheckAnswer">
              <div class="field answer">
                  <label for="answer">Fill in your answer here</label>
                  <input placeholder="your answer" id="answer" type="text" v-model="answer">
              </div>
              <div class="field">
                  <p v-if="feedbackPos" class="black-text">{{ feedbackPos }}</p>
                  <button class="btn black hoverable">Submit answer</button>
                </div>
            </form>
          </div>
          <ul class="quiz">
            <a href="" class="btn-floating btn-large waves-effect waves-light black left hoverable">
                        <router-link :to="{ name: 'arrived'}">
                            <i class="material-icons">info_outline</i>
              </router-link>
            </a>
            <a href="" class="btn-floating btn-large waves-effect waves-light green right hoverable">
                        <router-link :to="{ name: 'stats' }">
                            <i class="material-icons">directions_run</i>
              </router-link>
            </a>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/Menu/navbar.vue'
import GMap2 from '@/components/Menu/GMap.vue'

export default {
  name: 'arrived',
  components: {
    navbar,
    GMap2
  },
  data() {
    return {
      answer: null,
      feedbackPos: null,
      feedbackNeg: null      
    }
  }, 
  methods: {
    CheckAnswer(){
      if (this.answer == '1938') {
        this.feedbackPos = "Great, you've got it!"
      } 
      else {
        this.feedback = "Sorry, that's wrong :("
      }
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.arrived {
  margin-top: 100px;
  font-family: 'Ink Free';
}
.black-text{
 
  font-size: 3.5em;
}
.info-card h2 {
  font-size: 2.0em;
}
.info-card dest-info {
  font-size: 1.5em;
}
.field {
  display: inline-block;
}
.quiz {
  text-align: center;
}
.question h2{
  font-size: 2.0em;
}
.material-icons {
  padding-left: 10px;
}
.dest-info{
  text-align: left;
  font-family: sans-serif;
  max-height: 100px;
  overflow: auto;
}
</style>
