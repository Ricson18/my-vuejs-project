<template>    
<!-- <q-page-container>
     <q-page padding> -->
    <q-layout view="lHh Lpr lFf">    
        <div class="q-pa-md row">
            <q-card class="my-card col-md-5 col-sm-5 col-xs-12 text-center" style="margin:auto!important;min-width:250px;" >
            <q-card-section >
                <!-- <img alt="Vue logo" src="../assets/logo.png" width='50'> -->
                <div class="text-h6">WAG TECHNOLOGY</div>
                <div class="text-subtitle2">My Profile</div>
            </q-card-section>

            <q-card-section >
                <div>
                <q-field placeholder='your name' filled bottom-slots :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="person" />
                </template>
                <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0" >{{name}}</div>
                </template>
                </q-field>
                </div>
                <div>
                <q-field placeholder='example@gmail.com' filled bottom-slots :dense="dense">
                    <template v-slot:prepend>
                        <q-icon name="email" />
                    </template>
                    <template v-slot:control>
                        <div class="self-center full-width no-outline" tabindex="0" >{{email}}</div>
                    </template>
                </q-field>
                </div>
                <div>
                <q-field placeholder='********' filled bottom-slots v-model="password" :dense="dense">
                <template v-slot:prepend>
                    <q-icon name="vpn_key" />
                </template>
                <template v-slot:control>
                    <div class="self-center full-width no-outline" tabindex="0" >{{password}}</div>
                </template>
                </q-field>
                <div class="row">
                <q-btn bottom-slots color='dark' class="col-12" label="Edit" icon='edit'>
                    <template v-slot:prepend>
                        <q-icon name="vpn_key" />
                    </template>
                </q-btn>
                </div>
                </div>
            </q-card-section>
            </q-card>
    </div>

    </q-layout>
        <!-- </q-page> -->
<!-- </q-page-container> -->
</template>

<script>
export default {
    name:'Profile',
    data(){
        return {
            name:'Abdulhakeem Salawu',
            email: 'hakeemsalawu@gmail.com',
            password:'********',
            ph: '',
            dense: false
        }
    }
}
</script>

<style scoped>

</style>