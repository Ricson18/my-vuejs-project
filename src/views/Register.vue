<template>    
<!-- <q-page-container>
     <q-page padding> -->
    <q-layout view="lHh Lpr lFf">    
        <div class="q-pa-md row">
            <q-card class="my-card col-md-5 col-sm-5 col-xs-12 text-center" style="margin:auto!important;min-width:250px;" >
            <q-card-section >
                <!-- <img alt="Vue logo" src="../assets/logo.png" width='50'> -->
                <div class="text-h6">WAG TECHNOLOGY</div>
                <div class="text-subtitle2">Please register</div>
            </q-card-section>

            <q-card-section >
                <div>
                <q-input placeholder='your name' filled bottom-slots v-model="email" label="Name" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
                <template v-slot:append>
                    <q-icon name="close" @click="email = ''" class="cursor-pointer" />
                </template>
                </q-input>
                </div>
                <div>
                <q-input placeholder='example@gmail.com' filled bottom-slots v-model="email" label="Email" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="email" />
                </template>
                <template v-slot:append>
                    <q-icon name="close" @click="email = ''" class="cursor-pointer" />
                </template>
                </q-input>
                </div>
                <div>
                <q-input placeholder='********' filled bottom-slots v-model="password" label="Password" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="vpn_key" />
                </template>
                <template v-slot:append>
                    <q-icon name="close" @click="password = ''" class="cursor-pointer" />
                </template>
                </q-input>
                <div class="row">
                <q-btn color='dark' class="col-12">Register</q-btn>
                </div>
                </div>
            </q-card-section>
            <q-card-section >
                Forgot Password?
            </q-card-section>
            </q-card>
    </div>

    </q-layout>
        <!-- </q-page> -->
<!-- </q-page-container> -->
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            email: '',
            password:'',
            ph: '',
            dense: false
        }
    }
}
</script>

<style scoped>

</style>