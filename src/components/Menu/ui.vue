<template>
 <div id="ui">
   <nav class="main-nav">
     <div class="logo">
      <router-link to="/home"> 7hi/\s </router-link>
     </div>
     <Burger></Burger>
   </nav>

   <Sidebar>
     <ul class="sidebar-panel-nav" @click="closeSidebarPanel">
       <li><router-link to="/home">home</router-link></li>
       <li><router-link to="/tours">tours</router-link></li>
       <li><a href="#aboutus">about us</a></li>
       <li><a href="#contact">contact</a></li>
     </ul>
   </Sidebar>
 </div>
</template>

<script>
import Burger from './Burger.vue';
import Sidebar from './Sidebar.vue';
import { store, mutations } from '@/store.js';

export default {
 name: 'ui',
 components: {
   Burger,
   Sidebar
 },
 methods: {
            closeSidebarPanel: mutations.toggleNav
        },
}
</script>
<style scoped>
html {
   height: 100%;
   overflow:hidden;
 }

  #ui {
   border: 0; margin: 0; padding: 0;
   font-family: 'Ink Free';
   height: 100%;
   z-index: -1;
   background: rgb(184, 52, 0);
   background: linear-gradient(45deg, rgb(134, 130, 130) 0%, rgb(146, 135, 132) 48%, rgba(245, 161, 112, 0.87) 100%);}
 

 .logo {
   align-self: center;
   color: #fff;
   font-weight: bold;
   font-family: 'Ink Free';
   font-size: 2.7em;
 }

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
   background-color: rgba(223, 76, 43, 0.925);
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 } 

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 2.0rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>