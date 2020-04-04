<template>
  <!-- <q-page-container>
    <q-page padding>
      <q-layout view="lHh Lpr lFf"> -->
          <div>
        <div class="q-pa-md row">
            <!-- <SideNavigation/> -->
          <q-card
            class="my-card col-md-3 col-sm-5 col-xs-6 text-center"
            style="margin:auto!important;min-height:145px;min-width:130px"
          >
            <router-link to="/" style="text-decoration:none;color:black">
              <q-card-section>
                <div class="text-h6">Jobs Posted</div>
              </q-card-section>
              <q-card-section>
                <q-btn
                  dense
                  color="purple"
                  round
                  class="q-ml-md"
                  style="margin:auto"
                >
                  20
                </q-btn>
              </q-card-section>
            </router-link>
          </q-card>
          <q-card
            class="my-card col-md-3 col-sm-5 col-xs-6 text-center"
            style="margin:auto!important;min-height:145px;min-width:130px"
          >
            <router-link to="/" style="text-decoration:none;color:black">
              <q-card-section>
                <div class="text-h6">Applications Recieved</div>
              </q-card-section>

              <q-card-section>
                <q-btn
                  dense
                  color="purple"
                  round
                  class="q-ml-md"
                  style="margin:auto"
                >
                  20
                </q-btn>
              </q-card-section>
            </router-link>
          </q-card>
        </div>
        <div class="q-pa-md row">
          <q-card
            class="my-card col-md-3 col-sm-5 col-xs-6 text-center"
            style="margin:auto!important;min-height:145px;min-width:130px"
          >
            <router-link to="/" style="text-decoration:none;color:black">
              <q-card-section>
                <div class="text-h6">Applications Sent</div>
              </q-card-section>

              <q-card-section>
                <q-btn
                  dense
                  color="purple"
                  round
                  class="q-ml-md"
                  style="margin:auto"
                >
                  20
                </q-btn>
              </q-card-section>
            </router-link>
          </q-card>

          <q-card
            class="my-card col-md-3 col-sm-5 col-xs-6 text-center cursor-pointer"
            style="margin:auto!important;min-height:145px;min-width:130px"
          >
            <router-link to="/" style="text-decoration:none;color:black">
              <q-card-section>
                <div class="text-h6">Transactions</div>
              </q-card-section>

              <q-card-section>
                <q-btn
                  dense
                  color="purple"
                  round
                  class="q-ml-md"
                  style="margin:auto"
                >
                  20
                </q-btn>
              </q-card-section>
            </router-link>
          </q-card>
        </div>
        </div>
      <!-- </q-layout>
    </q-page>
  </q-page-container> -->
</template>

<script>
// import SideNavigation from "./SideNavigation"; 
export default {
  name: "Contact",
  data() {
    return {
      email: "",
      password: "",
      ph: "",
      dense: false
    };
  },
  components:{
    //   SideNavigation
  }
};
</script>

<style scoped></style>
