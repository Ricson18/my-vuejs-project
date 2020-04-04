<template>
  <div class="home">
    asdasdsa
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <SideBar/> -->
    <Form/>
    
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Form from '@/components/Form.vue';
// import SideBar from '@/components/SideBar'
// import Form from '../components/Form'

// import axios from 'axios';
// const axios = require('axios');



export default {
  name: 'home',
  components: {
    // HelloWorld,
      Form,
      // SideBar
  },
   created(){

  //  async mounted(){
    //  try{
      
      //  var res=await axios.get('http://localhost:8080');
      //  console.log(1);
    //  }catch(error){
    //    console.error(error);
    //  }
   
   }
  //    try{
  //       var result=await axios.post({method:'POST',url:'http://localhost:4000/graphql',
  //         data:{
  //           query:
  //           `{
  //              id,fname,lname,email  
  //           }`
  //         }
  //       });
  //    }catch(error){
  //      console.error(error);
  //    }
  //    console.log(result.data.data);
  //  }
      // try{
      //   var result=await axios.post('http://localhost:4000/graphql',
      //     data:{
      //       query: `{
      //          id,fname,lname,email
      //       }`
      //     }
      //   );
      //   console.log(result.data.data);
      // }catch(error){
      //   console.error(error);
      // }
        // .then(function (res){
        //     console.log(res.data)
        //     // this.tData=res.data
        //   }
        // );
    // }
}
</script>
