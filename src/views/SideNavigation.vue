<template>
    <div>
      <q-drawer 
        v-model="getDrawer" show-if-above :width="200" :breakpoint="500"
        bordered content-class="bg-grey-3">
        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

                <!-- <q-tab name="tab3" label="Dashboard" /> -->

            <router-link :to="menuItem.to" style="text-decoration:none;color:black">
                <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                    <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                    {{ menuItem.label }}
                </q-item-section>
                </q-item>
            </router-link>

           <q-separator v-if="menuItem.separator" />

          </q-list>
        </q-scroll-area>
      </q-drawer>
    </div>
</template>

<script>
// import { mapGetters,mapActions } from "vuex";
import { mapState,mapActions } from "vuex";
const menuList = [
  {
    icon: 'dashboard',
    label: 'Dashboard',
    separator: true,
    to:'/dashboard'
  },
  {
    icon: 'category',
    label: 'Job Categories',
    separator: false,
    to:'/jobcategories'
  },
  {
    icon: 'ballot',
    label: 'All Jobs',
    separator: false,
    to:'/jobsincategory'
  },
      {
        icon: 'person_pin',
        label: 'Profile',
        separator: false,
        to:'/profile'
      },
  {
      icon: 'settings',
    label: 'Settings',
    separator: false,
    to:'/'
  },
  {
    icon: 'logout',
    label: 'Log out',
    separator: true,
    to:'/'
  },
//   {
//     icon: 'help',
//     iconColor: 'primary',
//     label: 'Help',
//     separator: false,
//     to:'/'
//   }
];

export default {
    name:'SideNavigation',
    data(){
        return {
            menuList
        }
    },
    computed:{
        ...mapState(['drawer']),
        getDrawer:{
            get (){return this.$store.state.drawer},
            set (){this.setDrawerAction()}
        }
        },
    methods:{
        ...mapActions(['setDrawerAction'])
    },
    setDrawer(){
    }
}
</script>