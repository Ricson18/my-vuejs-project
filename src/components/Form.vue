<template>
    <div>Hello, World</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Form',
    data(){
        return {

        }
    },
    mounted(){
        // alert('hello');
        // try{
            axios({method:'POST',url:'http://localhost:4000/graphql',
                data:{
                    query:
                    `{
                        id,fname,lname,email  
                    }`
                }
            })
                .then((res)=>console.log(res.data));
            // var result=await axios({method:'POST',url:'http://localhost:4000/api',
                // data:{
                //     query:
                //     `{
                //         id,fname,lname,email  
                //     }`
                // }
            
            // alert('hi');
        // }catch(error){
        //    console.error(error);
        // }
        // console.log(result.data);
   }
}
</script>

<style lang="stylus" scoped>

</style>
