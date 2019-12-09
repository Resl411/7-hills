<template>
  <div class="loadpage">
    <img class="logoPic mx-auto d-block" alt="logo" src="@/assets/title7hills.jpeg" @click="gohome" style="width: 80%; cursor: pointer;">
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'start',
  data(){
    return {
      //
    }
  },
  methods: {
    gohome() {
      this.$router.push({ name: 'home'})
    }
    }
  }
</script>

<style scoped>
.logoPic {
  margin-top: 30%;  
}
</style>>

