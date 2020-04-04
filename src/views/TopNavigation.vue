<template>
    <q-header elevated class="bg-black">
      <q-toolbar style="" class="bg-dark text-white shadow-2 rounded-borders" >
        <q-btn @click="setDrawer" round dense icon="menu" />
        <q-btn flat label="Homepage" />
        <q-space />

        <!--
          notice shrink property since we are placing it
          as child of QToolbar
        -->
            <q-tabs v-model="tab" shrink>
        
            <router-link to="/home" style="text-decoration:none;color:white">
                <q-tab name="tab1" label="Home" />
            </router-link>
            <router-link to="/about" style="text-decoration:none;color:white">
                <q-tab name="tab2" label="About" />
            </router-link>
            <router-link to="/contact" style="text-decoration:none;color:white">
                <q-tab name="tab3" label="Contact" />
            </router-link>
            <!-- <router-link to="/jobcategories" style="text-decoration:none;color:white">
                <q-tab name="tab3" label="JobCategories" />
            </router-link> -->
            <!-- <router-link to="/jobsincategory" style="text-decoration:none;color:white">
                <q-tab name="tab3" label="Jobs in Category" />
            </router-link> -->
            <router-link to="/register" style="text-decoration:none;color:white">
                <q-tab name="tab3" label="Register" />
            </router-link>
            <router-link to="/login" style="text-decoration:none;color:white">
                <q-tab name="tab3" label="Login" />
            </router-link>
            </q-tabs>
      </q-toolbar>
    </q-header>
</template>

<script>
import { mapActions } from "vuex";
// import { mapGetters, mapActions } from "vuex";
export default {
    name:'TopNavigation',
    data(){
        return {
            tab:'',
        }
    },
    methods:{
        ...mapActions(['setDrawerAction']),
        setDrawer(){
            this.setDrawerAction(true);
        }
    },
    // computed:mapGetters(['getDrawer'])
}
</script>
