<template>
 <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" style="" class="shadow-2 rounded-borders">
      <TopNavigation />
      <SideNavigation />

    

    <!-- <router-link to="/">Login</router-link>
    <router-link to="/home">Home</router-link> -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
     <q-page-container>
        <!-- <q-page> -->
          <router-view></router-view>

        <!-- </q-page> -->
      </q-page-container>
    <!-- <SideBar/> -->
    
    </q-layout>
 </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SideBar from "./views/SideBar"
import TopNavigation from "./views/TopNavigation"
import SideNavigation from "./views/SideNavigation";
export default {
  name: 'LayoutDefault',
  data(){
     return {
       tab: '',
     }
  },
  components: {
    // HelloWorld
    // Login
    // SideBar,
    TopNavigation,
    SideNavigation,
  },
  methods:{
  }
}
</script>

<style>
</style>
