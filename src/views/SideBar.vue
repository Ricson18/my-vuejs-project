<template>
    <div>
      <!-- <DrawerHeader/> -->
      <q-page-container>
        <q-page padding>
          <!-- <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p> -->
          <Login/>
        </q-page>
      </q-page-container>
    <!-- </q-layout>
  </div> -->
  </div>
</template>

<script>
  // import DrawerHeader from './DrawerHeader';
  import Login from './Login';

  export default {
    name:'SideBar',
    components:{
      // DrawerHeader,
      Login
    }
  }
</script>

<style lang="stylus" scoped>

</style>